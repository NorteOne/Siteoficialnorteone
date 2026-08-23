/**
 * Configuração institucional central da Norte One.
 *
 * Campos marcados com PLACEHOLDER devem ser substituídos por informações
 * reais antes da publicação. Nunca exibir estes placeholders como dados
 * públicos definitivos.
 */

export const PLACEHOLDER = "[INFORMAÇÃO REAL A SER INSERIDA]";

export const siteConfig = {
  name: "Norte One",
  shortName: "Norte One",
  tagline: "Transformamos desafios empresariais em soluções digitais.",
  description:
    "A Norte One une visão de negócio e tecnologia para estruturar processos, automatizar operações e desenvolver soluções sob medida para empresas.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.norteone.com.br",
  locale: "pt_BR",
  contact: {
    email: "norteone@protonmail.com",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5566992204744",
    whatsappDisplay: "+55 (66) 9 9220-4744",
    whatsappDefaultMessage:
      "Olá, conheci a Norte One pelo site e gostaria de conversar sobre uma solução para minha empresa.",
    address: "Sinop, MT",
    cnpj: "67.853.026/0001-53",
  },
  social: {
    instagram: PLACEHOLDER,
    linkedin: PLACEHOLDER,
  },
} as const;

export function getWhatsAppLink(message?: string) {
  const number = siteConfig.contact.whatsappNumber;
  const text = encodeURIComponent(
    message ?? siteConfig.contact.whatsappDefaultMessage
  );
  if (!number) {
    // Sem número configurado ainda: aponta para a página de contato.
    return "/contato";
  }
  return `https://wa.me/${number}?text=${text}`;
}

export const primaryNav = [
  { label: "Soluções", href: "/solucoes" },
  { label: "Segmentos", href: "/segmentos" },
  { label: "Como trabalhamos", href: "/como-trabalhamos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Insights", href: "/insights" },
  { label: "Contato", href: "/contato" },
] as const;

export const footerNav = {
  empresa: [
    { label: "Sobre", href: "/sobre" },
    { label: "Como trabalhamos", href: "/como-trabalhamos" },
    { label: "Contato", href: "/contato" },
  ],
  solucoes: [
    { label: "Automação de processos", href: "/solucoes/automacao-de-processos" },
    { label: "Soluções sob medida", href: "/solucoes/solucoes-sob-medida" },
    { label: "Atendimento inteligente", href: "/solucoes/atendimento-inteligente" },
    { label: "Integrações e conectividade", href: "/solucoes/integracoes" },
    { label: "Gestão operacional", href: "/solucoes/gestao-operacional" },
    { label: "Experiências digitais", href: "/solucoes/experiencias-digitais" },
  ],
  legal: [
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    { label: "Termos", href: "/politica-de-privacidade#termos" },
    { label: "Cookies", href: "/politica-de-privacidade#cookies" },
  ],
} as const;
