import { Container } from "@/components/ui/Container";

const capabilities = [
  {
    title: "Operação",
    description:
      "Organizar processos, informações e responsabilidades para reduzir atrito no trabalho diário.",
  },
  {
    title: "Eficiência",
    description:
      "Eliminar tarefas repetitivas, retrabalho e etapas que não precisam depender de pessoas.",
  },
  {
    title: "Conexão",
    description:
      "Fazer ferramentas, dados e equipes que hoje trabalham separadas funcionarem melhor juntas.",
  },
  {
    title: "Decisão",
    description:
      "Transformar informação disponível em clareza para acompanhar a operação e decidir.",
  },
  {
    title: "Relacionamento",
    description:
      "Dar continuidade ao atendimento e ao acompanhamento de clientes sem perder contexto pelo caminho.",
  },
  {
    title: "Ferramentas adequadas",
    description:
      "Quando nenhuma solução existente atende bem ao processo, desenhar e construir a ferramenta necessária.",
  },
];

export function SolutionsOverview() {
  return (
    <section
      id="solucoes"
      aria-labelledby="solucoes-heading"
      className="section-space-generous bg-[var(--color-paper)]"
    >
      <Container>
        {/* Abertura editorial */}
        <div className="editorial-reveal grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-8">
            <p className="editorial-kicker">
              Áreas de atuação
            </p>

            <h2
              id="solucoes-heading"
              className="mt-6 max-w-[59rem] text-balance font-display text-[2.5rem] font-semibold leading-[1.08] text-grafite sm:text-[3.5rem] lg:text-[4.75rem]"
            >
              Melhoramos a operação onde ela mais precisa avançar.
            </h2>
          </div>

          <div className="lg:col-span-3 lg:col-start-10 lg:flex lg:items-end">
            <p className="max-w-[30rem] text-base leading-7 text-grafite/65 sm:text-lg sm:leading-8">
              A necessidade vem primeiro. A resposta pode reorganizar um
              processo, conectar informações ou exigir uma ferramenta própria.
            </p>
          </div>
        </div>

        {/* Lista aberta — sem cards */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <ul className="editorial-rule border-t border-grafite/15">
            {capabilities.map((capability) => (
              <li
                key={capability.title}
                className="grid grid-cols-1 gap-y-4 border-b border-grafite/15 py-8 sm:py-10 lg:grid-cols-12 lg:gap-x-8 lg:py-12"
              >
                <div className="lg:col-span-4">
                  <h3 className="font-display text-[1.75rem] font-semibold leading-[1.15] text-grafite sm:text-[2.1rem] lg:text-[2.5rem]">
                    {capability.title}
                  </h3>
                </div>

                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="max-w-[38rem] text-base leading-7 text-grafite/68 sm:text-lg sm:leading-8">
                    {capability.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Fechamento conceitual */}
        <div className="mt-16 border-t border-grafite/15 pt-8 sm:mt-20 sm:pt-10 lg:mt-28 lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase text-cobre sm:text-sm">
              Tecnologia, quando necessária
            </p>
          </div>

          <div className="mt-5 lg:col-span-7 lg:col-start-5 lg:mt-0">
            <p className="max-w-[55rem] font-display text-[1.6rem] font-semibold leading-[1.3] text-azul-profundo sm:text-[2rem] lg:text-[2.5rem]">
              Software, automação, integrações, dados e IA entram apenas quando
              ajudam a resolver uma necessidade já compreendida.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
