import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Soluções para problemas operacionais";
const pageDescription =
  "Entenda como a Norte One ajuda empresas a simplificar processos, conectar ferramentas, automatizar rotinas e construir software quando o problema realmente exige.";

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
    title: "A operação ficou difícil de sustentar.",
    description:
      "Processos cresceram sem a mesma clareza de responsabilidades, etapas e critérios.",
  },
  {
    number: "02",
    category: "Eficiência",
    title: "O trabalho manual virou gargalo.",
    description:
      "Conferências, registros e tarefas repetitivas ocupam a equipe e aumentam a chance de erro.",
  },
  {
    number: "03",
    category: "Conexão",
    title: "A informação não acompanha o trabalho.",
    description:
      "Ferramentas, planilhas e pessoas guardam partes diferentes do contexto necessário para agir.",
  },
  {
    number: "04",
    category: "Relacionamento",
    title: "O atendimento perde continuidade.",
    description:
      "Conversas, histórico e próximos passos se dispersam entre canais e dependem da memória da equipe.",
  },
  {
    number: "05",
    category: "Decisão",
    title: "A gestão enxerga tarde o que aconteceu.",
    description:
      "Dados fragmentados dificultam acompanhar a operação, reconhecer desvios e decidir com contexto.",
  },
  {
    number: "06",
    category: "Adequação",
    title: "As ferramentas exigem contornos demais.",
    description:
      "Soluções prontas forçam controles paralelos e deixam de atender uma parte importante do processo.",
  },
];

const responsePaths = [
  {
    number: "01",
    title: "Simplificar",
    description:
      "Retirar etapas, reorganizar responsabilidades e reduzir redundâncias antes de adicionar ferramentas.",
    condition: "Quando o próprio processo cria a maior parte do atrito.",
    href: null,
    linkLabel: null,
  },
  {
    number: "02",
    title: "Conectar",
    description:
      "Fazer ferramentas e informações existentes participarem do mesmo fluxo, sem substituir o que já funciona.",
    condition: "Quando as partes funcionam, mas a continuidade entre elas falha.",
    href: "/solucoes/integracoes",
    linkLabel: "Entender quando integrar",
  },
  {
    number: "03",
    title: "Automatizar",
    description:
      "Transformar etapas previsíveis e repetidas em um fluxo controlado, preservando decisões que exigem contexto humano.",
    condition: "Quando volume, repetição e regras claras consomem a equipe.",
    href: "/solucoes/automacao-de-processos",
    linkLabel: "Entender quando automatizar",
  },
  {
    number: "04",
    title: "Construir",
    description:
      "Criar uma ferramenta própria quando as opções de mercado não atendem uma necessidade operacional importante.",
    condition: "Quando a lacuna é real, específica e central para a operação.",
    href: "/solucoes/solucoes-sob-medida",
    linkLabel: "Entender quando construir",
  },
];

const toolset = [
  {
    title: "Ferramentas existentes",
    description:
      "Adotar e configurar uma solução pronta pode ser a resposta mais simples e responsável.",
  },
  {
    title: "Integrações e APIs",
    description:
      "Conectam sistemas para que dados e ações avancem sem reconstruir o contexto a cada etapa.",
  },
  {
    title: "Automações",
    description:
      "Executam rotinas previsíveis com critérios, acompanhamento e pontos claros de intervenção.",
  },
  {
    title: "Dados e IA",
    description:
      "Apoiam tarefas concretas como organizar, classificar, resumir e interpretar informação dentro de fluxos controlados.",
  },
  {
    title: "Software próprio",
    description:
      "Materializa um processo específico quando adaptar ferramentas prontas custaria mais do que resolveria.",
  },
];

const situations = [
  {
    title: "Atendimento fragmentado",
    context:
      "Uma empresa de serviços atende por mensagens, agenda compromissos em outra ferramenta e registra o histórico em planilhas.",
    direction:
      "Organizar o fluxo, conectar as informações e automatizar apenas os próximos passos previsíveis.",
  },
  {
    title: "Rotina administrativa",
    context:
      "A equipe confere os mesmos dados em vários lugares antes de registrar cada solicitação.",
    direction:
      "Simplificar as validações e automatizar etapas com regras claras, mantendo exceções com as pessoas.",
  },
  {
    title: "Processo específico",
    context:
      "Uma operação tem uma etapa central que nenhuma ferramenta pronta atende sem controles paralelos.",
    direction:
      "Confirmar a lacuna e construir somente a parte própria que o processo realmente precisa.",
  },
  {
    title: "Decisão sem contexto",
    context:
      "Informações importantes existem, mas chegam separadas e tarde demais para orientar a gestão.",
    direction:
      "Integrar as fontes e criar uma camada clara de acompanhamento antes de ampliar a tecnologia.",
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
                className="mt-8 max-w-[68rem] text-balance font-display text-[2.75rem] font-bold leading-[1.06] min-[375px]:text-[3rem] sm:text-[3.75rem] lg:text-[4.25rem]"
              >
                A solução depende do problema.
              </h1>
              <p className="mt-7 max-w-[49rem] text-base leading-7 text-azul-nevoa/85 sm:mt-8 sm:text-xl sm:leading-9">
                Primeiro entendemos o que precisa mudar. Depois decidimos se a
                resposta é simplificar, conectar, automatizar ou construir.
              </p>
            </div>

            <p className="border-t border-[var(--color-border-on-dark)] pt-7 font-display text-xl font-medium leading-8 text-off-white sm:text-2xl sm:leading-9 lg:col-span-5 lg:col-start-8 lg:mt-8 lg:pt-8">
              Uma ferramenta nova não corrige um processo mal definido.
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
                className="mt-6 max-w-[58rem] text-balance font-display text-[2.4rem] font-semibold leading-[1.08] text-grafite sm:text-[3rem] lg:text-[3.5rem]"
              >
                A entrada acontece quando a rotina começa a pedir outra
                resposta.
              </h2>
            </div>
            <p className="max-w-[31rem] self-end text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8 lg:col-span-4 lg:col-start-9">
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
                <span className="text-xs font-semibold text-cobre lg:col-span-1">
                  {need.number}
                </span>
                <p className="text-xs font-semibold uppercase text-azul-profundo/55 lg:col-span-2">
                  {need.category}
                </p>
                <h3 className="col-span-2 max-w-[38rem] font-display text-[1.65rem] leading-[1.12] text-grafite sm:col-start-2 sm:text-[2rem] lg:col-span-5 lg:col-start-4 lg:text-[2.4rem]">
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
                Quatro possibilidades
              </p>
              <h2
                id="respostas-heading"
                className="mt-6 max-w-[58rem] text-balance font-display text-[2.4rem] font-semibold leading-[1.08] sm:text-[3rem] lg:text-[3.5rem]"
              >
                Resolver não significa sempre construir.
              </h2>
            </div>
            <p className="max-w-[29rem] self-end text-base leading-7 text-azul-nevoa/80 sm:text-lg sm:leading-8 lg:col-span-4">
              A melhor resposta é a que reduz o problema com a complexidade
              necessária, e não com a maior quantidade de tecnologia.
            </p>
          </div>

          <ol className="editorial-rule mt-16 border-t border-[var(--color-border-on-dark)] lg:mt-24">
            {responsePaths.map((path) => (
              <li
                key={path.number}
                className="grid gap-5 border-b border-[var(--color-border-on-dark)] py-9 sm:grid-cols-12 sm:gap-x-8 sm:py-11 lg:py-14"
              >
                <span className="text-xs font-semibold text-cobre sm:col-span-1">
                  {path.number}
                </span>
                <h3 className="font-display text-[2rem] leading-none sm:col-span-3 sm:text-[2.75rem] lg:col-start-3">
                  {path.title}
                </h3>
                <p className="max-w-[31rem] text-sm leading-6 text-azul-nevoa/80 sm:col-span-4 sm:text-base sm:leading-7 lg:col-start-6">
                  {path.description}
                </p>
                {path.href && path.linkLabel ? (
                  <Link
                    href={path.href}
                    className="w-fit text-sm font-semibold text-off-white underline decoration-cobre/60 underline-offset-4 hover:decoration-cobre sm:col-span-4 sm:col-start-6"
                  >
                    {path.linkLabel}
                  </Link>
                ) : null}
                <p className="border-t border-[var(--color-border-on-dark)] pt-5 text-sm leading-6 text-off-white/90 sm:col-span-3 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0 lg:col-start-10">
                  {path.condition}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-16 border-t border-[var(--color-border-on-dark)] pt-14 sm:mt-20 sm:pt-16 lg:mt-24 lg:pt-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-7">
                <p className="editorial-kicker">
                  Caixa de ferramentas
                </p>
                <h2 className="mt-6 max-w-[55rem] text-balance font-display text-[2.4rem] font-semibold leading-[1.08] sm:text-[3rem] lg:text-[3.5rem]">
                  A tecnologia entra na medida da resposta.
                </h2>
              </div>
              <p className="max-w-[31rem] self-end text-base leading-7 text-azul-nevoa/80 sm:text-lg sm:leading-8 lg:col-span-4 lg:col-start-9">
                Uma ferramenta pronta pode ser a escolha certa. Construir do
                zero só faz sentido quando existe uma razão operacional clara.
              </p>
            </div>

            <ul className="mt-12 border-t border-[var(--color-border-on-dark)] sm:mt-16">
              {toolset.map((tool) => (
                <li
                  key={tool.title}
                  className="grid gap-3 border-b border-[var(--color-border-on-dark)] py-6 sm:grid-cols-12 sm:gap-x-8 sm:py-7"
                >
                  <h3 className="font-display text-xl font-medium sm:col-span-4 sm:text-2xl">
                    {tool.title}
                  </h3>
                  <p className="max-w-[43rem] text-sm leading-6 text-azul-nevoa/80 sm:col-span-7 sm:col-start-6 sm:text-base sm:leading-7">
                    {tool.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
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
                Situações possíveis
              </p>
              <h2
                id="situacoes-heading"
                className="mt-6 max-w-[59rem] text-balance font-display text-[2.4rem] font-semibold leading-[1.08] text-grafite sm:text-[3rem] lg:text-[3.5rem]"
              >
                O mesmo problema pode pedir respostas combinadas.
              </h2>
            </div>
            <p className="max-w-[31rem] self-end text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8 lg:col-span-4">
              Estes são exemplos de raciocínio, não casos de clientes. Servem
              para mostrar como contexto e resposta se conectam.
            </p>
          </div>

          <dl className="mt-14 border-t border-[var(--color-border)] sm:mt-16 lg:mt-20">
            {situations.map((situation, index) => (
              <div
                key={situation.title}
                className="grid gap-5 border-b border-[var(--color-border)] py-8 sm:py-9 lg:grid-cols-12 lg:gap-x-8 lg:py-10"
              >
                <div className="lg:col-span-3">
                  <span className="text-xs font-semibold text-cobre">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <dt className="mt-4 font-display text-xl font-semibold text-grafite sm:text-2xl">
                    {situation.title}
                  </dt>
                </div>
                <dd className="contents">
                  <p className="max-w-[30rem] text-sm leading-6 text-grafite/70 sm:text-base sm:leading-7 lg:col-span-4 lg:col-start-5">
                    {situation.context}
                  </p>
                  <div className="lg:col-span-3 lg:col-start-10">
                    <p className="text-xs font-semibold uppercase text-azul-profundo/55">
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
            className="mt-8 max-w-[68rem] text-balance font-display text-[2.75rem] font-bold leading-[1.06] text-grafite sm:text-[3.5rem] lg:text-[4.25rem]"
          >
            Tem algo na operação que você gostaria de entender melhor?
          </h2>

          <div className="mt-12 grid border-t border-[var(--color-border)] pt-8 sm:mt-16 sm:pt-10 lg:grid-cols-12 lg:gap-x-8">
            <p className="max-w-[40rem] text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8 lg:col-span-6">
              Você não precisa chegar com a tecnologia escolhida. A conversa
              começa pelo contexto e pelo que precisa mudar.
            </p>
            <div className="mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:flex lg:justify-end">
              <Button
                href="/contato"
                size="lg"
                variant="primary"
                className="w-full min-[375px]:w-auto"
                data-event="cta_solutions_click"
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
