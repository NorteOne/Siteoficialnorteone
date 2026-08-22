import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { differentiators } from "@/content/differentiators";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A Norte One existe para aproximar tecnologia da realidade operacional das empresas, unindo visão de negócio, execução técnica e acompanhamento contínuo.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Sobre", url: `${siteConfig.url}/sobre` },
        ]}
      />

      <section className="bg-azul-profundo pb-16 pt-16 text-off-white sm:pb-20 sm:pt-20">
        <Container>
          <Reveal>
            <SectionHeading
              tone="dark"
              level="h1"
              eyebrow="Sobre a Norte One"
              title="Tecnologia construída com visão de negócio."
              description="A Norte One existe para aproximar a tecnologia da realidade operacional das empresas — entendendo primeiro o negócio, para só então decidir onde e como a tecnologia deve entrar."
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-off-white py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-grafite">
              <p>
                Empresas em crescimento costumam enfrentar o mesmo tipo de
                obstáculo: processos manuais que não escalam, informações
                espalhadas entre sistemas e planilhas, e sistemas genéricos
                que não acompanham a forma como o negócio realmente funciona.
              </p>
              <p>
                A Norte One nasce para atuar nesse espaço — não como uma
                fábrica de software, mas como um parceiro que entende a
                operação antes de propor qualquer solução técnica.
              </p>
              <p>
                Unimos visão de negócio, capacidade de execução técnica e
                acompanhamento contínuo, para que cada solução desenvolvida
                funcione de fato no dia a dia da empresa — não apenas no
                papel.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius-card-md)] border border-[var(--color-border)] bg-white p-5"
                >
                  <h3 className="text-sm font-semibold text-grafite">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cinza-pedra">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-azul-nevoa/30 py-16 sm:py-20">
        <Container narrow className="text-center">
          <Reveal>
            <h2 className="text-2xl font-semibold text-azul-profundo sm:text-3xl">
              Quer entender como a Norte One pode ajudar a sua empresa?
            </h2>
            <div className="mt-7 flex justify-center">
              <Button href="/contato" size="lg" variant="primary">
                Conte seu desafio
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
