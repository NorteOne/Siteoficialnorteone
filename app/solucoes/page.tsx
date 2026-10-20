import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Software sob medida, automação e integrações";
const pageDescription =
  "Reduza retrabalho, conecte sistemas e organize o atendimento com a Norte One. Software sob medida, automação de processos e IA aplicada a gargalos reais.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/solucoes" },
  openGraph: {
    type: "website",
    url: "/solucoes",
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

const operationalNeeds = [
  {
    number: "01",
    category: "Rotina",
    title: "O volume cresceu além da rotina.",
    description:
      "Responsabilidades, etapas e controles já não acompanham o trabalho.",
  },
  {
    number: "02",
    category: "Eficiência",
    title: "O trabalho manual virou gargalo.",
    description:
      "Conferências e tarefas repetidas ocupam a equipe e ampliam o risco de erro.",
  },
  {
    number: "03",
    category: "Conexão",
    title: "As ferramentas não preservam o contexto.",
    description:
      "A equipe ainda transporta informações entre sistemas e reconstrói o histórico para agir.",
  },
  {
    number: "04",
    category: "Relacionamento",
    title: "O atendimento perde continuidade.",
    description:
      "Conversas e próximos passos se dispersam entre canais e dependem da memória da equipe.",
  },
];

const responsePaths = [
  {
    number: "01",
    title: "Organização de processos",
    description:
      "Reduza espera e retrabalho com etapas, responsáveis e critérios claros. Reorganizamos o fluxo para a equipe executar com mais autonomia.",
    condition: "Para rotinas que dependem de improviso e controles paralelos.",
    href: null,
    linkLabel: null,
  },
  {
    number: "02",
    title: "Integração de sistemas",
    description:
      "Evite copiar dados entre ferramentas. Conectamos informações e ações por APIs e fluxos definidos para dar continuidade ao trabalho.",
    condition: "Para ferramentas que funcionam separadas, mas exigem pontes manuais.",
    href: "/solucoes/integracoes",
    linkLabel: "Explorar integração de sistemas",
  },
  {
    number: "03",
    title: "Automação de processos",
    description:
      "Libere a equipe de registros e encaminhamentos repetidos. Automatizamos tarefas previsíveis com regras, alertas e tratamento de exceções.",
    condition: "Para rotinas frequentes em que trabalho manual limita a capacidade.",
    href: "/solucoes/automacao-de-processos",
    linkLabel: "Conhecer automação de processos",
  },
  {
    number: "04",
    title: "Software sob medida",
    description:
      "Faça o sistema acompanhar seu modo de operar. Desenvolvemos ferramentas para fluxos específicos que soluções genéricas deixam em controles paralelos.",
    condition: "Para processos centrais com necessidades próprias e recorrentes.",
    href: "/solucoes/solucoes-sob-medida",
    linkLabel: "Conhecer sistemas sob medida",
  },
  {
    number: "05",
    title: "Atendimento inteligente",
    description:
      "Dê um próximo passo a cada contato. Organizamos distribuição, histórico e acompanhamento; automação e IA podem apoiar tarefas previsíveis com controle humano.",
    condition: "Para atendimentos que perdem conversas, retornos e oportunidades.",
    href: "/contato",
    linkLabel: "Analisar o atendimento da empresa",
  },
];

const situations = [
  {
    title: "Atendimento fragmentado",
    context:
      "Uma equipe atende por mensagens, agenda compromissos em outra ferramenta e registra o histórico em planilhas.",
    direction:
      "Conectar as informações necessárias e automatizar apenas os próximos passos previsíveis.",
  },
  {
    title: "Processo específico",
    context:
      "Uma operação tem uma etapa central que nenhuma ferramenta pronta atende sem controles paralelos.",
    direction:
      "Confirmar a lacuna e construir somente a parte própria que o processo realmente precisa.",
  },
];

export default function SolucoesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Soluções", url: `${siteConfig.url}/solucoes` },
        ]}
      />

      <section
        className="section-space bg-azul-noturno text-off-white"
        aria-labelledby="solucoes-hero-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-9">
              <p className="editorial-kicker">
                Como resolvemos
              </p>
              <h1
                id="solucoes-hero-heading"
                className="type-page-title mt-8 max-w-[68rem] text-balance"
              >
                Soluções para sua operação ganhar capacidade.
              </h1>
              <p className="type-lead mt-7 max-w-[49rem] text-azul-nevoa/85 sm:mt-8">
                Identificamos onde sua empresa perde tempo, informação e
                oportunidades. Depois implementamos melhorias com processos,
                software, automação, integrações e IA aplicada.
              </p>
              <Link
                href="/contato"
                className="mt-5 inline-flex min-h-11 items-center font-semibold text-off-white underline decoration-cobre underline-offset-4 hover:decoration-off-white"
              >
                Conversar sobre a operação
              </Link>
            </div>

            <p className="type-lead border-t border-[var(--color-border-on-dark)] pt-7 font-medium text-off-white lg:col-span-5 lg:col-start-8 lg:mt-8 lg:pt-8">
              Cada solução tem um objetivo de negócio antes de ter uma escolha técnica.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="section-space-generous bg-[var(--color-paper)]"
        aria-labelledby="areas-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-7">
              <p className="editorial-kicker">
                Onde podemos atuar
              </p>
              <h2
                id="areas-heading"
                className="type-section-title mt-6 max-w-[58rem] text-balance text-grafite"
              >
                Onde o esforço da equipe deixa de virar resultado.
              </h2>
            </div>
            <p className="type-lead max-w-[31rem] self-end text-grafite/70 lg:col-span-4 lg:col-start-9">
              Você não precisa saber qual tecnologia usar. Basta reconhecer
              onde a operação perdeu clareza, ritmo ou continuidade.
            </p>
          </div>

          <ol className="editorial-rule mt-16 border-t border-[var(--color-border)] lg:mt-24">
            {operationalNeeds.map((need) => (
              <li
                key={need.number}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-5 border-b border-[var(--color-border)] py-8 sm:grid-cols-[3rem_1fr] sm:gap-x-6 sm:py-10 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:py-12"
              >
                <span className="text-xs font-semibold text-cobre-ink lg:col-span-1">
                  {need.number}
                </span>
                <p className="text-xs font-semibold uppercase text-grafite/75 lg:col-span-2">
                  {need.category}
                </p>
                <h3 className="type-item-title col-span-2 max-w-[38rem] text-grafite sm:col-start-2 lg:col-span-5 lg:col-start-4">
                  {need.title}
                </h3>
                <p className="col-span-2 max-w-[30rem] text-sm leading-6 text-grafite/70 sm:col-start-2 sm:text-base sm:leading-7 lg:col-span-4 lg:col-start-9">
                  {need.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        className="section-space-generous bg-azul-profundo text-off-white"
        aria-labelledby="respostas-heading"
        data-whatsapp-hide
      >
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-8">
              <p className="editorial-kicker">
                Respostas para gargalos reais
              </p>
              <h2
                id="respostas-heading"
                className="type-section-title mt-6 max-w-[58rem] text-balance"
              >
                Do problema ao resultado, com o mecanismo adequado.
              </h2>
            </div>
            <p className="type-lead max-w-[29rem] self-end text-azul-nevoa/80 lg:col-span-4">
              Uma melhoria pode combinar diferentes soluções. Priorizamos o
              ganho operacional e definimos como colocá-lo em prática.
            </p>
          </div>

          <ol className="editorial-rule mt-16 border-t border-[var(--color-border-on-dark)] lg:mt-24">
            {responsePaths.map((path) => (
              <li
                key={path.number}
                id={path.number === "05" ? "atendimento-inteligente" : undefined}
                className="grid scroll-mt-24 gap-5 border-b border-[var(--color-border-on-dark)] py-9 sm:grid-cols-12 sm:gap-x-8 sm:py-11 lg:py-14"
              >
                <span className="text-xs font-semibold text-cobre sm:col-span-1">
                  {path.number}
                </span>
                <h3 className="type-item-title sm:col-span-3 lg:col-start-3">
                  {path.title}
                </h3>
                <div className="max-w-[31rem] sm:col-span-8 lg:col-span-4 lg:col-start-6">
                  <p className="text-sm leading-6 text-azul-nevoa/80 sm:text-base sm:leading-7">
                    {path.description}
                  </p>
                  {path.href && path.linkLabel ? (
                    <Link
                      href={path.href}
                      className="mt-5 inline-block text-sm font-semibold text-off-white underline decoration-cobre/60 underline-offset-4 hover:decoration-cobre"
                    >
                      {path.linkLabel}
                    </Link>
                  ) : null}
                </div>
                <p className="border-t border-[var(--color-border-on-dark)] pt-5 text-sm leading-6 text-off-white/90 sm:col-span-8 sm:col-start-5 lg:col-span-3 lg:col-start-10 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                  {path.condition}
                </p>
              </li>
            ))}
          </ol>

        </Container>
      </section>

      <section
        className="section-space bg-[var(--color-paper)]"
        aria-labelledby="situacoes-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-8">
              <p className="editorial-kicker">
                Tipos de desafios que ajudamos a resolver
              </p>
              <h2
                id="situacoes-heading"
                className="type-section-title mt-6 max-w-[59rem] text-balance text-grafite"
              >
                Atendimento, gestão e execução conectados.
              </h2>
            </div>
            <p className="type-lead max-w-[31rem] self-end text-grafite/70 lg:col-span-4">
              Exemplos de aplicação: o desenho final depende dos sistemas,
              das regras e das necessidades de cada operação.
            </p>
          </div>

          <dl className="mt-14 border-t border-[var(--color-border)] sm:mt-16 lg:mt-20">
            {situations.map((situation, index) => (
              <div
                key={situation.title}
                className="grid gap-5 border-b border-[var(--color-border)] py-8 sm:py-9 lg:grid-cols-12 lg:gap-x-8 lg:py-10"
              >
                <div className="lg:col-span-3">
                  <span className="text-xs font-semibold text-cobre-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <dt className="type-item-title mt-4 text-grafite">
                    {situation.title}
                  </dt>
                </div>
                <dd className="contents">
                  <p className="max-w-[30rem] text-sm leading-6 text-grafite/70 sm:text-base sm:leading-7 lg:col-span-4 lg:col-start-5">
                    {situation.context}
                  </p>
                  <div className="lg:col-span-3 lg:col-start-10">
                    <p className="text-xs font-semibold uppercase text-azul-profundo/75">
                      Direção possível
                    </p>
                    <p className="mt-3 text-sm leading-6 text-azul-profundo sm:text-base sm:leading-7">
                      {situation.direction}
                    </p>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section
        className="section-space border-t border-[var(--color-border)] bg-[var(--color-paper-deep)]"
        aria-labelledby="solucoes-cta-heading"
      >
        <Container>
          <p className="editorial-kicker">
            Como começar
          </p>
          <h2
            id="solucoes-cta-heading"
            className="type-section-title mt-8 max-w-[68rem] text-balance text-grafite"
          >
            Qual gargalo está limitando sua operação?
          </h2>

          <div className="mt-12 grid border-t border-[var(--color-border)] pt-8 sm:mt-16 sm:pt-10 lg:grid-cols-12 lg:gap-x-8">
            <p className="type-lead max-w-[40rem] text-grafite/70 lg:col-span-6">
              Traga a situação e o impacto que você percebe. Vamos avaliar
              onde existe uma oportunidade de melhoria e como avançar.
            </p>
            <div className="mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:flex lg:justify-end">
              <Button
                href="/contato"
                size="lg"
                variant="primary"
                className="w-full min-[375px]:w-auto"
                data-event="cta_solutions_click"
              >
                {siteConfig.primaryCta}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
