"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-[var(--ease-premium)]",
        scrolled
          ? "bg-azul-profundo/95 backdrop-blur border-b border-[var(--color-border-on-dark)] shadow-[var(--shadow-card-sm)]"
          : "bg-azul-profundo border-b border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-off-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobre"
          aria-label="Norte One — página inicial"
        >
          <span className="text-lg font-semibold tracking-tight sm:text-xl" style={{ fontFamily: "var(--font-display)" }}>
            Norte<span className="text-cobre">One</span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-off-white/80 transition-colors hover:text-off-white",
                "relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cobre after:transition-all after:duration-300 hover:after:w-full",
                pathname === item.href && "text-off-white after:w-full"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contato" variant="accent" size="md" data-event="cta_header_click">
            Fale com a Norte One
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-card-sm)] text-off-white lg:hidden"
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={26} aria-hidden="true" />
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="fixed inset-0 z-[60] flex flex-col bg-azul-profundo lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex h-16 items-center justify-between px-5 sm:h-20 sm:px-6">
              <span
                className="text-lg font-semibold text-off-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Norte<span className="text-cobre">One</span>
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-card-sm)] text-off-white"
                aria-label="Fechar menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={26} aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Navegação móvel"
              className="flex flex-1 flex-col justify-center gap-2 px-6"
            >
              {primaryNav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-[var(--color-border-on-dark)] py-4 text-2xl font-medium text-off-white"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pb-10 pt-4">
              <Button
                href="/contato"
                variant="accent"
                size="lg"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                Fale com a Norte One
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
