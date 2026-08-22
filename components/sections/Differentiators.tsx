import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { differentiators } from "@/content/differentiators";

export function Differentiators() {
  return (
    <section className="bg-azul-nevoa/30 py-14 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Diferenciais"
            title="O que muda na forma como trabalhamos."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-[var(--radius-card-md)] border border-[var(--color-border)] bg-white p-6">
                <span className="mb-4 block h-1 w-10 rounded-full bg-cobre" aria-hidden="true" />
                <h3 className="text-base font-semibold text-grafite">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cinza-pedra">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
