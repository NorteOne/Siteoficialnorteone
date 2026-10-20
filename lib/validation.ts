import { z } from "zod";

function isBrazilianPhone(value: string) {
  if (!value) return true;
  if (!/^\+?[\d\s().-]+$/.test(value)) return false;
  if (value.startsWith("+") && !value.startsWith("+55")) return false;

  const digits = value.replace(/\D/g, "");
  return /^(?:55)?[1-9]{2}(?:9\d{8}|[2-5]\d{7})$/.test(digits);
}

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(120, "Use até 120 caracteres para o nome."),
  company: z
    .string()
    .trim()
    .min(2, "Informe o nome da empresa.")
    .max(160, "Use até 160 caracteres para a empresa."),
  whatsapp: z
    .string()
    .trim()
    .max(20, "Use até 20 caracteres para o WhatsApp.")
    .refine(
      isBrazilianPhone,
      "Informe um WhatsApp válido com DDD."
    ),
  email: z
    .string()
    .trim()
    .max(254, "Informe um e-mail válido.")
    .email("Informe um e-mail válido."),
  challenge: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre o que está acontecendo.")
    .max(2000, "Use até 2.000 caracteres para descrever a situação."),
  consent: z
    .boolean()
    .refine((value) => value === true, {
      message: "É necessário aceitar a Política de Privacidade para enviar.",
    }),
  website: z.string().max(200).optional(),
}).strict();

export type ContactFormValues = z.infer<typeof contactFormSchema>;
