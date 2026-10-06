import { Container } from "@/components/ui/Container";

const decisionCriteria = [
  {
    title: "Simplificar antes de automatizar.",
    description:
      "Primeiro retiramos etapas desnecessárias. Só depois decidimos o que vale automatizar.",
  },
  {
    title: "Usar o que já resolve bem.",
    description:
      "Se uma ferramenta pronta atende ao processo, não faz sentido construir outra.",
  },
  {
    title: "Construir para a rotina real.",
    description:
      "Uma solução só funciona quando considera as pessoas, ferramentas e restrições da operação.",
  },
];

export function Differentiators() {
  return (
    <section
      id="criterios"
      className="section-space-generous bg-[var(--color-paper-deep)]"
      aria-labelledby="criterios-heading"
    >
      <Container>
        <div className="editorial-reveal grid gap-7 lg:grid-cols-12 lg:gap-x-8">
          <p className="editorial-kicker lg:col-span-3">
            Critérios de decisão
          </p>
          <h2
            id="criterios-heading"
            className="type-section-title max-w-[62rem] text-balance text-grafite lg:col-span-8 lg:col-start-5"
          >
            Resolver bem é mais importante do que construir mais.
          </h2>
        </div>

        <div className="editorial-rule mt-16 border-t border-[var(--color-border)] lg:mt-24">
          {decisionCriteria.map((criterion, index) => (
            <article
              key={criterion.title}
              className="grid gap-5 border-b border-[var(--color-border)] py-8 sm:grid-cols-12 sm:gap-x-8 sm:py-10 lg:py-12"
            >
              <span className="text-xs font-semibold text-cobre sm:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="type-item-title max-w-[34rem] text-grafite sm:col-span-5 lg:col-start-3">
                {criterion.title}
              </h3>
              <p className="max-w-[30rem] text-sm leading-6 text-grafite/70 sm:col-span-5 sm:text-base sm:leading-7 lg:col-span-4 lg:col-start-9">
                {criterion.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid border-t border-[var(--color-border)] pt-7 sm:mt-16 sm:pt-8 lg:grid-cols-12 lg:gap-x-8">
          <p className="text-xs font-semibold uppercase text-cobre lg:col-span-3">
            Da decisão para a prática
          </p>
          <p className="type-statement mt-4 max-w-[52rem] text-azul-profundo lg:col-span-7 lg:col-start-5 lg:mt-0">
            Boas escolhas precisam aparecer no que realmente entra em operação.
          </p>
        </div>
      </Container>
    </section>
  );
}
