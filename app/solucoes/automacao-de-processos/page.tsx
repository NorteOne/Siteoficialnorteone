import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Quando automatizar um processo";
const pageDescription =
  "Entenda os sinais, critérios, riscos e pré-requisitos que ajudam a decidir quando automatizar um processo realmente faz sentido.";
const pagePath = "/solucoes/automacao-de-processos";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    url: pagePath,
    title: `${pageTitle} | Norte One`,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Norte One — quando automatizar um processo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | Norte One`,
    description: pageDescription,
    images: ["/opengraph-image"],
  },
};

const signals = [
  {
    title: "A mesma sequência acontece muitas vezes.",
    description:
      "Pessoas repetem etapas previsíveis para registrar, conferir, encaminhar ou atualizar informações.",
  },
  {
    title: "O volume ultrapassou a capacidade manual.",
    description:
      "A rotina funciona em dias tranquilos, mas acumula atrasos assim que a demanda aumenta.",
  },
  {
    title: "A memória virou parte do processo.",
    description:
      "Prazos e próximos passos dependem de alguém lembrar o que precisa acontecer.",
  },
  {
    title: "Há transferências manuais entre ferramentas.",
    description:
      "A mesma informação é copiada, adaptada e conferida em lugares diferentes.",
  },
  {
    title: "Erros seguem um padrão reconhecível.",
    description:
      "Falhas de digitação, esquecimentos e duplicidades reaparecem nos mesmos pontos.",
  },
  {
    title: "A equipe confere mais do que decide.",
    description:
      "Tempo qualificado é consumido verificando regras simples em vez de tratar exceções.",
  },
];

const prerequisites = [
  {
    number: "01",
    title: "Entender a finalidade",
    description:
      "Saber qual resultado a rotina precisa produzir e para quem ele importa.",
  },
  {
    number: "02",
    title: "Reduzir etapas desnecessárias",
    description:
      "Automatizar desperdício apenas faz o desperdício acontecer mais rápido.",
  },
  {
    number: "03",
    title: "Definir regras e exceções",
    description:
      "O fluxo previsível precisa estar separado das decisões que exigem julgamento.",
  },
  {
    number: "04",
    title: "Atribuir responsabilidade",
    description:
      "Toda automação precisa de alguém capaz de acompanhar, corrigir e interromper o fluxo.",
  },
];

const risks = [
  {
    title: "Escalar o erro",
    description:
      "Uma regra mal definida pode repetir a mesma falha em muito mais registros.",
  },
  {
    title: "Esconder exceções",
    description:
      "Casos fora do padrão podem desaparecer se não houver fila, alerta ou revisão humana.",
  },
  {
    title: "Criar uma dependência sem dono",
    description:
      "Quando ninguém acompanha mudanças no processo, a automação fica correta apenas no dia em que foi criada.",
  },
];

export default function AutomacaoDeProcessosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Soluções", url: `${siteConfig.url}/solucoes` },
          { name: "Automação de processos", url: `${siteConfig.url}${pagePath}` },
        ]}
      />

      <section
        className="section-space bg-azul-noturno text-off-white"
        aria-labelledby="automacao-heading"
      >
        <Container>
          <nav aria-label="Navegação estrutural" className="text-sm text-azul-nevoa/75">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-off-white">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/solucoes" className="hover:text-off-white">Soluções</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-off-white">Automação</li>
            </ol>
          </nav>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-9">
              <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">
                Automação de processos
              </p>
              <h1
                id="automacao-heading"
                className="type-page-title mt-8 max-w-[68rem] text-balance"
              >
                Quando automatizar um processo realmente faz sentido?
              </h1>
            </div>
            <div className="border-t border-[var(--color-border-on-dark)] pt-7 lg:col-span-5 lg:col-start-8 lg:mt-8">
              <p className="type-lead font-medium">
                Um processo ruim não melhora só porque passou a acontecer sozinho.
              </p>
              <p className="mt-5 text-base leading-7 text-azul-nevoa/80">
                A decisão começa pela rotina: o que se repete, o que varia e onde uma pessoa ainda precisa decidir.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="section-space-generous bg-[var(--color-paper)]"
        aria-labelledby="sinais-heading"
        data-whatsapp-hide
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">Sinais</p>
              <h2 id="sinais-heading" className="type-section-title mt-5 max-w-[49rem] text-balance text-grafite">
                O trabalho dá pistas antes de pedir automação.
              </h2>
            </div>
            <p className="type-lead max-w-[31rem] self-end text-grafite/70 lg:col-span-4 lg:col-start-9">
              Nenhum sinal isolado decide. A combinação entre repetição, volume, regra clara e impacto é o que merece investigação.
            </p>
          </div>

          <ol className="mt-14 border-t border-[var(--color-border)] sm:mt-16 lg:mt-20">
            {signals.map((signal, index) => (
              <li key={signal.title} className="grid gap-4 border-b border-[var(--color-border)] py-7 sm:grid-cols-12 sm:gap-x-8 sm:py-8">
                <span className="text-xs font-semibold text-cobre sm:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="type-item-title text-grafite sm:col-span-5">
                  {signal.title}
                </h3>
                <p className="max-w-[36rem] text-sm leading-6 text-grafite/70 sm:col-span-5 sm:col-start-8 sm:text-base sm:leading-7">
                  {signal.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-space bg-azul-profundo text-off-white" aria-labelledby="antes-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">Antes de automatizar</p>
              <h2 id="antes-heading" className="type-section-title mt-5 max-w-[52rem] text-balance">
                Primeiro, o processo precisa merecer continuar.
              </h2>
            </div>
            <p className="type-lead max-w-[31rem] self-end text-azul-nevoa/80 lg:col-span-4 lg:col-start-9">
              Simplificar pode resolver mais do que automatizar. A tecnologia entra depois de retirar o que não deveria existir.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-[var(--color-border-on-dark)] sm:mt-16 sm:grid-cols-2 lg:mt-20">
            {prerequisites.map((item) => (
              <li key={item.number} className="border-b border-[var(--color-border-on-dark)] py-8 sm:min-h-[16rem] sm:px-8 sm:py-9 sm:odd:border-r lg:p-10">
                <span className="text-xs font-semibold text-cobre">{item.number}</span>
                <h3 className="type-item-title mt-8">{item.title}</h3>
                <p className="mt-4 max-w-[29rem] text-sm leading-6 text-azul-nevoa/80 sm:text-base sm:leading-7">{item.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-space bg-[var(--color-paper)]" aria-labelledby="criterios-heading">
        <Container>
          <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">Critérios de decisão</p>
          <h2 id="criterios-heading" className="type-section-title mt-5 max-w-[54rem] text-balance text-grafite">
            A mesma tecnologia pode ser adequada ou prematura.
          </h2>

          <div className="mt-14 grid border-y border-[var(--color-border)] sm:mt-16 lg:grid-cols-2 lg:divide-x lg:divide-[var(--color-border)]">
            <div className="py-9 lg:pr-12 lg:py-12">
              <p className="text-xs font-semibold uppercase text-azul-profundo/55">Faz sentido quando</p>
              <ul className="mt-7 space-y-5 text-base leading-7 text-grafite">
                <li>o fluxo é estável, previsível e ocorre com frequência;</li>
                <li>as regras podem ser explicadas e as exceções identificadas;</li>
                <li>o volume ou o risco de erro justifica manter a automação;</li>
                <li>existe acompanhamento para medir falhas e ajustar mudanças.</li>
              </ul>
            </div>
            <div className="border-t border-[var(--color-border)] py-9 lg:border-t-0 lg:pl-12 lg:py-12">
              <p className="text-xs font-semibold uppercase text-azul-profundo/55">Não faz sentido quando</p>
              <ul className="mt-7 space-y-5 text-base leading-7 text-grafite">
                <li>o processo ainda muda toda semana ou não tem finalidade clara;</li>
                <li>a tarefa é rara e mais simples de executar manualmente;</li>
                <li>cada caso exige julgamento que não cabe em regras confiáveis;</li>
                <li>a causa do atraso é decisão, responsabilidade ou informação ausente.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space-generous bg-[var(--color-paper-deep)]" aria-labelledby="riscos-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">Riscos</p>
              <h2 id="riscos-heading" className="type-section-title mt-5 text-balance text-grafite">
                O fluxo também precisa saber falhar.
              </h2>
            </div>
            <dl className="border-t border-[var(--color-border)] lg:col-span-7 lg:col-start-6">
              {risks.map((risk) => (
                <div key={risk.title} className="grid gap-3 border-b border-[var(--color-border)] py-7 sm:grid-cols-5 sm:gap-x-8">
                  <dt className="type-item-title text-grafite sm:col-span-2">{risk.title}</dt>
                  <dd className="text-sm leading-6 text-grafite/70 sm:col-span-3 sm:text-base sm:leading-7">{risk.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16 grid border-t border-[var(--color-border)] pt-10 lg:grid-cols-12 lg:gap-x-8">
            <h2 className="type-item-title text-grafite lg:col-span-4">Automação não é sinônimo de IA.</h2>
            <div className="mt-5 max-w-[44rem] space-y-4 text-base leading-7 text-grafite/70 lg:col-span-7 lg:col-start-6 lg:mt-0">
              <p>Automação executa um fluxo definido. Inteligência artificial pode apoiar tarefas como classificar, resumir ou interpretar informação quando existe tolerância ao erro e revisão adequada.</p>
              <p>Usar IA em uma etapa não elimina a necessidade de regras, limites, dados confiáveis e responsabilidade humana pelo processo inteiro.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[var(--color-paper)]" aria-labelledby="exemplo-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">Situação hipotética</p>
              <h2 id="exemplo-heading" className="type-section-title mt-5 text-grafite">Um pedido muda de mãos três vezes.</h2>
            </div>
            <div className="max-w-[46rem] text-base leading-7 text-grafite/70 lg:col-span-7 lg:col-start-6">
              <p>Uma solicitação chega por formulário, é copiada para uma planilha e depois reenviada para quem executa. Antes de automatizar, a empresa elimina campos sem uso, define quem decide exceções e escolhe uma fonte única.</p>
              <p className="mt-5">Só então o registro, o encaminhamento e os alertas previsíveis passam a acontecer automaticamente. Se o problema principal for a troca de dados entre ferramentas, vale entender primeiro <Link href="/solucoes/integracoes" className="font-semibold text-azul-profundo underline decoration-cobre/50 underline-offset-4 hover:decoration-cobre">quando integrar sistemas faz sentido</Link>.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)] bg-[var(--color-paper-deep)]" aria-labelledby="automacao-cta-heading">
        <Container>
          <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">Conversa</p>
          <h2 id="automacao-cta-heading" className="type-section-title mt-6 max-w-[67rem] text-balance text-grafite">
            Antes de automatizar, vale explicar onde o trabalho está travando.
          </h2>
          <div className="mt-12 grid border-t border-[var(--color-border)] pt-8 sm:mt-16 sm:pt-10 lg:grid-cols-12 lg:gap-x-8">
            <p className="type-lead max-w-[40rem] text-grafite/70 lg:col-span-6">A primeira conversa serve para separar repetição, exceção e causa real do problema.</p>
            <div className="mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:flex lg:justify-end">
              <Button href="/contato" size="lg" variant="primary" className="w-full min-[375px]:w-auto" data-event="cta_automation_click">Conversar sobre um problema</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
