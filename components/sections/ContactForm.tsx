"use client";

import { useId, useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormField, inputClasses } from "@/components/ui/FormField";
import { contactFormSchema } from "@/lib/validation";
import { segments } from "@/content/segments";

type Status = "idle" | "loading" | "success" | "error";

type FieldErrors = Partial<Record<keyof typeof initialValues, string>>;

const initialValues = {
  name: "",
  company: "",
  whatsapp: "",
  email: "",
  segment: "",
  challenge: "",
  consent: false,
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const formId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerMessage(null);

    const result = contactFormSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const [key, messages] of Object.entries(
        result.error.flatten().fieldErrors
      )) {
        if (messages?.[0]) fieldErrors[key as keyof FieldErrors] = messages[0];
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        setStatus("error");
        setServerMessage(
          data.message ?? "Não foi possível enviar sua mensagem. Tente novamente."
        );
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setServerMessage("Falha de conexão. Verifique sua internet e tente novamente.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-[var(--radius-card-lg)] border border-[var(--color-border)] bg-white p-10 text-center"
      >
        <CheckCircle2 size={40} className="text-cobre" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-grafite">Mensagem enviada.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-cinza-pedra">
          Recebemos o seu contato. Em breve alguém da Norte One vai falar com
          você para entender melhor o cenário da sua empresa.
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")} type="button">
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={`${formId}-privacy`}
      className="space-y-5 rounded-[var(--radius-card-lg)] border border-[var(--color-border)] bg-white p-6 sm:p-8"
    >
      {/* Honeypot: campo invisível para humanos, usado para filtrar bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Não preencha este campo</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => setValues((v) => ({ ...v, website: e.target.value }))}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Nome" htmlFor={`${formId}-name`} error={errors.name}>
          <input
            id={`${formId}-name`}
            name="name"
            autoComplete="name"
            className={inputClasses(!!errors.name)}
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          />
        </FormField>

        <FormField label="Empresa" htmlFor={`${formId}-company`} error={errors.company}>
          <input
            id={`${formId}-company`}
            name="company"
            autoComplete="organization"
            className={inputClasses(!!errors.company)}
            value={values.company}
            onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
          />
        </FormField>

        <FormField label="WhatsApp" htmlFor={`${formId}-whatsapp`} error={errors.whatsapp}>
          <input
            id={`${formId}-whatsapp`}
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            className={inputClasses(!!errors.whatsapp)}
            value={values.whatsapp}
            onChange={(e) => setValues((v) => ({ ...v, whatsapp: e.target.value }))}
          />
        </FormField>

        <FormField label="E-mail corporativo" htmlFor={`${formId}-email`} error={errors.email}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            className={inputClasses(!!errors.email)}
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          />
        </FormField>
      </div>

      <FormField label="Segmento" htmlFor={`${formId}-segment`} error={errors.segment}>
        <select
          id={`${formId}-segment`}
          name="segment"
          className={inputClasses(!!errors.segment)}
          value={values.segment}
          onChange={(e) => setValues((v) => ({ ...v, segment: e.target.value }))}
        >
          <option value="">Selecione...</option>
          {segments.map((segment) => (
            <option key={segment.name} value={segment.name}>
              {segment.name}
            </option>
          ))}
          <option value="Outro">Outro</option>
        </select>
      </FormField>

      <FormField
        label="Principal desafio"
        htmlFor={`${formId}-challenge`}
        error={errors.challenge}
      >
        <textarea
          id={`${formId}-challenge`}
          name="challenge"
          rows={4}
          placeholder="Conte brevemente o que está travando a operação hoje."
          className={inputClasses(!!errors.challenge)}
          value={values.challenge}
          onChange={(e) => setValues((v) => ({ ...v, challenge: e.target.value }))}
        />
      </FormField>

      <div className="flex items-start gap-3">
        <input
          id={`${formId}-consent`}
          name="consent"
          type="checkbox"
          className="mt-1 h-5 w-5 shrink-0 rounded border-[var(--color-border)] text-azul-profundo focus:ring-cobre"
          checked={values.consent}
          onChange={(e) => setValues((v) => ({ ...v, consent: e.target.checked }))}
        />
        <label
          htmlFor={`${formId}-consent`}
          id={`${formId}-privacy`}
          className="text-sm leading-relaxed text-cinza-pedra"
        >
          Autorizo o uso dos meus dados para que a Norte One entre em contato
          sobre esta solicitação, conforme a{" "}
          <a href="/politica-de-privacidade" className="font-medium text-azul-profundo underline underline-offset-2">
            Política de Privacidade
          </a>
          .
        </label>
      </div>
      {errors.consent ? (
        <p role="alert" className="text-sm text-red-700">
          {errors.consent}
        </p>
      ) : null}

      {status === "error" && serverMessage ? (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-[var(--radius-card-sm)] border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>{serverMessage}</span>
        </div>
      ) : null}

      <Button
        type="submit"
        size="lg"
        variant="accent"
        className="w-full sm:w-auto"
        disabled={status === "loading"}
        data-event="contact_form_submit"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          "Quero conversar sobre meu desafio"
        )}
      </Button>
    </form>
  );
}
