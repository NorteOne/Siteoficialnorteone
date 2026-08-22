import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { solutions, getSolutionBySlug } from "@/content/solutions";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  return {
    title: solution.name,
    description: solution.shortDescription,
    alternates: { canonical: `/solucoes/${solution.slug}` },
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const Icon = solution.icon;
  const others = solutions.filter((item) => item.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          { name: "Soluções", url: `${siteConfig.url}/solucoes` },
          { name: solution.name, url: `${siteConfig.url}/solucoes/${solution.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={solution.name}
        description={solution.shortDescription}
        url={`${siteConfig.url}/solucoes/${solution.slug}`}
      />

      <section className="bg-azul-profundo pb-16 pt-16 text-off-white sm:pb-20 sm:pt-20">
        <Container>
          <Reveal>
            <Link
              href="/solucoes"
              className="mb-6 inline-block text-sm text-azul-nevoa/70 hover:text-off-white"
            >
              ← Todas as soluções
            </Link>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-card-md)] bg-white/10">
                <Icon size={26} aria-hidden="true" className="text-cobre" />
              </span>
              <span className="text-sm font-semibold text-cobre">{solution.code}</span>
            </div>
            <SectionHeading
              tone="dark"
              level="h1"
              className="mt-6"
              title={solution.name}
              description={solution.description}
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-off-white py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div>
              <h2 className="text-lg font-semibold text-azul-profundo">
                O problema que resolvemos
              </h2>
              <p className="mt-3 text-base leading-relaxed text-grafite">
                {solution.problem}
              </p>

              <h2 className="mt-10 text-lg font-semibold text-azul-profundo">
                Para quem é essa frente
              </h2>
              <p className="mt-3 text-base leading-relaxed text-grafite">
                {solution.forWhom}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[var(--radius-card-lg)] border border-[var(--color-border)] bg-azul-nevoa/30 p-6 sm:p-7">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-azul-profundo">
                Benefícios
              </h2>
              <ul className="mt-4 space-y-3">
                {solution.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-cobre" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-grafite">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contato" variant="primary" className="mt-7 w-full" data-event="solution_view">
                Falar sobre esse desafio
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-azul-nevoa/20 py-16 sm:py-20">
        <Container>
          <Reveal>
            <h2 className="text-xl font-semibold text-azul-profundo">Outras frentes</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {others.map((item, index) => {
              const OtherIcon = item.icon;
              return (
                <Reveal key={item.slug} delay={index * 0.05}>
                  <Link href={`/solucoes/${item.slug}`} className="group block h-full">
                    <Card className="flex h-full flex-col">
                      <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-card-sm)] bg-azul-nevoa/60 text-azul-profundo">
                        <OtherIcon size={20} aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 text-base font-semibold text-grafite">{item.name}</h3>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-profundo transition-transform group-hover:translate-x-1">
                        Ver solução <ArrowRight size={15} aria-hidden="true" />
                      </span>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
