import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { segments } from "@/content/segments";

export const metadata: Metadata = {
  title: "Segmentos",
  description:
    "Tecnologia adaptada à realidade de cada operação: segmentos com os quais a Norte One trabalha e pode gerar impacto.",
  alternates: { canonical: "/segmentos" },
};

export default function SegmentosPage() {
  const core = segments.filter((s) => s.tier === "core");
  const emerging = segments.filter((s) => s.tier === "emerging");

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Segmentos", url: `${siteConfig.url}/segmentos` },
        ]}
      />

      <section className="bg-azul-profundo pb-16 pt-16 text-off-white sm:pb-20 sm:pt-20">
        <Container>
          <Reveal>
            <SectionHeading
              tone="dark"
              level="h1"
              eyebrow="Segmentos"
              title="Tecnologia adaptada à realidade de cada operação."
              description="Não acreditamos em solução genérica. Cada segmento tem processos, ritmos e prioridades diferentes — e é a partir disso que desenhamos cada solução."
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-off-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-cobre">
              Segmentos prioritários
            </h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {core.map((segment, index) => (
              <Reveal key={segment.name} delay={index * 0.05}>
                <div className="h-full rounded-[var(--radius-card-md)] border border-[var(--color-border)] bg-white p-6">
                  <h3 className="text-base font-semibold text-grafite">{segment.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cinza-pedra">
                    {segment.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="mt-14 text-sm font-semibold uppercase tracking-wide text-cobre">
              Também atuamos em
            </h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {emerging.map((segment, index) => (
              <Reveal key={segment.name} delay={index * 0.05}>
                <div className="h-full rounded-[var(--radius-card-md)] border border-[var(--color-border)] bg-azul-nevoa/20 p-6">
                  <h3 className="text-base font-semibold text-grafite">{segment.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cinza-pedra">
                    {segment.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-azul-nevoa/30 py-16 sm:py-20">
        <Container narrow className="text-center">
          <Reveal>
            <h2 className="text-2xl font-semibold text-azul-profundo sm:text-3xl">
              Não encontrou o seu segmento?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-cinza-pedra">
              Isso não significa que não podemos ajudar. Conte o cenário da sua
              operação e vamos entender juntos.
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
