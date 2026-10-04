import { Container } from "@/components/ui/Container";

const problemObservations = [
  {
    number: "01",
    category: "Dependência",
    statement: "A operação depende de quem sabe como tudo funciona.",
    consequence:
      "Quando conhecimento e decisões ficam concentrados, a continuidade do trabalho se torna frágil.",
  },
  {
    number: "02",
    category: "Retrabalho",
    statement: "O mesmo trabalho é feito mais de uma vez.",
    consequence:
      "Planilhas, mensagens e conferências manuais consomem tempo e aumentam a chance de erro.",
  },
  {
    number: "03",
    category: "Informação",
    statement: "A informação existe, mas continua espalhada.",
    consequence:
      "A equipe reconstrói o contexto entre ferramentas e pessoas antes de conseguir agir.",
  },
  {
    number: "04",
    category: "Crescimento",
    statement: "A empresa cresceu, mas os processos não acompanharam.",
    consequence:
      "O que antes era simples começa a gerar atrasos, improviso e pouca visibilidade.",
  },
];

export function Problems() {
  return (
    <section
      id="problemas"
      className="section-space bg-azul-profundo text-off-white"
      aria-labelledby="problemas-heading"
    >
      <Container>
        <div className="editorial-reveal grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-7">
            <p className="editorial-kicker">
              Onde a operação perde ritmo
            </p>
            <h2
              id="problemas-heading"
              className="mt-6 max-w-[52rem] text-balance font-display text-[2.5rem] font-semibold leading-[1.08] sm:text-[3.5rem] lg:text-[4.5rem]"
            >
              O que limita uma empresa nem sempre parece urgente.
            </h2>
          </div>

          <p className="max-w-[32rem] self-end text-base leading-7 text-azul-nevoa/85 sm:text-lg sm:leading-8 lg:col-span-4 lg:col-start-9">
            Os sinais aparecem no tempo perdido, no retrabalho e no esforço
            necessário para manter a rotina funcionando.
          </p>
        </div>

        <ol className="editorial-rule mt-14 border-t border-[var(--color-border-on-dark)] sm:mt-16 lg:mt-20">
          {problemObservations.map((problem) => (
            <li
              key={problem.number}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-5 border-b border-[var(--color-border-on-dark)] py-8 sm:grid-cols-[3rem_1fr] sm:gap-x-6 sm:py-10 lg:grid-cols-12 lg:items-start lg:gap-x-8 lg:py-12"
            >
              <span className="text-xs font-semibold text-cobre lg:col-span-1">
                {problem.number}
              </span>
              <p className="text-xs font-semibold uppercase text-azul-nevoa/70 lg:col-span-2">
                {problem.category}
              </p>
              <h3 className="col-span-2 max-w-[38rem] font-display text-[1.5rem] font-semibold leading-[1.2] sm:col-start-2 sm:text-[1.8rem] lg:col-span-5 lg:col-start-4 lg:text-[2rem]">
                {problem.statement}
              </h3>
              <p className="col-span-2 max-w-[30rem] text-sm leading-6 text-azul-nevoa/75 sm:col-start-2 sm:text-base sm:leading-7 lg:col-span-4 lg:col-start-9">
                {problem.consequence}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
