import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Conteúdo sobre tecnologia aplicada a operações empresariais. Em breve.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Insights", url: `${siteConfig.url}/insights` },
        ]}
      />

      <section className="bg-azul-profundo py-24 text-off-white sm:py-32">
        <Container narrow className="text-center">
          <Reveal>
            <SectionHeading
              tone="dark"
              level="h1"
              align="center"
              eyebrow="Insights"
              title="Conteúdo em preparação."
              description="Em breve, a Norte One vai publicar reflexões sobre tecnologia aplicada a operações empresariais, processos e gestão. Por enquanto, se você tem um desafio específico, fale diretamente com a gente."
            />
            <div className="mt-8 flex justify-center">
              <Button href="/contato" size="lg" variant="accent">
                Conte seu desafio
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
