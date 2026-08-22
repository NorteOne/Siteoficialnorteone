import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroComposition } from "@/components/graphics/HeroComposition";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-azul-profundo pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(216,225,232,0.10), transparent 45%), radial-gradient(circle at 85% 80%, rgba(184,121,69,0.10), transparent 40%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-cobre">
              Soluções empresariais apoiadas por tecnologia
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] text-off-white sm:text-5xl lg:text-[3.4rem]">
              Transformamos desafios empresariais em soluções digitais.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-azul-nevoa/90 sm:text-lg">
              A Norte One une visão de negócio e tecnologia para estruturar
              processos, automatizar operações e desenvolver soluções sob
              medida para empresas.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contato" size="lg" variant="accent" data-event="cta_hero_click">
                Fale sobre seu desafio
              </Button>
              <Button href="/solucoes" size="lg" variant="ghost">
                Conheça nossas soluções
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-sm text-azul-nevoa/70">
              Soluções pensadas a partir da realidade de cada negócio.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-square w-full">
            <HeroComposition />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
