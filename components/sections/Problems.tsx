import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { problems } from "@/content/problems";
import { CircleAlert } from "lucide-react";

export function Problems() {
  return (
    <section className="bg-azul-nevoa/40 py-14 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Ponto de partida"
            title="Algum desses problemas parece familiar?"
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <Reveal key={problem.text} delay={index * 0.04}>
              <div className="flex h-full items-start gap-3 rounded-[var(--radius-card-md)] border border-[var(--color-border)] bg-white p-5">
                <CircleAlert
                  size={20}
                  className="mt-0.5 shrink-0 text-cobre"
                  aria-hidden="true"
                />
                <p className="text-base leading-relaxed text-grafite">{problem.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="text-xl font-semibold text-azul-profundo sm:text-2xl">
              É a partir daqui que a Norte One começa.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contato" size="lg" variant="primary" data-event="cta_problems_click">
                Conte seu desafio
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
