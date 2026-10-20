import { Container } from "@/components/ui/Container";

const problemObservations = [
  {
    number: "01",
    category: "Dependência",
    statement: "O trabalho para quando uma pessoa não está.",
    consequence:
      "Conhecimento e decisões concentrados limitam a autonomia da equipe e tornam cada ausência um risco para prazos e clientes.",
  },
  {
    number: "02",
    category: "Retrabalho",
    statement: "Sua equipe copia e confere os mesmos dados.",
    consequence:
      "Tarefas repetitivas ocupam horas que poderiam ir para clientes, análise e execução. Cada cópia também abre espaço para erros.",
  },
  {
    number: "03",
    category: "Informação",
    statement: "Você tem dados, mas precisa juntá-los para decidir.",
    consequence:
      "Planilhas, conversas e sistemas guardam versões diferentes. Decisões ficam mais lentas e desvios são percebidos tarde.",
  },
  {
    number: "04",
    category: "Atendimento",
    statement: "Clientes esperam. Contatos ficam sem próximo passo.",
    consequence:
      "Sem distribuição e acompanhamento claros, a equipe perde contexto e oportunidades comerciais podem deixar de avançar.",
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
              Reconhece alguma dessas situações?
            </p>
            <h2
              id="problemas-heading"
              className="type-section-title mt-6 max-w-[52rem] text-balance"
            >
              Gargalos aparecem na rotina antes de aparecer no resultado.
            </h2>
          </div>

          <p className="type-lead max-w-[32rem] self-end text-azul-nevoa/85 lg:col-span-4 lg:col-start-9">
            Isolados, esses problemas parecem pequenos. Repetidos todos os
            dias, consomem tempo, capacidade e oportunidades de negócio.
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
              <h3 className="type-item-title col-span-2 max-w-[38rem] sm:col-start-2 lg:col-span-5 lg:col-start-4">
                {problem.statement}
              </h3>
              <p className="col-span-2 max-w-[30rem] text-sm leading-6 text-azul-nevoa/75 sm:col-start-2 sm:text-base sm:leading-7 lg:col-span-4 lg:col-start-9">
                {problem.consequence}
              </p>
            </li>
          ))}
        </ol>
        <aside className="mt-12 border-t border-[var(--color-border-on-dark)] pt-8 sm:mt-16">
          <p className="editorial-kicker">O custo de deixar como está</p>
          <h3 className="type-item-title mt-5 max-w-[48rem]">
            O gargalo não fica do mesmo tamanho quando a empresa cresce.
          </h3>
          <p className="mt-4 max-w-[49rem] text-base leading-7 text-azul-nevoa/80">
            Aumentar a demanda sem ajustar o processo pode ampliar o retrabalho,
            a espera e a dependência de pessoas-chave. Investigar o impacto
            ajuda a decidir o que merece mudar agora.
          </p>
        </aside>
      </Container>
    </section>
  );
}
