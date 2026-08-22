import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Target, Wrench, LineChart } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Entendemos antes de propor",
    description: "Nenhuma solução é sugerida antes de conhecermos a operação.",
  },
  {
    icon: Wrench,
    title: "Tecnologia como caminho",
    description: "A ferramenta certa depende do problema, nunca o contrário.",
  },
  {
    icon: LineChart,
    title: "Resultado acompanhado de perto",
    description: "Seguimos com a operação até o impacto aparecer no dia a dia.",
  },
];

export function Positioning() {
  return (
    <section className="bg-off-white py-14 sm:py-20 lg:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Como pensamos"
            title="Não começamos pela tecnologia. Começamos pelo problema."
            description="Antes de falar em sistemas, automações ou integrações, buscamos entender o que está travando a operação da sua empresa. A tecnologia entra depois — como caminho, não como ponto de partida."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex items-start gap-4 rounded-[var(--radius-card-md)] border border-[var(--color-border)] bg-white p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azul-profundo text-off-white">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-grafite">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cinza-pedra">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
