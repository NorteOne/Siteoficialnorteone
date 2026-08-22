import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "accent";
}) {
  const tones = {
    light: "bg-azul-nevoa text-azul-profundo",
    dark: "bg-white/10 text-off-white border border-[var(--color-border-on-dark)]",
    accent: "bg-cobre/10 text-cobre",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
