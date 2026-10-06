import { Container } from "@/components/ui/Container";

const reasoning = [
  {
    number: "01",
    label: "O problema",
    description:
      "Atendimento, agenda, informações e relacionamento aconteciam separados. A equipe compensava essa fragmentação com trabalho manual e memória operacional.",
  },
  {
    number: "02",
    label: "A leitura",
    description:
      "Não era um problema isolado de WhatsApp ou CRM, mas de continuidade entre os momentos da jornada do paciente.",
  },
  {
    number: "03",
    label: "A decisão",
    description:
      "A resposta precisava conectar esses momentos em um mesmo fluxo, preservando o contexto e o controle da equipe.",
  },
];

const connectedMoments = [
  "Atendimento",
  "Agenda",
  "Histórico",
  "Relacionamento",
];

export function SelectedWork() {
  return (
    <section
      id="trabalhos"
      className="section-space-generous bg-azul-profundo text-off-white"
      aria-labelledby="trabalhos-heading"
    >
      <Container>
        <header className="editorial-reveal grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-x-8">
          <p className="editorial-kicker lg:col-span-3">
            Trabalho selecionado
          </p>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2
              id="trabalhos-heading"
              className="type-section-title max-w-[57rem] text-balance"
            >
              Um problema operacional transformado em produto.
            </h2>
            <p className="type-lead mt-7 max-w-[43rem] text-azul-nevoa/80">
              Em uma clínica, atendimento, agenda, informações e acompanhamento
              pertencem à mesma jornada. Quando cada etapa funciona isolada, a
              equipe precisa reconstruir essa continuidade manualmente.
            </p>
          </div>
        </header>

        <article
          className="editorial-rule mt-16 grid border-t border-[var(--color-border-on-dark)] lg:mt-24 lg:grid-cols-12 lg:gap-x-8"
          aria-labelledby="norsey-heading"
        >
          <ol className="lg:col-span-7">
            {reasoning.map((step) => (
              <li
                key={step.number}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-[var(--color-border-on-dark)] py-8 sm:grid-cols-[3.5rem_9rem_1fr] sm:gap-x-6 sm:py-10 lg:min-h-[13rem] lg:py-12"
              >
                <span className="text-xs font-semibold text-cobre">
                  {step.number}
                </span>
                <h3 className="type-item-title">
                  {step.label}
                </h3>
                <p className="col-span-2 mt-4 max-w-[31rem] text-sm leading-6 text-azul-nevoa/75 sm:col-span-1 sm:mt-0 sm:text-base sm:leading-7">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="relative py-12 lg:col-span-5 lg:border-l lg:border-[var(--color-border-on-dark)] lg:py-12 lg:pl-10 xl:pl-14">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase text-cobre">
                04 / Produto Norte One
              </p>
              <h3
                id="norsey-heading"
                className="type-product-title mt-6"
              >
                Norsey
              </h3>
              <p className="type-lead mt-6 max-w-[30rem] text-azul-nevoa/85">
                Dessa leitura surgiu um produto que conecta o atendimento via
                WhatsApp à agenda, ao CRM e ao relacionamento com pacientes,
                dando continuidade à operação da clínica.
              </p>
              <p className="mt-5 max-w-[30rem] text-sm leading-6 text-azul-nevoa/65 sm:text-base sm:leading-7">
                A IA entra como apoio ao atendimento e às tarefas repetitivas
                dentro desse fluxo, sem retirar da equipe o controle da
                operação.
              </p>

              <ol
                className="mt-10 border-t border-[var(--color-border-on-dark)] sm:mt-12"
                aria-label="Momentos conectados pela Norsey"
              >
                {connectedMoments.map((moment) => (
                  <li
                    key={moment}
                    className="relative grid min-h-12 grid-cols-[1rem_1fr] items-center gap-3 border-b border-[var(--color-border-on-dark)] py-3.5"
                  >
                    <span
                      className="block size-1.5 rounded-full bg-cobre"
                      aria-hidden="true"
                    />
                    <span className="text-xs font-medium text-azul-nevoa/80">
                      {moment}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
