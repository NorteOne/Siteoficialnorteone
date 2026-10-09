import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Contextos operacionais em que podemos ajudar";
const pageDescription =
  "Conheça situações em que a Norte One pode ajudar empresas: atendimento fragmentado, processos manuais, ferramentas desconectadas e operação dependente de pessoas.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/segmentos" },
  openGraph: {
    type: "website",
    url: "/segmentos",
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

const operationalContexts = [
  {
    title: "Atendimento com muitas pontas",
    situation:
      "Conversas, agenda, histórico e acompanhamento acontecem em lugares diferentes.",
    consequence:
      "A equipe reconstrói o contexto a cada contato, próximos passos se perdem e o cliente percebe a descontinuidade.",
  },
  {
    title: "Rotina sustentada por trabalho manual",
    situation:
      "Mensagens, planilhas e conferências mantêm tarefas importantes em movimento.",
    consequence:
      "O volume consome tempo, aumenta a chance de erro e faz a operação depender de esforço constante.",
  },
  {
    title: "Ferramentas que não compartilham contexto",
    situation:
      "Cada sistema resolve uma parte, mas a informação ainda precisa ser transportada por alguém.",
    consequence:
      "Surgem registros duplicados, espera entre etapas e uma visão fragmentada do que está acontecendo.",
  },
  {
    title: "Crescimento antes da estrutura",
    situation:
      "A empresa ampliou clientes, equipe ou volume, mas preservou processos desenhados para uma rotina menor.",
    consequence:
      "Decisões se acumulam em poucas pessoas e o aumento da demanda traz mais retrabalho do que capacidade.",
  },
  {
    title: "Informação disponível, decisão tardia",
    situation:
      "Dados existem em relatórios, planilhas e sistemas, mas chegam separados ou sem uma leitura comum.",
    consequence:
      "A gestão reconhece desvios depois que eles já afetaram prazo, atendimento ou resultado.",
  },
  {
    title: "Operação dependente de pessoas-chave",
    situation:
      "Partes importantes do trabalho vivem na memória, experiência ou disponibilidade de alguém específico.",
    consequence:
      "Ausências interrompem a rotina, novos integrantes demoram a ganhar autonomia e o conhecimento não circula.",
  },
];

const contextVariations = [
  {
    title: "A forma muda com a rotina.",
    description:
      "Em uma clínica, a continuidade pode quebrar entre mensagem, agenda e retorno. Em uma empresa de serviços, entre proposta, execução e acompanhamento. Em uma operação comercial, entre contato, pedido e pós-venda.",
  },
  {
    title: "O porte muda a escala.",
    description:
      "Uma empresa pequena pode concentrar decisões em uma pessoa. Uma operação maior pode repetir a mesma dependência entre equipes inteiras. Nos dois casos, o trabalho fica vulnerável.",
  },
];

export default function SegmentosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          {
            name: "Contextos operacionais",
            url: `${siteConfig.url}/segmentos`,
          },
        ]}
      />

      <section
        className="section-space bg-azul-noturno text-off-white"
        aria-labelledby="segmentos-hero-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-10">
              <p className="editorial-kicker">
                Contextos de operação
              </p>
              <h1
                id="segmentos-hero-heading"
                className="type-page-title mt-8 max-w-[70rem] text-balance"
              >
                Empresas diferentes esbarram nos mesmos problemas de operação.
              </h1>
              <p className="type-lead mt-7 max-w-[51rem] text-azul-nevoa/85 sm:mt-8">
                O setor e o porte mudam. O que define onde podemos ajudar é a
                forma como atendimento, processos, informação e pessoas
                precisam funcionar juntos.
              </p>
            </div>

            <p className="type-lead border-t border-[var(--color-border-on-dark)] pt-7 font-medium text-off-white lg:col-span-5 lg:col-start-8 lg:mt-8 lg:pt-8">
              A pergunta não é em qual lista a empresa entra. É onde a rotina
              perdeu continuidade.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="section-space-generous bg-[var(--color-paper)]"
        aria-labelledby="contextos-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-8">
              <p className="editorial-kicker">
                Situações recorrentes
              </p>
              <h2
                id="contextos-heading"
                className="type-section-title mt-6 max-w-[61rem] text-balance text-grafite"
              >
                O problema aparece primeiro no esforço que a rotina exige.
              </h2>
            </div>
            <p className="type-lead max-w-[31rem] self-end text-grafite/70 lg:col-span-4">
              Estes contextos existem em empresas de tamanhos diferentes. A
              escala muda; a necessidade de entender a causa permanece.
            </p>
          </div>

          <ol className="editorial-rule mt-16 space-y-14 border-t border-[var(--color-border)] sm:mt-20 sm:space-y-16 lg:mt-24 lg:space-y-20">
            {operationalContexts.map((context, index) => (
              <li
                key={context.title}
                className="grid grid-cols-1 gap-7 border-b border-[var(--color-border)] pb-14 pt-8 sm:pb-16 sm:pt-10 lg:grid-cols-12 lg:gap-x-8 lg:pb-20 lg:pt-12"
              >
                <div className="lg:col-span-6">
                  <p className="text-xs font-semibold text-cobre-ink">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="type-item-title mt-5 max-w-[42rem] text-balance text-grafite">
                    {context.title}
                  </h3>
                  <p className="type-lead mt-5 max-w-[37rem] text-grafite/70">
                    {context.situation}
                  </p>
                </div>

                <div className="border-l border-cobre pl-5 lg:col-span-4 lg:col-start-9 lg:self-end lg:pl-6">
                  <p className="text-xs font-semibold uppercase text-azul-profundo/75">
                    Consequência na operação
                  </p>
                  <p className="mt-3 text-sm leading-6 text-azul-profundo sm:text-base sm:leading-7">
                    {context.consequence}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        className="section-space bg-azul-profundo text-off-white"
        aria-labelledby="variacoes-heading"
        data-whatsapp-hide
      >
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-8">
              <p className="editorial-kicker">
                Contexto, não categoria
              </p>
              <h2
                id="variacoes-heading"
                className="type-section-title mt-6 max-w-[58rem] text-balance"
              >
                O mesmo padrão assume formas diferentes.
              </h2>
            </div>
            <p className="type-lead max-w-[29rem] self-end text-azul-nevoa/80 lg:col-span-4">
              Os setores abaixo aparecem como exemplos de rotina, não como uma
              lista que limita onde a Norte One pode atuar.
            </p>
          </div>

          <div className="editorial-rule mt-16 border-t border-[var(--color-border-on-dark)] lg:mt-24">
            {contextVariations.map((variation) => (
              <article
                key={variation.title}
                className="grid gap-5 border-b border-[var(--color-border-on-dark)] py-9 sm:grid-cols-12 sm:gap-x-8 sm:py-11 lg:py-14"
              >
                <h3 className="type-item-title max-w-[34rem] sm:col-span-5">
                  {variation.title}
                </h3>
                <p className="max-w-[38rem] text-sm leading-6 text-azul-nevoa/80 sm:col-span-6 sm:col-start-7 sm:text-base sm:leading-7">
                  {variation.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="section-space-generous bg-[var(--color-paper-deep)]"
        aria-labelledby="conversa-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-7">
              <p className="editorial-kicker">
                Quando procurar ajuda
              </p>
              <h2
                id="conversa-heading"
                className="type-section-title mt-6 max-w-[40rem] text-balance text-grafite"
              >
                Talvez valha conversar quando a equipe começou a compensar o
                processo.
              </h2>
            </div>
            <p className="type-lead max-w-[31rem] self-end text-grafite/70 lg:col-span-4 lg:col-start-9">
              Esforço, demora e dependência recorrentes já justificam
              investigar — sem esperar uma ruptura.
            </p>
          </div>

          <aside className="mt-16 grid border-t border-[var(--color-border)] pt-10 sm:mt-20 sm:pt-12 lg:mt-24 lg:grid-cols-12 lg:gap-x-8 lg:pt-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase text-cobre-ink">
                Um contexto em foco hoje
              </p>
              <h3 className="type-item-title mt-5 text-grafite">
                Operações de clínicas
              </h3>
            </div>
            <div className="mt-7 max-w-[48rem] lg:col-span-7 lg:col-start-6 lg:mt-0">
              <p className="type-lead text-grafite">
                Hoje dedicamos atenção especial a operações em que atendimento,
                agenda, histórico e relacionamento precisam funcionar em
                sequência.
              </p>
              <p className="mt-5 text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8">
                Clínicas tornam essa necessidade especialmente visível. Esse
                foco aprofunda nosso entendimento de continuidade operacional
                sem limitar a Norte One a esse setor.
              </p>
            </div>
          </aside>
        </Container>
      </section>

      <section
        className="section-space bg-azul-noturno text-off-white"
        aria-labelledby="segmentos-cta-heading"
      >
        <Container>
          <p className="editorial-kicker">
            Seu contexto
          </p>
          <h2
            id="segmentos-cta-heading"
            className="type-section-title mt-8 max-w-[70rem] text-balance"
          >
            Seu setor não precisa estar em uma lista para o problema ser
            relevante.
          </h2>

          <div className="mt-12 grid border-t border-[var(--color-border-on-dark)] pt-8 sm:mt-16 sm:pt-10 lg:grid-cols-12 lg:gap-x-8">
            <p className="type-lead max-w-[41rem] text-azul-nevoa/80 lg:col-span-6">
              Se algo na rotina está exigindo mais esforço do que deveria, a
              conversa pode começar pelo que acontece e pelas consequências
              para o trabalho.
            </p>
            <div className="mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:flex lg:justify-end">
              <Button
                href="/contato"
                size="lg"
                variant="accent"
                className="w-full min-[375px]:w-auto"
                data-event="cta_segments_click"
              >
                Conversar sobre um problema
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
