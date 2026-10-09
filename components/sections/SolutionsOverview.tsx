import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const responsePaths = [
  {
    title: "Simplificar",
    description:
      "Retirar etapas sem valor antes de automatizar ou trocar ferramentas.",
    href: "/solucoes",
  },
  {
    title: "Conectar",
    description:
      "Preservar o que funciona e dar continuidade às informações entre ferramentas.",
    href: "/solucoes/integracoes",
  },
  {
    title: "Automatizar",
    description:
      "Executar etapas previsíveis, mantendo exceções sob responsabilidade da equipe.",
    href: "/solucoes/automacao-de-processos",
  },
  {
    title: "Construir",
    description:
      "Criar uma ferramenta própria somente quando as alternativas não resolvem uma necessidade real.",
    href: "/solucoes/solucoes-sob-medida",
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
              Respostas possíveis
            </p>

            <h2
              id="solucoes-heading"
              className="type-section-title mt-6 max-w-[59rem] text-balance text-grafite"
            >
              A resposta precisa caber na operação.
            </h2>
          </div>

          <div className="lg:col-span-3 lg:col-start-10 lg:flex lg:items-end">
            <p className="type-lead max-w-[30rem] text-grafite/65">
              Primeiro entendemos o problema. Depois avaliamos o caminho de
              menor complexidade que pode resolvê-lo.
            </p>
          </div>
        </div>

        <div className="mt-14 sm:mt-16 lg:mt-20">
          <ul className="editorial-rule border-t border-grafite/15">
            {responsePaths.map((path) => (
              <li
                key={path.title}
                className="border-b border-grafite/15"
              >
                <Link
                  href={path.href}
                  className="group grid gap-3 py-7 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cobre sm:grid-cols-12 sm:items-center sm:gap-x-8 sm:py-8 lg:py-9"
                >
                  <h3 className="type-item-title text-grafite sm:col-span-4">
                    {path.title}
                  </h3>
                  <p className="max-w-[38rem] text-base leading-7 text-grafite/75 sm:col-span-6 sm:col-start-6">
                    {path.description}
                  </p>
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="hidden text-azul-profundo transition-transform group-hover:translate-x-1 sm:col-span-1 sm:col-start-12 sm:block"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
