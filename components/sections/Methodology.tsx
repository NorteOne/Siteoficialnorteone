import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { methodology } from "@/content/methodology";

export function Methodology() {
  return (
    <section
      className="bg-off-white py-14 sm:py-20 lg:py-24"
      aria-labelledby="metodologia-heading"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Metodologia"
          title="Do problema à solução."
        />

        <div className="mt-14">
          {/* Desktop: horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative grid grid-cols-5 gap-6">
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-6 h-px bg-[var(--color-border)]"
              />
              {methodology.map((item) => (
                <div
                  key={item.step}
                  className="relative flex flex-col items-start"
                >
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cobre bg-off-white text-sm font-semibold text-azul-profundo">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-grafite">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cinza-pedra">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/tablet: vertical timeline */}
          <ol className="space-y-8 lg:hidden">
            {methodology.map((item, index) => (
              <li key={item.step} className="relative flex gap-5 pl-1">
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-cobre bg-off-white text-sm font-semibold text-azul-profundo">
                    {item.step}
                  </span>
                  {index < methodology.length - 1 ? (
                    <span
                      className="mt-1 w-px flex-1 bg-[var(--color-border)]"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <div className="pb-2">
                  <h3 className="text-base font-semibold text-grafite">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cinza-pedra">
                    {item.description}
                  </p>
                  </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
