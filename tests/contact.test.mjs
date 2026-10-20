import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import { afterEach, beforeEach, mock, test } from "node:test";

// Node 24 runs the real TypeScript modules without adding a test dependency.
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === "@/lib/validation") {
      return nextResolve(new URL("../lib/validation.ts", import.meta.url).href, context);
    }
    if (specifier === "next/server") return nextResolve("next/server.js", context);
    return nextResolve(specifier, context);
  },
});

const { contactFormSchema } = await import("../lib/validation.ts");
const { POST } = await import("../app/api/contact/route.ts");
const previousEnv = { ...process.env };
const lead = {
  name: "Contato QA",
  company: "Empresa de teste local",
  email: "qa@example.invalid",
  whatsapp: "(66) 99966-8355",
  challenge: "Precisamos organizar o atendimento da empresa.",
  consent: true,
  website: "",
};
let requestId = 0;

function request(body = lead, headers = {}) {
  return new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "http://localhost:3000",
      "X-Forwarded-For": `qa-${++requestId}`,
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

beforeEach(() => {
  process.env.RESEND_API_KEY = "local-test-key";
  process.env.CONTACT_EMAIL_TO = "qa@example.invalid";
  // Fail closed: no test can contact Resend or any real receiving channel.
  mock.method(globalThis, "fetch", async () => {
    throw new Error("Unexpected outbound request in a local test");
  });
  mock.method(console, "error", () => {});
});

afterEach(() => {
  mock.restoreAll();
  for (const key of ["RESEND_API_KEY", "CONTACT_EMAIL_TO"]) {
    if (previousEnv[key] === undefined) delete process.env[key];
    else process.env[key] = previousEnv[key];
  }
});

test("Brazilian phone accepts local, international, formatted and optional input", () => {
  for (const whatsapp of ["", "66999668355", "+55 (66) 99966-8355", "(66) 3555-1234"]) {
    assert.equal(contactFormSchema.safeParse({ ...lead, whatsapp }).success, true, whatsapp);
  }
});

test("Brazilian phone rejects letters, missing DDD and invalid lengths", () => {
  for (const whatsapp of ["abcdefgh", "99966-8355", "12345678", "669999999999", "+1 202 555 0123"]) {
    assert.equal(contactFormSchema.safeParse({ ...lead, whatsapp }).success, false, whatsapp);
  }
});

test("required fields, email, consent, bounds and unknown fields are validated", () => {
  for (const patch of [
    { name: " " }, { company: " " }, { email: "invalid" }, { consent: false },
    { challenge: "short" }, { name: "n".repeat(121) }, { company: "c".repeat(161) },
    { email: `${"e".repeat(250)}@example.invalid` }, { challenge: "c".repeat(2001) },
    { whatsapp: "6".repeat(21) }, { website: "w".repeat(201) }, { extra: "not allowed" },
  ]) {
    assert.equal(contactFormSchema.safeParse({ ...lead, ...patch }).success, false);
  }
  const parsed = contactFormSchema.parse({ ...lead, name: "  Contato QA  " });
  assert.equal(parsed.name, "Contato QA");
});

test("success requires the provider receipt and preserves the text-only payload", async () => {
  globalThis.fetch.mock.mockImplementation(async (url, options) => {
    assert.equal(url, "https://api.resend.com/emails");
    assert.ok(options.signal instanceof AbortSignal);
    const payload = JSON.parse(options.body);
    assert.equal(payload.to, "qa@example.invalid");
    assert.equal(payload.reply_to, lead.email);
    assert.ok(payload.text.includes(lead.challenge));
    assert.equal(payload.html, undefined);
    assert.equal(payload.consent, undefined);
    assert.equal(payload.website, undefined);
    return Response.json({ id: "local-test-receipt" });
  });
  const response = await POST(request());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(globalThis.fetch.mock.callCount(), 1);
});

test("API stays pending until the provider acknowledges the request", async () => {
  let release;
  let finished = false;
  globalThis.fetch.mock.mockImplementation(() => new Promise((resolve) => { release = resolve; }));
  const pending = POST(request()).then((response) => { finished = true; return response; });
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(finished, false);
  release(Response.json({ id: "local-test-receipt" }));
  assert.equal((await pending).status, 200);
});

test("provider requests have a bounded timeout", async () => {
  mock.method(AbortSignal, "timeout", (duration) => {
    assert.equal(duration, 10_000);
    return new AbortController().signal;
  });
  globalThis.fetch.mock.mockImplementation(async () => Response.json({ id: "local-test-receipt" }));
  assert.equal((await POST(request())).status, 200);
  assert.equal(AbortSignal.timeout.mock.callCount(), 1);
});

test("HTTP 200 without a valid provider receipt cannot become success", async () => {
  for (const body of [{}, { id: "" }, { id: " " }, { id: 123 }, null]) {
    globalThis.fetch.mock.mockImplementation(async () => Response.json(body));
    const response = await POST(request());
    assert.equal(response.status, 502);
    assert.equal((await response.json()).ok, false);
  }
});

test("malformed provider JSON, rejection and network failure are recoverable errors", async () => {
  for (const makeResponse of [
    () => new Response("invalid", { status: 200 }),
    () => new Response(null, { status: 204 }),
    () => Response.json({ error: "private provider details" }, { status: 403 }),
    () => { throw new TypeError("private network details"); },
    () => { throw new DOMException("Timeout", "TimeoutError"); },
  ]) {
    globalThis.fetch.mock.mockImplementation(async () => makeResponse());
    const response = await POST(request());
    assert.equal(response.status, 502);
    const body = await response.text();
    assert.equal(JSON.parse(body).ok, false);
    assert.equal(body.includes("private"), false);
  }
});

test("unconfigured sending fails explicitly without outbound traffic", async () => {
  delete process.env.RESEND_API_KEY;
  const response = await POST(request());
  assert.equal(response.status, 503);
  assert.equal(globalThis.fetch.mock.callCount(), 0);
});

test("server rejects invalid fields with errors shared with the client", async () => {
  for (const patch of [{ email: "invalid" }, { whatsapp: "abcdefgh" }, { consent: false }]) {
    const response = await POST(request({ ...lead, ...patch }));
    assert.equal(response.status, 422);
    const body = await response.json();
    assert.equal(body.ok, false);
    assert.ok(body.errors[Object.keys(patch)[0]].length);
  }
  assert.equal(globalThis.fetch.mock.callCount(), 0);
});

test("same-origin and JSON requirements remain enforced", async () => {
  for (const origin of ["https://untrusted.example", ""]) {
    assert.equal((await POST(request(lead, { Origin: origin }))).status, 403);
  }
  assert.equal((await POST(request(lead, { "Content-Type": "text/plain" }))).status, 415);
  assert.equal((await POST(request("{invalid"))).status, 400);
  assert.equal(globalThis.fetch.mock.callCount(), 0);
});

test("both declared and actual body size limits remain enforced", async () => {
  assert.equal((await POST(request(lead, { "Content-Length": "17000" }))).status, 413);
  assert.equal((await POST(request("x".repeat(17000)))).status, 413);
  assert.equal(globalThis.fetch.mock.callCount(), 0);
});

test("honeypot remains silent and never forwards the lead", async () => {
  const response = await POST(request({ ...lead, website: "spam.example" }));
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(globalThis.fetch.mock.callCount(), 0);
});

test("the sixth attempt in the same IP window is rate limited", async () => {
  for (let index = 0; index < 5; index++) {
    assert.equal((await POST(request({}, { "X-Forwarded-For": "rate-limit-qa" }))).status, 422);
  }
  assert.equal((await POST(request({}, { "X-Forwarded-For": "rate-limit-qa" }))).status, 429);
  assert.equal(globalThis.fetch.mock.callCount(), 0);
});

test("failure logs contain neither personal data nor provider response bodies", async () => {
  globalThis.fetch.mock.mockImplementation(async () => Response.json({ detail: lead.email }, { status: 500 }));
  await POST(request());
  assert.ok(console.error.mock.callCount() > 0);
  const logs = JSON.stringify(console.error.mock.calls.map((call) => call.arguments));
  for (const value of [lead.name, lead.company, lead.email, lead.whatsapp, lead.challenge, "local-test-key"]) {
    assert.equal(logs.includes(value), false);
  }
});

test("WhatsApp fallback uses the official number and encodes contextual messages", async () => {
  const previous = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  try {
    const { getWhatsAppLink } = await import("../lib/site-config.ts?official-number-test");
    const contextual = "Ol\u00e1, integra\u00e7\u00f5es & processos?";
    for (const message of [undefined, contextual]) {
      const url = new URL(getWhatsAppLink(message));
      assert.equal(url.origin, "https://wa.me");
      assert.equal(url.pathname, "/5566999668355");
      assert.ok(url.searchParams.get("text"));
      if (message) assert.equal(url.searchParams.get("text"), contextual);
    }
  } finally {
    if (previous === undefined) delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    else process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = previous;
  }
});
