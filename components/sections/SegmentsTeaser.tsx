import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { segments } from "@/content/segments";

export function SegmentsTeaser() {
  const core = segments.filter((segment) => segment.tier === "core");

  return (
    <section className="bg-azul-profundo py-20 text-off-white sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Segmentos"
            title="Tecnologia adaptada à realidade de cada operação."
            description="Trabalhamos com empresas de diferentes segmentos, sempre partindo da mesma pergunta: como a operação funciona hoje, e onde a tecnologia pode gerar impacto real."
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {core.map((segment, index) => (
            <Reveal key={segment.name} delay={index * 0.04}>
              <Badge tone="dark">{segment.name}</Badge>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <Button href="/segmentos" variant="ghost">
              Ver todos os segmentos
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
