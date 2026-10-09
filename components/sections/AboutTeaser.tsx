import Image from "next/image";
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
          <div className="type-lead mt-8 max-w-[46rem] text-grafite/75 lg:col-span-7 lg:col-start-5 lg:mt-0">
            <p>
              A proximidade entre diagnóstico, decisão e execução começa por
              entender como a empresa funciona, onde perde continuidade e o
              que precisa mudar.
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-[var(--color-border)] pt-6">
              <Image
                src="/images/founder/fabio-campos-magalhaes-desktop.webp"
                alt=""
                width={96}
                height={96}
                sizes="64px"
                className="size-16 shrink-0 object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-azul-profundo">
                  Fábio Campos Magalhães
                </p>
                <p className="mt-1 text-sm text-grafite/65">
                  Fundador da Norte One
                </p>
                <Link
                  href="/sobre#fundador"
                  className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-azul-profundo underline underline-offset-4 hover:text-cobre-ink"
                >
                  Conheça quem conduz o trabalho
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
