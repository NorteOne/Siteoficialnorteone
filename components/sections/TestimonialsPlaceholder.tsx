import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { differentiators } from "@/content/differentiators";
import { ShieldCheck } from "lucide-react";

/**
 * Nenhum depoimento real foi fornecido até o momento. Em vez de inventar
 * prova social, esta seção reforça princípios e capacidade de execução.
 * Estrutura pronta para ser substituída por depoimentos reais no futuro.
 */
export function TestimonialsPlaceholder() {
  return (
    <section className="bg-azul-profundo py-20 text-off-white sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Princípios"
            title="O que orienta cada projeto da Norte One."
            description="Ainda não publicamos depoimentos de clientes. Preferimos ser claros sobre os princípios que guiam o nosso trabalho a apresentar prova social que não possa ser verificada."
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {differentiators.slice(0, 4).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="flex items-start gap-4 rounded-[var(--radius-card-md)] border border-[var(--color-border-on-dark)] bg-white/5 p-5">
                <ShieldCheck size={20} className="mt-0.5 shrink-0 text-cobre" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-off-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-azul-nevoa/80">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
