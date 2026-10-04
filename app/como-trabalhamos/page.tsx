import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Methodology } from "@/components/sections/Methodology";
import { Differentiators } from "@/components/sections/Differentiators";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

const pageTitle = "Como trabalhamos";
const pageDescription =
  "A metodologia da Norte One: entender, diagnosticar, estruturar, implementar e evoluir. Do problema à solução.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/como-trabalhamos" },
  openGraph: {
    type: "website",
    url: "/como-trabalhamos",
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

export default function ComoTrabalhamosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Como trabalhamos", url: `${siteConfig.url}/como-trabalhamos` },
        ]}
      />

      <section className="bg-azul-profundo pb-16 pt-16 text-off-white sm:pb-20 sm:pt-20">
        <Container>
          <SectionHeading
            tone="dark"
            level="h1"
            eyebrow="Metodologia"
            title="Um caminho claro do problema até a solução."
            description="Não começamos desenhando telas ou escrevendo especificações técnicas. Começamos entendendo o negócio — e seguimos um processo estruturado até a solução entrar em operação."
          />
        </Container>
      </section>

      <Methodology />
      <Differentiators />

      <section className="bg-off-white py-16 sm:py-20">
        <Container narrow className="text-center">
          <h2 className="text-2xl font-semibold text-azul-profundo sm:text-3xl">
            Quer passar pela primeira etapa com a gente?
          </h2>
          <div className="mt-7 flex justify-center">
            <Button href="/contato" size="lg" variant="primary">
              Conte seu desafio
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
