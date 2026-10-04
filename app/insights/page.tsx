import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Insights";
const pageDescription =
  "Conteúdo sobre tecnologia aplicada a operações empresariais. Em breve.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/insights" },
  openGraph: {
    type: "website",
    url: "/insights",
    title: `Norte One — ${pageTitle}`,
    description: pageDescription,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Norte One — soluções para empresas funcionarem melhor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Norte One — ${pageTitle}`,
    description: pageDescription,
    images: ["/opengraph-image"],
  },
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
        </Container>
      </section>
    </>
  );
}
