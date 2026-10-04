import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(120),
  company: z
    .string()
    .trim()
    .min(2, "Informe o nome da empresa.")
    .max(160),
  whatsapp: z
    .string()
    .trim()
    .max(20)
    .refine(
      (value) => value.length === 0 || value.length >= 8,
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
    .max(2000),
  consent: z
    .boolean()
    .refine((value) => value === true, {
      message: "É necessário aceitar a Política de Privacidade para enviar.",
    }),
  website: z.string().max(200).optional(),
}).strict();

export type ContactFormValues = z.infer<typeof contactFormSchema>;
