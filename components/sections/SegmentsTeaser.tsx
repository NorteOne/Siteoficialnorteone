import { Container } from "@/components/ui/Container";

const operationalContexts = [
  {
    title: "Atendimento que precisa de continuidade",
    description:
      "Conversas, agenda, acompanhamento e relacionamento precisam compartilhar contexto para que nada se perca pelo caminho.",
  },
  {
    title: "Processos ainda manuais",
    description:
      "Tarefas importantes dependem de planilhas, mensagens, conferências e ações que se repetem todos os dias.",
  },
  {
    title: "Ferramentas desconectadas",
    description:
      "A empresa já usa sistemas, mas as pessoas ainda movem informação manualmente de um lugar para outro.",
  },
  {
    title: "Crescimento operacional",
    description:
      "O volume aumentou mais rápido do que os processos, as responsabilidades e os controles.",
  },
];

export function SegmentsTeaser() {
  return (
    <section
      id="contextos"
      className="section-space bg-azul-noturno text-off-white"
      aria-labelledby="contextos-heading"
    >
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5 lg:flex lg:flex-col">
          <div>
            <p className="editorial-kicker">
              Contextos de operação
            </p>
            <h2
              id="contextos-heading"
              className="type-section-title mt-6 max-w-[39rem] text-balance"
            >
              Os setores mudam. Alguns desafios se repetem.
            </h2>
            <p className="type-lead mt-7 max-w-[32rem] text-azul-nevoa/80">
              Não é o nome do mercado que define onde podemos ajudar. É a forma
              como a operação funciona e onde ela perde ritmo.
            </p>
          </div>

          <aside className="mt-12 border-l border-cobre pl-5 lg:mt-auto lg:max-w-[30rem]">
            <p className="text-xs font-semibold uppercase text-cobre">
              Um contexto em foco
            </p>
            <p className="mt-3 text-sm leading-6 text-azul-nevoa/80 sm:text-base sm:leading-7">
              Operações de saúde e clínicas são um contexto de atenção da Norte
              One. Nelas, atendimento, agenda, relacionamento e informação
              precisam funcionar de forma coordenada.
            </p>
          </aside>
        </div>

        <ul className="editorial-rule border-t border-[var(--color-border-on-dark)] lg:col-span-6 lg:col-start-7">
          {operationalContexts.map((context) => (
            <li
              key={context.title}
              className="border-b border-[var(--color-border-on-dark)] py-8 sm:py-10 lg:py-12"
            >
              <h3 className="type-item-title max-w-[36rem]">
                {context.title}
              </h3>
              <p className="mt-3 max-w-[35rem] text-sm leading-6 text-azul-nevoa/75 sm:text-base sm:leading-7">
                {context.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
