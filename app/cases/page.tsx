import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CasesPlaceholder } from "@/components/sections/CasesPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cases",
  description: "Problemas que viraram soluções — cases da Norte One.",
  alternates: { canonical: "/cases" },
};

export default function CasesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Cases", url: `${siteConfig.url}/cases` },
        ]}
      />

      <section className="bg-azul-profundo pb-16 pt-16 text-off-white sm:pb-20 sm:pt-20">
        <Container>
          <Reveal>
            <SectionHeading
              tone="dark"
              level="h1"
              eyebrow="Cases"
              title="Problemas que viraram soluções."
              description="Esta página está preparada para receber cases reais, autorizados pelos clientes envolvidos. Por enquanto, exibe apenas conteúdo de demonstração."
            />
          </Reveal>
        </Container>
      </section>

      <CasesPlaceholder />
    </>
  );
}
