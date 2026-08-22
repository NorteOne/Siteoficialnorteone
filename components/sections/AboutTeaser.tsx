import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function AboutTeaser() {
  return (
    <section className="bg-off-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Sobre a Norte One"
            title="Tecnologia construída com visão de negócio."
            description="A Norte One existe para aproximar a tecnologia da realidade operacional das empresas. Unimos entendimento de negócio, capacidade técnica e acompanhamento contínuo para transformar desafios em soluções que funcionam no dia a dia."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Button href="/sobre" variant="secondary" size="lg">
            Conhecer a Norte One
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
