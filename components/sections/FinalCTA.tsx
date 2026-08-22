import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section className="bg-azul-profundo py-20 text-off-white sm:py-24">
      <Container narrow className="text-center">
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
