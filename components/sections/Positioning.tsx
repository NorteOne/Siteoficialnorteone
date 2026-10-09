import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

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
            <Link
              href="/como-trabalhamos"
              className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-azul-profundo underline decoration-cobre/60 underline-offset-4 transition-colors hover:decoration-cobre focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobre"
            >
              Veja como trabalhamos
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <aside className="border-t border-[var(--color-border)] pt-6 lg:col-span-4 lg:col-start-9">
            <p className="text-xs font-semibold uppercase text-cobre-ink">
              Independência tecnológica
            </p>
            <p className="type-statement mt-4 text-azul-profundo">
              Se uma nova ferramenta não for necessária, essa também é uma boa decisão.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
