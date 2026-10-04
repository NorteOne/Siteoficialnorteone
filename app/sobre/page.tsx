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
                className="mt-8 max-w-[69rem] text-balance font-display text-[2.75rem] font-bold leading-[1.06] min-[375px]:text-[3rem] sm:text-[3.75rem] lg:text-[4.25rem]"
              >
                Uma empresa que permanece perto do problema.
              </h1>
              <p className="mt-7 max-w-[52rem] text-base leading-7 text-azul-nevoa/85 sm:mt-8 sm:text-xl sm:leading-9">
                A Norte One existe para compreender como uma empresa funciona,
                decidir o que realmente precisa mudar e acompanhar a resposta
                até ela entrar na rotina.
              </p>
            </div>

            <p className="border-t border-[var(--color-border-on-dark)] pt-7 font-display text-xl font-medium leading-8 text-off-white sm:text-2xl sm:leading-9 lg:col-span-5 lg:col-start-8 lg:mt-8 lg:pt-8">
              Uma empresa em que entender, decidir e executar
              continuam próximos.
            </p>
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
                className="mt-6 max-w-[57rem] text-balance font-display text-[2.4rem] font-semibold leading-[1.08] text-grafite sm:text-[3rem] lg:text-[3.5rem]"
              >
                Entre o problema e a ferramenta, existe uma decisão que exige
                contexto.
              </h2>
            </div>

            <div className="max-w-[34rem] space-y-6 text-base leading-7 text-grafite/75 sm:text-lg sm:leading-8 lg:col-span-5 lg:self-end">
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

          <aside className="mt-14 grid border-t border-[var(--color-border)] pt-8 sm:mt-16 sm:pt-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-8 lg:pt-12">
            <p className="text-xs font-semibold uppercase text-cobre lg:col-span-3">
              O que não nos orienta
            </p>
            <p className="mt-5 max-w-[50rem] font-display text-xl font-medium leading-8 text-azul-profundo sm:text-2xl sm:leading-9 lg:col-span-7 lg:col-start-5 lg:mt-0">
              Não medimos a qualidade de uma resposta pela quantidade de
              tecnologia envolvida.
            </p>
          </aside>
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
                className="mt-6 max-w-[65rem] text-balance font-display text-[2.4rem] font-semibold leading-[1.08] max-[374px]:text-[2rem] sm:text-[3rem] lg:text-[3.5rem]"
              >
                Decisões melhores combinam contexto, critério e
                responsabilidade pela execução.
              </h2>
            </div>
            <p className="max-w-[29rem] self-end text-base leading-7 text-azul-nevoa/80 sm:text-lg sm:leading-8 lg:col-span-4 lg:col-start-9">
              Essa visão orienta como a Norte One avalia alternativas, escolhe
              o que faz sentido e acompanha cada resposta até a prática.
            </p>
          </div>

          <div className="mt-14 border-t border-[var(--color-border-on-dark)] sm:mt-16 lg:mt-20">
            {companyPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="grid gap-5 border-b border-[var(--color-border-on-dark)] py-8 sm:py-9 lg:grid-cols-12 lg:gap-x-8 lg:py-10"
              >
                <h3 className="max-w-[32rem] font-display text-2xl font-semibold leading-9 sm:text-3xl sm:leading-10 lg:col-span-5">
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
                className="mt-6 max-w-[60rem] text-balance font-display text-[2.4rem] font-semibold leading-[1.08] text-grafite sm:text-[3rem] lg:text-[3.5rem]"
              >
                Quem decide também acompanha a resposta até a prática.
              </h2>
            </div>
            <div className="max-w-[31rem] space-y-5 self-end text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8 lg:col-span-4">
              <p>
                Diagnóstico, decisão e execução permanecem próximos. Isso
                reduz a distância entre o que foi compreendido e o que precisa
                mudar na operação.
              </p>
              <p>
                Essa proximidade torna visível quem assume as escolhas feitas e
                o trabalho necessário para levá-las à operação.
              </p>
            </div>
          </div>

          <div id="fundador" className="mt-16 grid scroll-mt-20 border-t border-[var(--color-border)] pt-10 sm:mt-20 sm:scroll-mt-24 sm:pt-12 lg:mt-28 lg:grid-cols-12 lg:gap-x-8 lg:pt-16">
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase text-cobre">
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
                      loading="eager"
                      sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 104px) / 2), 30rem"
                      className="editorial-image aspect-[4/5] w-full object-cover sm:aspect-square"
                    />
                  </picture>
                </figure>

                <div className="sm:col-span-4 sm:pb-1 lg:col-span-3">
                  <h3 className="font-display text-[2rem] leading-[1.08] text-grafite sm:text-[2.75rem]">
                    Fábio Campos Magalhães
                  </h3>
                  <p className="mt-2 text-sm font-medium text-cobre sm:text-base">
                    Fundador da Norte One
                  </p>
                  <p className="mt-7 max-w-[44rem] text-base leading-7 text-grafite/70 sm:text-lg sm:leading-8">
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
            className="mt-8 max-w-[70rem] text-balance font-display text-[2.75rem] font-bold leading-[1.06] max-[374px]:text-[2rem] sm:text-[3.5rem] lg:text-[4.25rem]"
          >
            A responsabilidade não termina na recomendação.
          </h2>

          <div className="mt-12 grid border-t border-[var(--color-border-on-dark)] pt-8 sm:mt-16 sm:pt-10 lg:grid-cols-12 lg:gap-x-8">
            <p className="max-w-[41rem] text-base leading-7 text-azul-nevoa/80 sm:text-lg sm:leading-8 lg:col-span-6">
              Nem toda resposta precisa virar software. A Norte One avalia o
              que precisa mudar, aproveita o que já funciona e constrói somente
              quando isso contribui para uma resposta melhor.
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
