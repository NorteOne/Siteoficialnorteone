import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  "Entendemos a operação da empresa",
  "Identificamos os gargalos reais",
  "Estruturamos possibilidades de solução",
  "Usamos tecnologia onde ela realmente gera impacto",
  "Desenvolvemos ou integramos a solução",
  "Acompanhamos a evolução dos resultados",
];

export function Positioning() {
  return (
    <section className="bg-off-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Como pensamos"
            title="Não começamos pela tecnologia. Começamos pelo problema."
            description="Antes de falar em sistemas, automações ou integrações, buscamos entender o que está travando a operação da sua empresa. A tecnologia entra depois — como caminho, não como ponto de partida."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-[var(--radius-card-md)] border border-[var(--color-border)] bg-white p-4 sm:p-5"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-azul-profundo text-sm font-semibold text-off-white">
                  {index + 1}
                </span>
                <span className="pt-1 text-base leading-relaxed text-grafite">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
