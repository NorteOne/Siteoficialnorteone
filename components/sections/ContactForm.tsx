"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormField, inputClasses } from "@/components/ui/FormField";
import { contactFormSchema } from "@/lib/validation";

type Status = "idle" | "loading" | "success" | "error";

const initialValues = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  challenge: "",
  consent: false,
  website: "",
};

type FieldName = keyof typeof initialValues;
type FieldErrors = Partial<Record<FieldName, string>>;

const fieldOrder: FieldName[] = [
  "name",
  "company",
  "email",
  "whatsapp",
  "challenge",
  "consent",
];

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const formId = useId();
  const successRef = useRef<HTMLHeadingElement>(null);

  const ids: Record<FieldName, string> = {
    name: `${formId}-name`,
    company: `${formId}-company`,
    email: `${formId}-email`,
    whatsapp: `${formId}-whatsapp`,
    challenge: `${formId}-challenge`,
    consent: `${formId}-consent`,
    website: `${formId}-website`,
  };

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function focusFirstError(fieldErrors: FieldErrors) {
    const firstField = fieldOrder.find((field) => fieldErrors[field]);
    if (!firstField) return;
    requestAnimationFrame(() => document.getElementById(ids[firstField])?.focus());
  }

  function updateValue<Field extends FieldName>(
    field: Field,
    value: (typeof initialValues)[Field]
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    setServerMessage(null);
    setStatus("idle");

    const result = contactFormSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const [key, messages] of Object.entries(
        result.error.flatten().fieldErrors
      )) {
        if (messages?.[0]) fieldErrors[key as FieldName] = messages[0];
      }
      setErrors(fieldErrors);
      focusFirstError(fieldErrors);
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
      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        errors?: Record<string, string[]>;
      };

      if (!response.ok || !data.ok) {
        const fieldErrors: FieldErrors = {};
        if (data.errors) {
          for (const [key, messages] of Object.entries(data.errors)) {
            if (messages?.[0]) fieldErrors[key as FieldName] = messages[0];
          }
        }
        setErrors(fieldErrors);
        setStatus("error");
        setServerMessage(
          data.message ??
            "Não foi possível enviar agora. Tente novamente ou use o WhatsApp."
        );
        focusFirstError(fieldErrors);
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setServerMessage(
        "Não foi possível conectar. Verifique sua internet e tente novamente."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border-y border-[var(--color-border)] py-10 sm:py-12"
      >
        <CheckCircle2 size={32} className="text-cobre" aria-hidden="true" />
        <h2
          ref={successRef}
          tabIndex={-1}
          className="type-section-title mt-6 text-grafite"
        >
          Recebemos seu contexto.
        </h2>
        <p className="mt-4 max-w-[36rem] text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8">
          Vamos ler o que você compartilhou antes de responder. Se precisarmos,
          faremos algumas perguntas para compreender melhor a situação.
        </p>
        <Button
          variant="secondary"
          onClick={() => setStatus("idle")}
          type="button"
          className="mt-8"
        >
          Enviar outro contexto
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={`${formId}-privacy`}
      className="space-y-6 border-t border-[var(--color-border)] pt-8 sm:pt-10"
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor={ids.website}>Não preencha este campo</label>
        <input
          id={ids.website}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateValue("website", event.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          label="Nome"
          htmlFor={ids.name}
          error={errors.name}
          errorId={`${ids.name}-error`}
        >
          <input
            id={ids.name}
            name="name"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${ids.name}-error` : undefined}
            className={inputClasses(!!errors.name)}
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
          />
        </FormField>

        <FormField
          label="Empresa"
          htmlFor={ids.company}
          error={errors.company}
          errorId={`${ids.company}-error`}
        >
          <input
            id={ids.company}
            name="company"
            autoComplete="organization"
            required
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? `${ids.company}-error` : undefined}
            className={inputClasses(!!errors.company)}
            value={values.company}
            onChange={(event) => updateValue("company", event.target.value)}
          />
        </FormField>

        <FormField
          label="E-mail"
          htmlFor={ids.email}
          error={errors.email}
          errorId={`${ids.email}-error`}
        >
          <input
            id={ids.email}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${ids.email}-error` : undefined}
            className={inputClasses(!!errors.email)}
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
          />
        </FormField>

        <FormField
          label="WhatsApp"
          htmlFor={ids.whatsapp}
          error={errors.whatsapp}
          errorId={`${ids.whatsapp}-error`}
          optional
        >
          <input
            id={ids.whatsapp}
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="DDD + número"
            aria-invalid={!!errors.whatsapp}
            aria-describedby={
              errors.whatsapp ? `${ids.whatsapp}-error` : undefined
            }
            className={inputClasses(!!errors.whatsapp)}
            value={values.whatsapp}
            onChange={(event) => updateValue("whatsapp", event.target.value)}
          />
        </FormField>
      </div>

      <FormField
        label="O que está acontecendo?"
        htmlFor={ids.challenge}
        error={errors.challenge}
        errorId={`${ids.challenge}-error`}
      >
        <textarea
          id={ids.challenge}
          name="challenge"
          rows={5}
          required
          placeholder="Conte o que está dificultando o trabalho hoje. Não precisa indicar uma solução."
          aria-invalid={!!errors.challenge}
          aria-describedby={errors.challenge ? `${ids.challenge}-error` : undefined}
          className={`${inputClasses(!!errors.challenge)} resize-y`}
          value={values.challenge}
          onChange={(event) => updateValue("challenge", event.target.value)}
        />
      </FormField>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={ids.consent}
            name="consent"
            type="checkbox"
            required
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? `${ids.consent}-error` : undefined}
            className="mt-1 h-5 w-5 shrink-0 rounded border-[var(--color-border)] text-azul-profundo focus:ring-cobre"
            checked={values.consent}
            onChange={(event) => updateValue("consent", event.target.checked)}
          />
          <label
            htmlFor={ids.consent}
            id={`${formId}-privacy`}
            className="text-sm leading-6 text-grafite/65"
          >
            Autorizo a Norte One a usar estes dados para responder a esta
            conversa, conforme a{" "}
            <a
              href="/politica-de-privacidade"
              className="font-medium text-azul-profundo underline underline-offset-2"
            >
              Política de Privacidade
            </a>
            .
          </label>
        </div>
        {errors.consent ? (
          <p
            id={`${ids.consent}-error`}
            role="alert"
            className="mt-2 text-sm text-red-700"
          >
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div aria-live="polite" aria-atomic="true">
        {status === "error" && serverMessage ? (
          <div
            role="alert"
            className="flex items-start gap-3 border-y border-red-200 bg-red-50 px-4 py-4 text-sm leading-6 text-red-800"
          >
            <AlertCircle
              size={18}
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            />
            <span>{serverMessage}</span>
          </div>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        data-event="contact_form_submit"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Enviando contexto...
          </>
        ) : (
          "Enviar contexto"
        )}
      </Button>
    </form>
  );
}
