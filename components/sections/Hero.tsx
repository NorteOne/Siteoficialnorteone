import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-azul-noturno text-off-white">
      <Container className="relative z-10 grid grid-cols-1 gap-y-6 pb-8 pt-8 sm:gap-y-8 sm:pb-10 sm:pt-12 lg:min-h-[calc(100svh-6.5rem)] lg:grid-cols-12 lg:grid-rows-[auto_1fr_auto] lg:gap-x-8 lg:gap-y-10 lg:pb-10 lg:pt-12">
        <div className="lg:col-span-7">
          <p className="editorial-kicker">
            Norte One / Eficiência operacional
          </p>
        </div>

        <div className="self-center lg:col-span-7 lg:row-start-2">
          <h1 className="type-hero max-w-[49rem] text-balance text-off-white">
            <span className="block">Menos gargalos.</span>
            <span className="block">Mais fôlego</span>
            <span className="block">para crescer.</span>
          </h1>
        </div>

        <div className="grid gap-6 sm:gap-7 lg:col-span-7 lg:row-start-3">
          <p className="type-lead max-w-[37rem] text-azul-nevoa/82">
            Unimos negócio, processos e tecnologia para reduzir retrabalho:
            software, automação, integrações e IA onde podem gerar impacto.
          </p>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-7">
            <Button
              href="/contato"
              size="lg"
              variant="accent"
              className="w-full px-4 text-sm min-[375px]:px-7 min-[375px]:text-base sm:w-auto"
              data-event="cta_hero_click"
            >
              {siteConfig.primaryCta}
            </Button>
            <Link href="/solucoes" className="inline-flex min-h-11 items-center text-sm font-semibold text-off-white underline decoration-cobre/60 underline-offset-4 hover:decoration-cobre">
              Entender as soluções
            </Link>
          </div>
          <p className="max-w-[35rem] text-sm leading-6 text-azul-nevoa/75">
            Uma primeira conversa para entender o cenário e identificar uma
            oportunidade real de melhoria.
          </p>
        </div>
      </Container>

      <ArchitecturalMediaPlane />
    </section>
  );
}

function ArchitecturalMediaPlane() {
  return (
    <div
      className="relative z-0 h-36 w-full overflow-hidden bg-azul-profundo-2 max-[374px]:h-28 sm:h-64 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[54%]"
      data-asset-plane="architecture-hero"
      data-object-position="desktop:56% center; tablet:center 55%; mobile:center 58%"
      aria-hidden="true"
    >
      <Image
        src="/images/brand/architecture-hero.webp"
        alt=""
        fill
        preload
        quality={84}
        sizes="(min-width: 1024px) 54vw, 100vw"
        className="object-cover object-[center_58%] sm:object-[center_55%] lg:object-[56%_center]"
      />
      <span className="absolute inset-0 bg-azul-noturno/[0.08]" />
      <span className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-azul-noturno to-transparent max-[374px]:h-8 sm:h-12 lg:hidden" />
      <span className="absolute inset-y-0 left-0 hidden w-[38%] bg-gradient-to-r from-azul-noturno via-azul-noturno/80 to-transparent lg:block" />
    </div>
  );
}
