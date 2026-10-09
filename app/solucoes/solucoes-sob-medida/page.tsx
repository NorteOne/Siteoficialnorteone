import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Quando construir um software próprio";
const pageDescription =
  "Entenda quando vale construir uma ferramenta própria, quando uma solução pronta é mais responsável e quais custos precisam entrar na decisão.";
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
        alt: "Norte One — quando construir um software próprio",
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
    title: "Adotar uma ferramenta pronta",
    description:
      "Processos comuns costumam ser atendidos com mais velocidade e menor responsabilidade de manutenção.",
  },
  {
    title: "Configurar o que já existe",
    description:
      "Uma mudança de regra, permissão ou uso pode resolver a lacuna sem criar outro sistema.",
  },
  {
    title: "Simplificar o processo",
    description:
      "A melhor ferramenta para uma etapa desnecessária é retirar a etapa.",
  },
  {
    title: "Conectar ferramentas",
    description:
      "Quando as partes funcionam, integrar pode preservar investimentos e reduzir a ruptura.",
  },
];

const reasonsNotToBuild = [
  "Uma ferramenta de mercado já atende ao essencial sem adaptações críticas.",
  "A causa está no processo, na responsabilidade ou na adoção — não na ferramenta.",
  "A necessidade é instável, temporária ou não tem responsável por sua manutenção.",
  "A complexidade e o custo contínuo superam o ganho operacional esperado.",
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
                Quando vale construir uma ferramenta própria?
              </h1>
            </div>
            <div className="border-t border-[var(--color-border-on-dark)] pt-7 lg:col-span-5 lg:col-start-8 lg:mt-8">
              <p className="type-lead font-medium">
                Construir do zero deve ser uma decisão, não um ponto de partida.
              </p>
              <p className="mt-5 text-base leading-7 text-azul-nevoa/80">
                Software próprio transfere para a empresa uma responsabilidade contínua. O benefício precisa justificar essa escolha inteira.
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
              <p className="text-xs font-semibold uppercase text-cobre-ink sm:text-sm">Primeira responsabilidade</p>
              <h2 id="nao-construir-heading" className="type-section-title mt-5 max-w-[43rem] text-balance text-grafite">
                Tentar não construir.
              </h2>
              <p className="mt-7 max-w-[35rem] text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8">
                Uma ferramenta própria só ganha valor depois que alternativas menores foram avaliadas com honestidade.
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
              <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">Quando não construir</p>
              <h2 id="quando-nao-heading" className="type-section-title mt-5 max-w-[42rem] text-balance">
                Dizer não também protege a operação.
              </h2>
              <p className="mt-7 max-w-[35rem] text-base leading-7 text-azul-nevoa/80 sm:text-lg sm:leading-8">
                O entusiasmo com uma ideia não reduz o custo de mantê-la depois que ela se torna parte do trabalho.
              </p>
            </div>

            <ol className="border-t border-[var(--color-border-on-dark)] lg:col-span-6 lg:col-start-7">
              {reasonsNotToBuild.map((reason, index) => (
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
                O desenvolvimento é só o começo da conta.
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
            Antes de pensar no software, vale explicar o que nenhuma alternativa resolveu.
          </h2>
          <div className="mt-12 grid border-t border-[var(--color-border)] pt-8 sm:mt-16 sm:pt-10 lg:grid-cols-12 lg:gap-x-8">
            <p className="max-w-[40rem] text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8 lg:col-span-6">A conversa começa pela relevância do processo, pelas tentativas anteriores e pela responsabilidade que a empresa pode assumir.</p>
            <div className="mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:flex lg:justify-end">
              <Button href="/contato" size="lg" variant="primary" className="w-full min-[375px]:w-auto" data-event="cta_custom_software_click">Conversar sobre um problema</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
