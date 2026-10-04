import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export const runtime = "nodejs";

/**
 * Rate limiting simples em memória (janela fixa por IP).
 * Adequado como camada básica de proteção contra spam/abuso.
 * Em ambientes serverless com múltiplas instâncias, considere substituir
 * por um rate limiter distribuído (ex: Upstash Redis) para produção em escala.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_RATE_LIMIT_KEYS = 10_000;
const MAX_BODY_BYTES = 16 * 1024;
const CLEANUP_INTERVAL = 100;
const OVERFLOW_KEY = "__overflow__";
const hits = new Map<string, { count: number; windowStartedAt: number }>();
let requestsSinceCleanup = 0;

function cleanupExpiredBuckets(now: number) {
  requestsSinceCleanup += 1;
  if (requestsSinceCleanup < CLEANUP_INTERVAL) return;

  requestsSinceCleanup = 0;
  for (const [key, bucket] of hits) {
    if (now - bucket.windowStartedAt >= WINDOW_MS) hits.delete(key);
  }
}

function isRateLimited(ip: string) {
  const now = Date.now();
  cleanupExpiredBuckets(now);

  const key = hits.has(ip) || hits.size < MAX_RATE_LIMIT_KEYS ? ip : OVERFLOW_KEY;
  const current = hits.get(key);
  const bucket =
    !current || now - current.windowStartedAt >= WINDOW_MS
      ? { count: 0, windowStartedAt: now }
      : current;

  if (bucket.count >= MAX_REQUESTS) return true;

  bucket.count += 1;
  hits.set(key, bucket);
  return false;
}

class RequestBodyTooLargeError extends Error {}

async function readJsonBody(request: Request): Promise<unknown> {
  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    throw new RequestBodyTooLargeError();
  }

  if (!request.body) return null;

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new RequestBodyTooLargeError();
    }
    chunks.push(value);
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return JSON.parse(new TextDecoder().decode(body));
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")
    ?.split(";", 1)[0]
    .trim()
    .toLowerCase();
  if (contentType !== "application/json") {
    return NextResponse.json(
      { ok: false, message: "Formato de requisição não suportado." },
      { status: 415 }
    );
  }

  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) {
    return NextResponse.json(
      { ok: false, message: "Origem da requisição não permitida." },
      { status: 403 }
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Muitas tentativas. Tente novamente em alguns minutos." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await readJsonBody(request);
  } catch (error) {
    if (error instanceof RequestBodyTooLargeError) {
      return NextResponse.json(
        { ok: false, message: "Requisição muito grande." },
        { status: 413 }
      );
    }
    return NextResponse.json(
      { ok: false, message: "Requisição inválida." },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Verifique os campos destacados e tente novamente.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  // Honeypot: se preenchido, é bot. Responder como sucesso silenciosamente.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { website, consent, ...lead } = parsed.data;
  void website;
  void consent;

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL_TO) {
    console.error("[contact] envio de e-mail não configurado");
    return NextResponse.json(
      {
        ok: false,
        message:
          "O formulário está temporariamente indisponível. Tente novamente ou use o WhatsApp.",
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Norte One <site@norteone.com.br>",
        to: process.env.CONTACT_EMAIL_TO,
        reply_to: lead.email,
        subject: `Novo contexto — ${lead.company}`,
        text: [
          `Nome: ${lead.name}`,
          `Empresa: ${lead.company}`,
          `E-mail: ${lead.email}`,
          lead.whatsapp ? `WhatsApp informado: ${lead.whatsapp}` : null,
          `Contexto: ${lead.challenge}`,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("[contact] provedor recusou o envio", response.status);
      return NextResponse.json(
        {
          ok: false,
          message:
            "Não foi possível enviar agora. Tente novamente ou use o WhatsApp.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    console.error("[contact] falha de conexão com o provedor de e-mail");
    return NextResponse.json(
      {
        ok: false,
        message:
          "Não foi possível enviar agora. Tente novamente ou use o WhatsApp.",
      },
      { status: 502 }
    );
  }
}
