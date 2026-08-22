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
    .min(8, "Informe um WhatsApp válido com DDD.")
    .max(20),
  email: z
    .string()
    .trim()
    .email("Informe um e-mail corporativo válido."),
  segment: z.string().trim().min(1, "Selecione um segmento."),
  challenge: z
    .string()
    .trim()
    .min(10, "Descreva brevemente o seu desafio (mínimo 10 caracteres).")
    .max(2000),
  consent: z
    .boolean()
    .refine((value) => value === true, {
      message: "É necessário aceitar a Política de Privacidade para enviar.",
    }),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
