import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function AboutTeaser() {
  return (
    <section
      id="sobre"
      className="section-space-generous bg-[var(--color-paper-deep)]"
      aria-labelledby="sobre-heading"
      data-whatsapp-hide
    >
      <Container>
        <header className="editorial-reveal grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-x-8">
          <p className="editorial-kicker lg:col-span-3">A empresa por trás do trabalho</p>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 id="sobre-heading" className="type-section-title max-w-[59rem] text-balance text-grafite">
              Responsabilidade direta, do diagnóstico à execução.
            </h2>
          </div>
        </header>
        <div className="mt-14 grid border-t border-[var(--color-border)] pt-8 sm:mt-16 sm:pt-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-8 lg:pt-12">
          <p className="type-statement max-w-[31rem] text-azul-profundo lg:col-span-3">
            Visão de negócio e execução técnica no mesmo trabalho.
          </p>
          <div className="type-lead mt-8 max-w-[46rem] space-y-6 text-grafite/75 lg:col-span-7 lg:col-start-5 lg:mt-0">
            <p>
              A Norte One combina análise da operação e desenvolvimento de
              software para resolver gargalos que limitam o trabalho e o crescimento.
            </p>
            <p>
              Os projetos passam diretamente pela direção da empresa. Quem
              participa do diagnóstico acompanha as principais decisões e a
              construção da solução, com acesso e responsabilidade claros.
            </p>
            <Link href="/sobre#fundador" className="inline-flex min-h-11 items-center text-sm font-semibold text-azul-profundo underline decoration-cobre/60 underline-offset-4 hover:decoration-cobre">
              Conheça quem conduz o trabalho
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
