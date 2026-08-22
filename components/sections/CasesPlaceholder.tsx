import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { cases } from "@/content/cases";

export function CasesPlaceholder() {
  return (
    <section className="bg-off-white py-20 sm:py-24" aria-labelledby="cases-heading">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Cases"
            title="Problemas que viraram soluções."
            description="Estrutura preparada para receber cases reais e autorizados. Os itens abaixo são conteúdo de desenvolvimento e serão substituídos antes da publicação."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cases.map((item, index) => (
            <Reveal key={index} delay={index * 0.06}>
              <Card className="relative">
                {item.isPlaceholder ? (
                  <Badge tone="accent" className="absolute right-6 top-6">
                    Conteúdo de exemplo
                  </Badge>
                ) : null}
                <p className="text-xs font-semibold uppercase tracking-wide text-cobre">
                  {item.segment}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-grafite">{item.company}</h3>
                <dl className="mt-4 space-y-3 text-sm leading-relaxed text-cinza-pedra">
                  <div>
                    <dt className="font-medium text-grafite">Cenário</dt>
                    <dd>{item.scenario}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-grafite">Problema</dt>
                    <dd>{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-grafite">Solução</dt>
                    <dd>{item.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-grafite">Impacto</dt>
                    <dd>{item.impact}</dd>
                  </div>
                </dl>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
