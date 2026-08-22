import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-azul-profundo pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(216,225,232,0.10), transparent 45%), radial-gradient(circle at 85% 80%, rgba(184,121,69,0.10), transparent 40%)",
        }}
      />
      <Container className="relative max-w-3xl">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-cobre">
            Soluções empresariais apoiadas por tecnologia
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] text-off-white sm:text-5xl lg:text-[3.4rem]">
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contato" size="lg" variant="accent" data-event="cta_hero_click">
              Fale sobre seu desafio
            </Button>
            <Button href="/solucoes" size="lg" variant="ghost">
              Conheça nossas soluções
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
