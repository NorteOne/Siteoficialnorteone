import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig, getWhatsAppLink } from "@/lib/site-config";
import { MessageCircle, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Conte o cenário da sua empresa para a Norte One. A partir daí, entendemos onde a tecnologia pode gerar impacto real na sua operação.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Contato", url: `${siteConfig.url}/contato` },
        ]}
      />
      <section className="bg-azul-profundo pb-14 pt-16 text-off-white sm:pb-20 sm:pt-20">
        <Container narrow className="text-center">
          <Reveal>
            <SectionHeading
              tone="dark"
              level="h1"
              align="center"
              eyebrow="Contato"
              title="Vamos entender o cenário da sua operação."
              description="Conte brevemente o que está acontecendo na sua empresa hoje. Não pedimos orçamento fechado antes de entender o problema — pedimos contexto."
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-off-white py-16 sm:py-20" id="whatsapp">
        <Container narrow>
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_click"
                className="flex items-center gap-3 rounded-[var(--radius-card-md)] border border-[var(--color-border)] bg-white p-5 text-sm font-medium text-grafite transition-colors hover:border-cobre"
              >
                <MessageCircle size={20} className="text-cobre" aria-hidden="true" />
                Prefere WhatsApp? Fale agora mesmo.
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 rounded-[var(--radius-card-md)] border border-[var(--color-border)] bg-white p-5 text-sm font-medium text-grafite transition-colors hover:border-cobre"
              >
                <Mail size={20} className="text-cobre" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
