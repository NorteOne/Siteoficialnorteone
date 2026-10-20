import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const responsePaths = [
  {
    title: "Uma rotina que a equipe consegue acompanhar",
    description:
      "Etapas, responsáveis e próximos passos claros reduzem espera e ajudam a distribuir o trabalho. A melhoria começa pela organização do processo.",
    href: "/solucoes",
  },
  {
    title: "Menos tempo gasto com tarefas repetitivas",
    description:
      "Registros, encaminhamentos e alertas previsíveis podem acontecer automaticamente, liberando a equipe para tratar clientes e exceções.",
    href: "/solucoes/automacao-de-processos",
  },
  {
    title: "Informação que flui entre sistemas",
    description:
      "Integrações levam os dados à próxima etapa sem copiar tudo de novo. A equipe trabalha com informações mais consistentes.",
    href: "/solucoes/integracoes",
  },
  {
    title: "Cada contato com um próximo passo",
    description:
      "Atendimento organizado, histórico acessível e acompanhamento dão continuidade às conversas. Automação e IA apoiam o fluxo com controle da equipe.",
    href: "/solucoes#atendimento-inteligente",
  },
  {
    title: "Um sistema que acompanha seu modo de operar",
    description:
      "Software sob medida organiza fluxos específicos que ferramentas genéricas não atendem bem, reduzindo a dependência de controles paralelos.",
    href: "/solucoes/solucoes-sob-medida",
  },
];

export function SolutionsOverview() {
  return (
    <section id="solucoes" aria-labelledby="solucoes-heading" className="section-space-generous bg-[var(--color-paper)]">
      <Container>
        <div className="editorial-reveal grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-8">
            <p className="editorial-kicker">A operação que você quer construir</p>
            <h2 id="solucoes-heading" className="type-section-title mt-6 max-w-[59rem] text-balance text-grafite">
              Mais fluidez para trabalhar. Mais clareza para crescer.
            </h2>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:flex lg:items-end">
            <p className="type-lead max-w-[30rem] text-grafite/70">
              Melhorias concretas na rotina criam capacidade. Escolhemos e
              implementamos o mecanismo adequado a cada gargalo.
            </p>
          </div>
        </div>
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <ul className="editorial-rule border-t border-grafite/15">
            {responsePaths.map((path) => (
              <li key={path.title} className="border-b border-grafite/15">
                <Link
                  href={path.href}
                  className="group grid gap-3 py-7 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cobre sm:grid-cols-12 sm:items-center sm:gap-x-8 sm:py-8 lg:py-9"
                >
                  <h3 className="type-item-title text-grafite sm:col-span-4">{path.title}</h3>
                  <p className="max-w-[38rem] text-base leading-7 text-grafite/75 sm:col-span-6 sm:col-start-6">
                    {path.description}
                  </p>
                  <ArrowRight size={18} aria-hidden="true" className="hidden text-azul-profundo transition-transform group-hover:translate-x-1 sm:col-span-1 sm:col-start-12 sm:block" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
