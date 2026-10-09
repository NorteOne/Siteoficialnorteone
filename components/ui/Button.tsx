import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent" | "light";
type Size = "md" | "lg";

const base =
  "group inline-flex min-h-11 items-center justify-center gap-3 rounded-[4px] border font-semibold transition-[color,background-color,border-color] duration-300 ease-[var(--ease-premium)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "border-cobre bg-cobre text-azul-noturno hover:border-cobre-claro hover:bg-cobre-claro",
  secondary:
    "border-transparent border-b-azul-profundo bg-transparent px-0 text-azul-profundo hover:border-b-cobre-ink hover:text-cobre-ink",
  ghost:
    "border-[var(--color-border-on-dark)] bg-transparent text-off-white hover:border-off-white",
  accent:
    "border-cobre bg-cobre text-azul-noturno hover:border-cobre-claro hover:bg-cobre-claro",
  light:
    "border-off-white bg-off-white text-azul-profundo hover:border-azul-nevoa hover:bg-azul-nevoa",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.8125rem]",
  lg: "px-6 py-3 text-[0.9375rem] sm:px-7",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    const isExternal = href.startsWith("http") || href.startsWith("https://wa.me");
    const Arrow = isExternal ? ArrowUpRight : ArrowRight;
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
      >
        {children}
        <Arrow
          size={16}
          strokeWidth={1.6}
          className="shrink-0 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
