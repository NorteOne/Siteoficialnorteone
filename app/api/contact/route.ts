import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export const runtime = "nodejs";

/**
 * Rate limiting simples em memória (janela deslizante por IP).
 * Adequado como camada básica de proteção contra spam/abuso.
 * Em ambientes serverless com múltiplas instâncias, considere substituir
 * por um rate limiter distribuído (ex: Upstash Redis) para produção em escala.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

export async function POST(request: Request) {
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
    body = await request.json();
  } catch {
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

  // Integração de envio (e-mail/CRM) fica a cargo das variáveis de ambiente
  // RESEND_API_KEY / CONTACT_EMAIL_TO. Sem essas credenciais reais, o lead
  // é apenas registrado no log do servidor para não perder a submissão.
  if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL_TO) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Norte One <site@norteone.com.br>",
          to: process.env.CONTACT_EMAIL_TO,
          subject: `Novo contato — ${lead.company}`,
          text: [
            `Nome: ${lead.name}`,
            `Empresa: ${lead.company}`,
            `WhatsApp: ${lead.whatsapp}`,
            `E-mail: ${lead.email}`,
            `Segmento: ${lead.segment}`,
            `Desafio: ${lead.challenge}`,
          ].join("\n"),
        }),
      });
    } catch (error) {
      console.error("[contact] falha ao enviar e-mail", error);
    }
  } else {
    console.info("[contact] novo lead recebido (envio de e-mail não configurado)", lead);
  }

  return NextResponse.json({ ok: true });
}
