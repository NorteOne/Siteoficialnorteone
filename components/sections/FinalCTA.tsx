import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-azul-profundo py-14 text-off-white sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(184,121,69,0.12), transparent 55%)",
        }}
      />
      <Container narrow className="relative text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            Qual problema da sua empresa deveríamos resolver primeiro?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-azul-nevoa/90 sm:text-lg">
            Conte brevemente o cenário da sua operação. A partir daí, podemos
            entender onde a tecnologia realmente pode gerar impacto.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contato" size="lg" variant="accent" data-event="cta_final_click">
              Falar com a Norte One
            </Button>
            <Button href="/contato#whatsapp" size="lg" variant="ghost">
              WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
