import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Desenvolvimento de software e sistemas sob medida";
const pageDescription =
  "Desenvolvimento de software para processos que ferramentas genéricas não atendem bem. A Norte One conecta análise de negócio, implementação e acompanhamento.";
const pagePath = "/solucoes/solucoes-sob-medida";

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
        alt: "Norte One — desenvolvimento de software sob medida",
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

const alternatives = [
  {
    title: "Fluxos específicos em um mesmo sistema",
    description:
      "Etapas centrais deixam de depender de planilhas paralelas e passam a seguir as regras da operação.",
  },
  {
    title: "Dados organizados para a gestão",
    description:
      "Registros, permissões e critérios definidos ajudam a acompanhar o trabalho com uma visão consistente.",
  },
  {
    title: "Menos contornos no trabalho diário",
    description:
      "A ferramenta considera como sua equipe executa, decide e trata exceções, em vez de exigir adaptações em cada etapa.",
  },
  {
    title: "Continuidade com as ferramentas existentes",
    description:
      "Integrações conectam o sistema próprio às fontes e aos serviços que continuam fazendo parte do processo.",
  },
];

const investmentCriteria = [
  "Definir qual gargalo o software deve resolver e como avaliar a melhoria.",
  "Comparar configuração, integração e desenvolvimento pelo custo total e pelo impacto esperado.",
  "Priorizar o fluxo central para começar com um escopo que a equipe consiga usar e validar.",
  "Estabelecer responsáveis por decisões, adoção e manutenção desde o início.",
];

const reasonsToConsider = [
  {
    title: "A lacuna está em um processo central.",
    description:
      "O problema é recorrente, afeta uma parte importante da operação e não é apenas uma preferência.",
  },
  {
    title: "As alternativas não resolvem a necessidade.",
    description:
      "Configurar ou conectar ferramentas existentes ainda deixa sem resposta o fluxo que importa.",
  },
  {
    title: "A empresa pode sustentar o produto.",
    description:
      "Existem responsáveis, regras compreendidas e capacidade para manter e evoluir a solução.",
  },
];

const ownershipCosts = [
  {
    title: "Decisão",
    description: "Priorizar necessidades, recusar desvios e manter uma direção coerente.",
  },
  {
    title: "Operação",
    description: "Apoiar pessoas, dados, permissões, exceções e mudanças de rotina.",
  },
  {
    title: "Manutenção e evolução",
    description: "Corrigir falhas, atualizar dependências e priorizar melhorias contínuas.",
  },
];

export default function SolucoesSobMedidaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Soluções", url: `${siteConfig.url}/solucoes` },
          { name: "Software próprio", url: `${siteConfig.url}${pagePath}` },
        ]}
      />

      <section className="section-space bg-azul-noturno text-off-white" aria-labelledby="software-heading">
        <Container>
          <nav aria-label="Navegação estrutural" className="text-sm text-azul-nevoa/75">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-off-white">Início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/solucoes" className="hover:text-off-white">Soluções</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-off-white">Software próprio</li>
            </ol>
          </nav>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-9">
              <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">Software sob medida</p>
              <h1 id="software-heading" className="type-page-title mt-8 max-w-[68rem] text-balance">
                Um sistema feito para o modo como sua empresa opera.
              </h1>
            </div>
            <div className="border-t border-[var(--color-border-on-dark)] pt-7 lg:col-span-5 lg:col-start-8 lg:mt-8">
              <p className="type-lead font-medium">
                Quando ferramentas genéricas limitam um processo central, software sob medida pode criar uma base melhor para crescer.
              </p>
              <p className="mt-5 text-base leading-7 text-azul-nevoa/80">
                A Norte One mapeia a necessidade, define prioridades e desenvolve a solução com quem vai usá-la, considerando integração e manutenção.
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

      <section className="section-space-generous bg-[var(--color-paper)]" aria-labelledby="nao-construir-heading" data-whatsapp-hide>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase text-cobre-ink sm:text-sm">Resultado na rotina</p>
              <h2 id="nao-construir-heading" className="type-section-title mt-5 max-w-[43rem] text-balance text-grafite">
                A operação deixa de depender dos limites da ferramenta.
              </h2>
              <p className="mt-7 max-w-[35rem] text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8">
                Sistemas internos e fluxos sob medida organizam atividades específicas que hoje exigem controles paralelos e conferências manuais.
              </p>
            </div>

            <ol className="border-t border-[var(--color-border)] lg:col-span-6 lg:col-start-7">
              {alternatives.map((alternative, index) => (
                <li key={alternative.title} className="grid gap-3 border-b border-[var(--color-border)] py-7 sm:grid-cols-[3rem_1fr] sm:gap-x-5">
                  <span className="text-xs font-semibold text-cobre-ink">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="type-item-title text-grafite">{alternative.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-grafite/70 sm:text-base sm:leading-7">{alternative.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="section-space bg-azul-profundo text-off-white" aria-labelledby="quando-nao-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">Decisão de investimento</p>
              <h2 id="quando-nao-heading" className="type-section-title mt-5 max-w-[42rem] text-balance">
                Um escopo orientado ao ganho operacional.
              </h2>
              <p className="mt-7 max-w-[35rem] text-base leading-7 text-azul-nevoa/80 sm:text-lg sm:leading-8">
                Nem toda lacuna exige desenvolvimento. Comparamos alternativas e priorizamos o que justifica uma solução própria.
              </p>
            </div>

            <ol className="border-t border-[var(--color-border-on-dark)] lg:col-span-6 lg:col-start-7">
              {investmentCriteria.map((reason, index) => (
                <li key={reason} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--color-border-on-dark)] py-6">
                  <span className="text-xs font-semibold text-cobre">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-base leading-7 text-azul-nevoa/90">{reason}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[var(--color-paper)]" aria-labelledby="quando-sim-heading">
        <Container>
          <div className="max-w-[57rem]">
            <p className="text-xs font-semibold uppercase text-cobre-ink sm:text-sm">Quando considerar</p>
            <h2 id="quando-sim-heading" className="type-section-title mt-5 text-balance text-grafite">
              Uma necessidade específica pode justificar uma resposta própria.
            </h2>
          </div>

          <dl className="mt-14 border-t border-[var(--color-border)] sm:mt-16 lg:mt-20">
            {reasonsToConsider.map((reason, index) => (
              <div key={reason.title} className="grid gap-4 border-b border-[var(--color-border)] py-8 sm:grid-cols-12 sm:gap-x-8 sm:py-9">
                <span className="text-xs font-semibold text-cobre-ink sm:col-span-1">{String(index + 1).padStart(2, "0")}</span>
                <dt className="type-item-title text-grafite sm:col-span-5">{reason.title}</dt>
                <dd className="max-w-[36rem] text-sm leading-6 text-grafite/70 sm:col-span-5 sm:col-start-8 sm:text-base sm:leading-7">{reason.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="section-space-generous bg-[var(--color-paper-deep)]" aria-labelledby="custo-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="min-w-0 lg:col-span-5">
              <p className="text-xs font-semibold uppercase text-cobre-ink sm:text-sm">Custo total</p>
              <h2 id="custo-heading" className="type-section-title mt-5 max-w-[42rem] text-balance text-grafite">
                Planejar o uso, a manutenção e a evolução.
              </h2>
              <p className="mt-7 max-w-[35rem] text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8">
                A decisão precisa considerar todo o período em que a ferramenta será usada, alterada e protegida.
              </p>
            </div>

            <dl className="min-w-0 border-t border-[var(--color-border)] lg:col-span-6 lg:col-start-7">
              {ownershipCosts.map((cost) => (
                <div key={cost.title} className="grid gap-3 border-b border-[var(--color-border)] py-7 sm:grid-cols-5 sm:gap-x-8">
                  <dt className="type-item-title text-grafite sm:col-span-2">{cost.title}</dt>
                  <dd className="text-sm leading-6 text-grafite/70 sm:col-span-3 sm:text-base sm:leading-7">{cost.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="section-space bg-[var(--color-paper)]" aria-labelledby="perguntas-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase text-cobre-ink sm:text-sm">Situação hipotética</p>
              <h2 id="perguntas-heading" className="type-section-title mt-5 max-w-[42rem] text-balance text-grafite">
                Um fluxo central vive em cinco controles paralelos.
              </h2>
            </div>
            <div className="max-w-[46rem] text-base leading-7 text-grafite/70 lg:col-span-7 lg:col-start-6">
              <p>Uma operação adaptou ferramentas prontas durante anos. Mesmo depois de simplificar etapas e conectar dados, a atividade que define seu trabalho ainda depende de planilhas e conferências fora dos sistemas.</p>
              <p className="mt-5">Construir pode fazer sentido se essa lacuna for estável, central e custosa o bastante para justificar propriedade contínua. Se as ferramentas já funcionam e o problema está apenas entre elas, vale avaliar primeiro <Link href="/solucoes/integracoes" className="font-semibold text-azul-profundo underline decoration-cobre/50 underline-offset-4 hover:decoration-cobre">uma integração</Link>.</p>
            </div>
          </div>

        </Container>
      </section>

      <section className="section-space border-t border-[var(--color-border)] bg-[var(--color-paper-deep)]" aria-labelledby="software-cta-heading">
        <Container>
          <p className="text-xs font-semibold uppercase text-cobre-ink sm:text-sm">Conversa</p>
          <h2 id="software-cta-heading" className="type-section-title mt-6 max-w-[67rem] text-balance text-grafite">
            Qual processo sua ferramenta atual não consegue acompanhar?
          </h2>
          <div className="mt-12 grid border-t border-[var(--color-border)] pt-8 sm:mt-16 sm:pt-10 lg:grid-cols-12 lg:gap-x-8">
            <p className="max-w-[40rem] text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8 lg:col-span-6">Conte o que sua equipe precisa fazer fora dos sistemas. Vamos avaliar a lacuna, as alternativas e o escopo adequado para resolvê-la.</p>
            <div className="mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:flex lg:justify-end">
              <Button href="/contato" size="lg" variant="primary" className="w-full min-[375px]:w-auto" data-event="cta_custom_software_click">{siteConfig.primaryCta}</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
