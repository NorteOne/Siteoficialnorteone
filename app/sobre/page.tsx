import type { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Uma empresa próxima do problema";
const pageDescription =
  "Conheça a visão da Norte One: compreender problemas empresariais, decidir com critério e acompanhar cada resposta até a execução.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/sobre" },
  openGraph: {
    type: "website",
    url: "/sobre",
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

const companyPrinciples = [
  {
    title: "Clareza antes da complexidade",
    description:
      "Tornar o problema compreensível vem antes de ampliar a resposta. Uma direção clara permite escolher melhor o que fazer e o que deixar de fazer.",
  },
  {
    title: "Responsabilidade além da recomendação",
    description:
      "A responsabilidade inclui acompanhar as consequências das decisões, participar da execução e ajustar o que ainda não funciona na rotina.",
  },
  {
    title: "Pragmatismo na resposta",
    description:
      "A solução adequada pode reorganizar um processo, aproveitar uma ferramenta existente ou exigir algo próprio. O contexto deve definir o caminho.",
  },
];

export default function SobrePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Sobre", url: `${siteConfig.url}/sobre` },
        ]}
      />

      <section
        className="section-space bg-azul-noturno text-off-white"
        aria-labelledby="sobre-hero-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-10">
              <p className="editorial-kicker">
                Sobre a Norte One
              </p>
              <h1
                id="sobre-hero-heading"
                className="type-page-title mt-8 max-w-[69rem] text-balance"
              >
                Uma empresa que permanece perto do problema.
              </h1>
              <p className="type-lead mt-7 max-w-[52rem] text-azul-nevoa/85 sm:mt-8">
                A Norte One existe para compreender como uma empresa funciona,
                decidir o que realmente precisa mudar e acompanhar a resposta
                até ela entrar na rotina.
              </p>
            </div>

          </div>
        </Container>
      </section>

      <section
        className="section-space-generous bg-[var(--color-paper)]"
        aria-labelledby="origem-heading"
        data-whatsapp-hide
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-7">
              <p className="editorial-kicker">
                Por que existimos
              </p>
              <h2
                id="origem-heading"
                className="type-section-title mt-6 max-w-[57rem] text-balance text-grafite"
              >
                Entre o problema e a ferramenta, existe uma decisão que exige
                contexto.
              </h2>
            </div>

            <div className="type-lead max-w-[34rem] space-y-6 text-grafite/75 lg:col-span-5 lg:self-end">
              <p>
                Empresas costumam compensar falhas de processo com esforço
                manual, controles paralelos e conhecimento concentrado. O
                trabalho continua, mas custa mais atenção do que deveria.
              </p>
              <p>
                A Norte One surgiu para trabalhar nesse intervalo: entender a
                realidade do negócio antes de indicar uma resposta e permanecer
                envolvida quando a direção escolhida precisa virar prática.
              </p>
            </div>
          </div>

        </Container>
      </section>

      <section
        className="section-space bg-azul-profundo text-off-white"
        aria-labelledby="visao-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-9">
              <p className="editorial-kicker">
                Como a Norte One trabalha
              </p>
              <h2
                id="visao-heading"
                className="type-section-title mt-6 max-w-[65rem] text-balance"
              >
                Decisões melhores combinam contexto, critério e
                responsabilidade pela execução.
              </h2>
            </div>
          </div>

          <div className="mt-14 border-t border-[var(--color-border-on-dark)] sm:mt-16 lg:mt-20">
            {companyPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="grid gap-5 border-b border-[var(--color-border-on-dark)] py-8 sm:py-9 lg:grid-cols-12 lg:gap-x-8 lg:py-10"
              >
                <h3 className="type-item-title max-w-[32rem] lg:col-span-5">
                  {principle.title}
                </h3>
                <p className="max-w-[42rem] text-sm leading-6 text-azul-nevoa/80 sm:text-base sm:leading-7 lg:col-span-6 lg:col-start-7">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="section-space-generous bg-[var(--color-paper-deep)]"
        aria-labelledby="responsabilidade-heading"
      >
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-8">
              <p className="editorial-kicker">
                Direção e execução
              </p>
              <h2
                id="responsabilidade-heading"
                className="type-section-title mt-6 max-w-[60rem] text-balance text-grafite"
              >
                Quem decide também acompanha a resposta até a prática.
              </h2>
            </div>
          </div>

          <div id="fundador" className="mt-16 grid scroll-mt-2 border-t border-[var(--color-border)] pt-10 sm:mt-20 sm:scroll-mt-5 sm:pt-12 lg:mt-28 lg:grid-cols-12 lg:scroll-mt-8 lg:gap-x-8 lg:pt-16">
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase text-cobre-ink">
                Quem assume a direção
              </p>
            </div>

            <div className="mt-7 lg:col-span-9 lg:col-start-4 lg:mt-0">
              <div className="grid gap-8 sm:grid-cols-8 sm:items-end sm:gap-10 lg:gap-14">
                <figure className="sm:col-span-4 lg:col-span-5">
                  <picture>
                    <source
                      media="(max-width: 639px)"
                      srcSet="/images/founder/fabio-campos-magalhaes-mobile.webp"
                      type="image/webp"
                    />
                    <Image
                      src="/images/founder/fabio-campos-magalhaes-desktop.webp"
                      alt="Fábio Campos Magalhães, fundador da Norte One"
                      width={1254}
                      height={1254}
                      sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 104px) / 2), 30rem"
                      className="editorial-image aspect-[4/5] w-full object-cover sm:aspect-square"
                    />
                  </picture>
                </figure>

                <div className="sm:col-span-4 sm:pb-1 lg:col-span-3">
                  <h3 className="type-item-title text-grafite">
                    Fábio Campos Magalhães
                  </h3>
                  <p className="mt-2 text-sm font-medium text-cobre-ink sm:text-base">
                    Fundador da Norte One
                  </p>
                  <p className="type-lead mt-7 max-w-[44rem] text-grafite/70">
                    Participa diretamente do diagnóstico, das decisões de
                    produto e da execução. Sua presença nesta página identifica
                    quem responde pela direção da empresa e pelas escolhas que
                    orientam o trabalho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="section-space bg-azul-noturno text-off-white"
        aria-labelledby="construcao-heading"
      >
        <Container>
          <p className="editorial-kicker">
            Da decisão à operação
          </p>
          <h2
            id="construcao-heading"
            className="type-section-title mt-8 max-w-[70rem] text-balance"
          >
            Conte o que precisa funcionar melhor na sua operação.
          </h2>

          <div className="mt-12 grid border-t border-[var(--color-border-on-dark)] pt-8 sm:mt-16 sm:pt-10 lg:grid-cols-12 lg:gap-x-8">
            <p className="type-lead max-w-[41rem] text-azul-nevoa/80 lg:col-span-6">
              A conversa começa pelo contexto, sem exigir que você chegue com
              uma tecnologia escolhida.
            </p>
            <div className="mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:flex lg:items-start lg:justify-end">
              <Button
                href="/contato"
                size="lg"
                variant="accent"
                className="w-full px-5 text-sm min-[375px]:w-auto min-[375px]:px-7 min-[375px]:text-base"
                data-event="cta_about_click"
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
