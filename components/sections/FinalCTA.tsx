import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="section-space-generous bg-azul-noturno text-off-white"
      aria-labelledby="cta-final-heading"
    >
      <Container>
        <p className="editorial-kicker">
          A conversa começa pelo contexto
        </p>
        <h2
          id="cta-final-heading"
          className="mt-8 max-w-[72rem] text-balance font-display text-[2.75rem] font-bold leading-[1.06] sm:text-[4rem] lg:text-[5.5rem]"
        >
          Existe algo na sua empresa que poderia funcionar melhor?
        </h2>

        <div className="mt-12 grid border-t border-[var(--color-border-on-dark)] pt-8 sm:mt-16 sm:pt-10 lg:grid-cols-12 lg:gap-x-8 lg:pt-12">
          <p className="max-w-[39rem] text-base leading-7 text-azul-nevoa/80 sm:text-lg sm:leading-8 lg:col-span-6">
            Conte o que está acontecendo na sua operação. Antes de propor uma
            resposta, precisamos entender o contexto.
          </p>
          <div className="mt-8 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:flex lg:justify-end">
            <Button
              href="/contato"
              size="lg"
              variant="accent"
              className="w-full min-[375px]:w-auto"
              data-event="cta_final_click"
            >
              Conversar sobre um problema
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
