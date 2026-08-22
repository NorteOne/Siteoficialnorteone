import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { solutions } from "@/content/solutions";

export function SolutionsOverview() {
  return (
    <section className="bg-off-white py-20 sm:py-24" id="solucoes" aria-labelledby="solucoes-heading">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Frentes de atuação"
            title="Soluções para empresas que precisam operar melhor."
            description="Cada frente existe para resolver um tipo de desafio operacional — não para vender uma tecnologia específica."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Reveal key={solution.slug} delay={index * 0.05}>
                <Link href={`/solucoes/${solution.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-card-sm)] bg-azul-nevoa/60 text-azul-profundo">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <span className="text-xs font-semibold text-cobre">{solution.code}</span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-grafite">{solution.name}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-cinza-pedra">
                      {solution.shortDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-profundo transition-transform duration-200 group-hover:translate-x-1">
                      Ver solução
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
