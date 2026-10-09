import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Quando integrar ferramentas e sistemas";
const pageDescription =
  "Entenda quando conectar ferramentas é melhor do que trocar tudo, quais alternativas avaliar antes e quais riscos uma integração precisa controlar.";
const pagePath = "/solucoes/integracoes";

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
        alt: "Norte One — quando integrar ferramentas e sistemas",
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

const fractures = [
  {
    number: "01",
    title: "A informação começa em um lugar.",
    description: "Pedidos, conversas e registros entram por ferramentas diferentes.",
  },
  {
    number: "02",
    title: "Uma pessoa leva o contexto adiante.",
    description: "Dados são copiados, resumidos ou reinterpretados para a próxima etapa.",
  },
  {
    number: "03",
    title: "Cada sistema guarda uma versão.",
    description: "Duplicidades atrasam a decisão e dificultam saber qual informação vale.",
  },
];

const beforeIntegrating = [
  {
    verb: "Simplificar",
    question: "A informação pode deixar de circular?",
    explanation: "Remover uma etapa ou ferramenta sem função evita criar outra conexão.",
  },
  {
    verb: "Substituir",
    question: "Uma ferramenta já cobre as duas necessidades?",
    explanation: "Trocar pode ser mais simples quando o processo é comum e a transição viável.",
  },
  {
    verb: "Conectar",
    question: "As partes funcionam e só falta continuidade?",
    explanation: "A integração ganha sentido quando preserva o que já atende bem.",
  },
];

const risks = [
  "Propagar dados errados com mais velocidade.",
  "Depender de uma ferramenta que pode mudar limites ou acesso.",
  "Criar sincronizações sem uma fonte oficial de informação.",
  "Ocultar falhas quando não há monitoramento, alerta e responsável.",
];

export default function IntegracoesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Soluções", url: `${siteConfig.url}/solucoes` },
          { name: "Integrações", url: `${siteConfig.url}${pagePath}` },
        ]}
      />

      <section className="section-space bg-azul-noturno text-off-white" aria-labelledby="integracoes-heading">
        <Container>
          <nav aria-label="Navegação estrutural" className="text-sm text-azul-nevoa/75">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-off-white">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/solucoes" className="hover:text-off-white">Soluções</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-off-white">Integrações</li>
            </ol>
          </nav>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-9">
              <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">Integrações</p>
              <h1 id="integracoes-heading" className="type-page-title mt-8 max-w-[68rem] text-balance">
                Quando conectar ferramentas é melhor do que trocar tudo?
              </h1>
            </div>
            <div className="border-t border-[var(--color-border-on-dark)] pt-7 lg:col-span-5 lg:col-start-8 lg:mt-8">
              <p className="type-lead font-medium">
                Integração resolve continuidade. Não resolve a falta de um processo comum.
              </p>
              <p className="mt-5 text-base leading-7 text-azul-nevoa/80">
                Antes de falar em API, é preciso entender qual informação deve atravessar a operação e por quê.
              </p>
              <Link
                href="/contato"
                className="mt-5 inline-flex min-h-11 items-center font-semibold text-off-white underline decoration-cobre underline-offset-4 hover:decoration-off-white"
              >
                Conversar sobre a operação
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space-generous bg-[var(--color-paper)]" aria-labelledby="fratura-heading" data-whatsapp-hide>
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase text-cobre-ink sm:text-sm">O problema</p>
              <h2 id="fratura-heading" className="type-section-title mt-5 max-w-[51rem] text-balance text-grafite">
                Ferramentas desconectadas transformam pessoas em pontes.
              </h2>
            </div>
            <p className="max-w-[31rem] self-end text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8 lg:col-span-4 lg:col-start-9">
              O custo aparece nas cópias, conferências e reconstruções de contexto entre uma etapa e outra.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-[var(--color-border)] sm:mt-16 lg:mt-20 lg:grid-cols-4">
            {fractures.map((fracture) => (
              <li key={fracture.number} className="border-b border-[var(--color-border)] py-8 lg:min-h-[22rem] lg:border-r lg:px-7 lg:last:border-r-0">
                <span className="text-xs font-semibold text-cobre-ink">{fracture.number}</span>
                <h3 className="type-item-title mt-8 max-w-[18rem] text-grafite">{fracture.title}</h3>
                <p className="mt-5 max-w-[20rem] text-sm leading-6 text-grafite/70 sm:text-base sm:leading-7">{fracture.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-space bg-[var(--color-paper-deep)]" aria-labelledby="alternativas-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase text-cobre-ink sm:text-sm">Antes da integração</p>
              <h2 id="alternativas-heading" className="type-section-title mt-5 max-w-[39rem] text-balance text-grafite">
                Conectar é apenas uma das respostas possíveis.
              </h2>
              <p className="mt-7 max-w-[34rem] text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8">
                A ordem das perguntas evita uma solução tecnicamente correta para um problema que poderia deixar de existir.
              </p>
            </div>

            <dl className="border-t border-[var(--color-border)] lg:col-span-6 lg:col-start-7">
              {beforeIntegrating.map((item) => (
                <div key={item.verb} className="border-b border-[var(--color-border)] py-7">
                  <dt className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-x-6">
                    <span className="text-xs font-semibold uppercase text-cobre-ink">{item.verb}</span>
                    <span className="type-item-title text-grafite">{item.question}</span>
                  </dt>
                  <dd className="mt-3 text-sm leading-6 text-grafite/70 sm:ml-[8.5rem] sm:text-base sm:leading-7">{item.explanation}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="section-space bg-azul-profundo text-off-white" aria-labelledby="integracao-criterios-heading">
        <Container>
          <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">Critérios de decisão</p>
          <h2 id="integracao-criterios-heading" className="type-section-title mt-5 max-w-[56rem] text-balance">
            Preservar o que funciona exige clareza sobre o que deve circular.
          </h2>

          <div className="mt-14 grid border-y border-[var(--color-border-on-dark)] sm:mt-16 lg:grid-cols-2 lg:divide-x lg:divide-[var(--color-border-on-dark)]">
            <div className="py-9 lg:pr-12 lg:py-12">
              <p className="text-xs font-semibold uppercase text-cobre">Faz sentido quando</p>
              <ul className="mt-7 space-y-5 text-base leading-7 text-azul-nevoa/85">
                <li>as ferramentas atendem bem às suas funções principais;</li>
                <li>a quebra acontece na passagem de dados ou ações entre elas;</li>
                <li>há uma fonte oficial e alguém responsável por acompanhar a conexão.</li>
              </ul>
            </div>
            <div className="border-t border-[var(--color-border-on-dark)] py-9 lg:border-t-0 lg:pl-12 lg:py-12">
              <p className="text-xs font-semibold uppercase text-cobre">Não faz sentido quando</p>
              <ul className="mt-7 space-y-5 text-base leading-7 text-azul-nevoa/85">
                <li>uma das ferramentas já não atende ao processo;</li>
                <li>dados, regras ou responsabilidades ainda não estão definidos;</li>
                <li>a conexão mantém etapas desnecessárias ou custa mais que a substituição.</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 grid lg:grid-cols-12 lg:gap-x-8">
            <h2 className="type-item-title lg:col-span-4">A tecnologia vem depois do acordo operacional.</h2>
            <p className="mt-5 max-w-[45rem] text-base leading-7 text-azul-nevoa/80 lg:col-span-7 lg:col-start-6 lg:mt-0">
              Só depois de definir origem, destino, frequência, responsabilidade, exceções e falhas é possível decidir se a conexão será feita por API, evento, importação ou outro mecanismo. O termo técnico descreve o meio, não a necessidade.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-space-generous bg-[var(--color-paper)]" aria-labelledby="integracao-riscos-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase text-cobre-ink sm:text-sm">Riscos</p>
              <h2 id="integracao-riscos-heading" className="type-section-title mt-5 max-w-[42rem] text-balance text-grafite">
                Uma conexão sem controle multiplica inconsistências.
              </h2>
            </div>
            <ol className="border-t border-[var(--color-border)] lg:col-span-6 lg:col-start-7">
              {risks.map((risk, index) => (
                <li key={risk} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--color-border)] py-7">
                  <span className="text-xs font-semibold text-cobre-ink">{String(index + 1).padStart(2, "0")}</span>
                  <p className="type-item-title text-grafite">{risk}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16 grid border-t border-[var(--color-border)] pt-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase text-cobre-ink">Situação hipotética</p>
              <h2 className="type-item-title mt-5 text-grafite">O atendimento conhece o cliente, mas a agenda não.</h2>
            </div>
            <div className="mt-6 max-w-[46rem] text-base leading-7 text-grafite/70 lg:col-span-7 lg:col-start-6 lg:mt-0">
              <p>Uma equipe registra conversas em um sistema e compromissos em outro. Antes de conectar, define quais dados são necessários, quem pode alterá-los e qual sistema é responsável por cada registro.</p>
              <p className="mt-5">A integração passa a atualizar somente o que precisa atravessar o fluxo. Se o problema estiver nas tarefas repetidas dentro de uma mesma rotina, pode ser mais útil avaliar <Link href="/solucoes/automacao-de-processos" className="font-semibold text-azul-profundo underline decoration-cobre/50 underline-offset-4 hover:decoration-cobre">quando automatizar o processo</Link>.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)] bg-[var(--color-paper-deep)]" aria-labelledby="integracoes-cta-heading">
        <Container>
          <p className="text-xs font-semibold uppercase text-cobre-ink sm:text-sm">Conversa</p>
          <h2 id="integracoes-cta-heading" className="type-section-title mt-6 max-w-[67rem] text-balance text-grafite">
            Antes de conectar sistemas, vale entender onde o contexto se perde.
          </h2>
          <div className="mt-12 grid border-t border-[var(--color-border)] pt-8 sm:mt-16 sm:pt-10 lg:grid-cols-12 lg:gap-x-8">
            <p className="type-lead max-w-[40rem] text-grafite/70 lg:col-span-6">A primeira conversa começa pelas ferramentas existentes, pelo caminho da informação e pelas pessoas que hoje fazem a ponte.</p>
            <div className="mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:flex lg:justify-end">
              <Button href="/contato" size="lg" variant="primary" className="w-full min-[375px]:w-auto" data-event="cta_integrations_click">Conversar sobre um problema</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
