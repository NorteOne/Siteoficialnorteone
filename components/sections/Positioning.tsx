import { Container } from "@/components/ui/Container";

const thinkingSteps = [
  {
    number: "01",
    title: "Entender",
    description:
      "Observar como a empresa funciona, o que mudou e onde a operação perde ritmo.",
  },
  {
    number: "02",
    title: "Diagnosticar",
    description:
      "Separar sintomas de causas e definir o que realmente precisa melhorar.",
  },
  {
    number: "03",
    title: "Desenhar",
    description:
      "Organizar uma resposta adequada ao processo, às pessoas e ao momento da empresa.",
  },
  {
    number: "04",
    title: "Construir",
    description:
      "Transformar a direção escolhida em uma solução aplicável ao trabalho real.",
  },
  {
    number: "05",
    title: "Integrar",
    description:
      "Conectar a solução à rotina, às ferramentas e às equipes que já existem.",
  },
  {
    number: "06",
    title: "Medir",
    description:
      "Acompanhar o efeito na operação e ajustar o que ainda limita o resultado.",
  },
];

export function Positioning() {
  return (
    <section
      id="como-pensamos"
      className="section-space-generous scroll-mt-[4.5rem] bg-[var(--color-paper)] sm:scroll-mt-20 lg:scroll-mt-[5.5rem]"
      aria-labelledby="como-pensamos-heading"
    >
      <Container>
        <div className="editorial-reveal grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <div className="lg:col-span-7">
            <p className="editorial-kicker">
              Como pensamos
            </p>
            <h2
              id="como-pensamos-heading"
              className="type-section-title mt-6 max-w-[55rem] text-balance text-grafite"
            >
              Não começamos pela tecnologia.
              <span className="block">Começamos pela operação.</span>
            </h2>
            <p className="type-lead mt-7 max-w-[40rem] text-grafite/70">
              Antes de propor qualquer ferramenta, entendemos como o trabalho
              acontece, onde a operação perde eficiência e o que precisa mudar
              para a empresa avançar com mais clareza.
            </p>
          </div>

          <aside className="border-t border-[var(--color-border)] pt-6 lg:col-span-4 lg:col-start-9">
            <p className="text-xs font-semibold uppercase text-cobre">
              Independência tecnológica
            </p>
            <p className="type-statement mt-4 text-azul-profundo">
              Se uma nova ferramenta não for necessária, essa também é uma boa decisão.
            </p>
          </aside>
        </div>

        <ol className="mt-14 grid border-t border-[var(--color-border)] sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          {thinkingSteps.map((step) => (
            <li
              key={step.number}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-[var(--color-border)] py-7 sm:grid-cols-[3.5rem_1fr] sm:py-9"
            >
              <span className="text-xs font-semibold text-cobre">{step.number}</span>
              <h3 className="type-item-title text-grafite">
                {step.title}
              </h3>
              <p className="col-start-2 mt-4 max-w-[29rem] text-sm leading-6 text-grafite/70 sm:text-base sm:leading-7">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
