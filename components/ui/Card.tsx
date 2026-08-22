import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card-md)] border border-[var(--color-border)] bg-white p-6 sm:p-7",
        "shadow-[var(--shadow-card-sm)] transition-all duration-300 ease-[var(--ease-premium)]",
        "hover:shadow-[var(--shadow-card-md)] hover:-translate-y-0.5 hover:border-cobre/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
