import { Container } from "@/components/ui/Container";

export function AboutTeaser() {
  return (
    <section
      id="sobre"
      className="section-space-generous bg-[var(--color-paper-deep)]"
      aria-labelledby="sobre-heading"
    >
      <Container>
        <header className="editorial-reveal grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-x-8">
          <p className="editorial-kicker lg:col-span-3">
            A empresa por trás do trabalho
          </p>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2
              id="sobre-heading"
              className="type-section-title max-w-[59rem] text-balance text-grafite"
            >
              Trabalhar perto do problema muda a qualidade da resposta.
            </h2>
          </div>
        </header>

        <div className="mt-14 grid border-t border-[var(--color-border)] pt-8 sm:mt-16 sm:pt-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-8 lg:pt-12">
          <p className="type-statement max-w-[31rem] text-azul-profundo lg:col-span-3">
            A Norte One trabalha do diagnóstico à execução.
          </p>

          <div className="type-lead mt-8 max-w-[46rem] space-y-6 text-grafite/75 lg:col-span-7 lg:col-start-5 lg:mt-0">
            <p>
              Nosso trabalho começa na realidade do negócio: como as pessoas
              trabalham, onde há perda de continuidade e o que precisa mudar.
            </p>
            <p>
              A resposta pode simplificar um processo, conectar o que já existe
              ou adotar uma solução pronta. Quando construir é necessário, o
              mesmo critério acompanha o trabalho até a prática.
            </p>
            <p>
              Esse critério mantém diagnóstico, decisão e execução conectados,
              reduzindo a distância entre o problema apresentado e a resposta
              colocada em prática.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
