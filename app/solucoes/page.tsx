import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Seis frentes de atuação para empresas que precisam operar melhor: automação, soluções sob medida, atendimento inteligente, integrações, gestão operacional e presença digital.",
  alternates: { canonical: "/solucoes" },
};

export default function SolucoesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Soluções", url: `${siteConfig.url}/solucoes` },
        ]}
      />

      <section className="bg-azul-profundo pb-16 pt-16 text-off-white sm:pb-20 sm:pt-20">
        <Container>
          <Reveal>
            <SectionHeading
              tone="dark"
              level="h1"
              eyebrow="Soluções"
              title="Soluções para empresas que precisam operar melhor."
              description="Cada frente resolve um tipo de desafio operacional. A tecnologia usada em cada uma delas é definida pelo problema — não o contrário."
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-off-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Reveal key={solution.slug} delay={index * 0.05}>
                  <Card className="flex h-full flex-col">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-card-sm)] bg-azul-nevoa/60 text-azul-profundo">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-cobre">
                          {solution.code}
                        </span>
                        <h2 className="text-lg font-semibold text-grafite">
                          {solution.name}
                        </h2>
                      </div>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-cinza-pedra">
                      {solution.description}
                    </p>
                    <Link
                      href={`/solucoes/${solution.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-profundo hover:text-cobre"
                    >
                      Ver detalhes
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-azul-nevoa/30 py-16 sm:py-20">
        <Container narrow className="text-center">
          <Reveal>
            <h2 className="text-2xl font-semibold text-azul-profundo sm:text-3xl">
              Não sabe qual frente se aplica ao seu caso?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-cinza-pedra">
              Conte o cenário da sua empresa e ajudamos a identificar onde a
              tecnologia pode gerar mais impacto.
            </p>
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
