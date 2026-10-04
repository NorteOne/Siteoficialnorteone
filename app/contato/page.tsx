import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getWhatsAppLink, siteConfig } from "@/lib/site-config";

const pageTitle = "Converse sobre sua operação";
const pageDescription =
  "Conte à Norte One o que está acontecendo na sua operação. A primeira conversa começa pelo contexto, antes de qualquer solução.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/contato" },
  openGraph: {
    type: "website",
    url: "/contato",
    title: `Norte One — ${pageTitle}`,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Norte One — soluções para empresas funcionarem melhor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Norte One — ${pageTitle}`,
    description: pageDescription,
    images: ["/opengraph-image"],
  },
};

const nextSteps = [
  {
    number: "01",
    title: "Lemos o contexto",
    description:
      "O ponto de partida é entender como a situação aparece no trabalho real.",
  },
  {
    number: "02",
    title: "Fazemos as perguntas necessárias",
    description:
      "Se algo ainda não estiver claro, aprofundamos a conversa antes de sugerir caminhos.",
  },
  {
    number: "03",
    title: "Avaliamos o problema",
    description:
      "Só depois discutimos o que vale reorganizar, aproveitar ou construir.",
  },
];

export default function ContatoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Contato", url: `${siteConfig.url}/contato` },
        ]}
      />

      <section
        className="section-space border-t border-[var(--color-border-on-dark)] bg-azul-noturno text-off-white"
        aria-labelledby="contato-hero-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-9">
              <p className="editorial-kicker">
                Primeira conversa
              </p>
              <h1
                id="contato-hero-heading"
                className="mt-8 max-w-[68rem] text-balance font-display text-[2.75rem] font-bold leading-[1.06] min-[375px]:text-[3rem] sm:text-[3.75rem] lg:text-[4.25rem]"
              >
                Comece pelo que está acontecendo.
              </h1>
            </div>

            <p className="max-w-[37rem] border-t border-[var(--color-border-on-dark)] pt-7 text-base leading-7 text-azul-nevoa/85 sm:text-lg sm:leading-8 lg:col-span-5 lg:col-start-8 lg:mt-4 lg:pt-8">
              Você não precisa saber se a resposta é software, automação,
              integração ou outra coisa. Primeiro precisamos compreender o
              contexto da sua operação.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="section-space-generous bg-[var(--color-paper)]"
        aria-labelledby="formulario-heading"
        data-whatsapp-hide
      >
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-x-8">
            <aside className="lg:col-span-4">
              <p className="editorial-kicker">
                Antes de pensar em solução
              </p>
              <p className="mt-6 max-w-[28rem] font-display text-[1.75rem] font-semibold leading-[1.25] text-azul-profundo sm:text-[2.25rem]">
                Descreva a situação como ela aparece hoje. Nós ajudamos a
                organizar o restante.
              </p>

              <div className="mt-10 max-w-[27rem] border-t border-[var(--color-border)] pt-7 sm:mt-12">
                <p className="text-sm leading-6 text-grafite/65">
                  Prefere usar outro canal? O formulário continua sendo a forma
                  mais completa de começar, mas você também pode escrever por:
                </p>
                <div className="mt-5 flex flex-col items-start gap-4">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event="whatsapp_click"
                    className="inline-flex min-h-11 items-center gap-3 font-medium text-azul-profundo underline-offset-4 transition-colors hover:text-cobre hover:underline"
                  >
                    <MessageCircle
                      size={19}
                      className="text-cobre"
                      aria-hidden="true"
                    />
                    Iniciar conversa no WhatsApp
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex min-h-11 items-center gap-3 break-all font-medium text-azul-profundo underline-offset-4 transition-colors hover:text-cobre hover:underline"
                  >
                    <Mail
                      size={19}
                      className="shrink-0 text-cobre"
                      aria-hidden="true"
                    />
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <p className="mt-8 max-w-[27rem] text-sm leading-6 text-grafite/55">
                Vamos ler o contexto antes de responder.
              </p>
            </aside>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="editorial-kicker">
                Seu contexto
              </p>
              <h2
                id="formulario-heading"
                className="mt-6 font-display text-[2.4rem] font-semibold leading-[1.08] text-grafite sm:text-[3.25rem]"
              >
                Conte o que precisa funcionar melhor.
              </h2>
              <p className="mt-5 max-w-[41rem] text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8">
                Não é preciso definir tecnologia, orçamento ou prazo. Um relato
                direto do problema já é suficiente para iniciar a conversa.
              </p>
              <div className="mt-9 sm:mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="section-space border-t border-[var(--color-border)] bg-[var(--color-paper-deep)]"
        aria-labelledby="depois-do-envio-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-4">
              <p className="editorial-kicker">
                Depois do envio
              </p>
              <h2
                id="depois-do-envio-heading"
                className="mt-6 max-w-[29rem] font-display text-[2.4rem] font-semibold leading-[1.08] text-grafite sm:text-[3.25rem]"
              >
                A conversa avança com critério.
              </h2>
            </div>

            <ol className="border-t border-[var(--color-border)] lg:col-span-7 lg:col-start-6">
              {nextSteps.map((step) => (
                <li
                  key={step.number}
                  className="grid gap-3 border-b border-[var(--color-border)] py-7 sm:grid-cols-[3rem_1fr] sm:gap-x-5 sm:py-8"
                >
                  <span className="text-xs font-semibold text-cobre">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-8 text-azul-profundo sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[37rem] text-sm leading-6 text-grafite/65 sm:text-base sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
