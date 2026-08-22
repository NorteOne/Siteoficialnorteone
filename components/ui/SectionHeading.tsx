import { cn } from "@/lib/utils";
import type { ElementType } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  level = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  level?: "h1" | "h2";
  className?: string;
}) {
  const Heading: ElementType = level;

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.14em]",
            tone === "dark" ? "text-cobre" : "text-cobre"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-balance font-semibold leading-[1.15]",
          level === "h1" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl",
          tone === "dark" ? "text-off-white" : "text-grafite"
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-azul-nevoa/90" : "text-cinza-pedra"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
