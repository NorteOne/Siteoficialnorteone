"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function subscribeNoop() {
  return () => {};
}

/**
 * Verdadeiro apenas depois da hidratação no cliente. Usado para só
 * criar o portal do menu mobile quando `document` existe, sem cair no
 * anti-padrão de setState dentro de useEffect.
 */
function useMounted() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mounted = useMounted();
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

  // Renderizado fora do <header>: um ancestral com backdrop-blur/transform
  // cria um novo containing block para elementos "fixed", o que quebrava o
  // posicionamento em tela cheia deste painel quando o header tinha o efeito
  // de vidro ativo (rolagem). Um portal para o <body> evita esse problema.
  const mobileMenu = (
    <AnimatePresence>
      {menuOpen ? (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-0 z-[100] flex flex-col bg-azul-profundo lg:hidden"
          initial={{ y: -16 }}
          animate={{ y: 0 }}
          exit={{ y: -16 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex h-16 items-center justify-between px-5 sm:h-20 sm:px-6">
            <Image
              src="/logo/lockup.png"
              alt="Norte One"
              width={675}
              height={197}
              className="h-7 w-auto"
            />
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 * index, duration: 0.25 }}
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
  );

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
          className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobre"
          aria-label="Norte One — página inicial"
        >
          <Image
            src="/logo/lockup.png"
            alt="Norte One"
            width={675}
            height={197}
            priority
            className="h-8 w-auto sm:h-9"
          />
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
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-card-sm)] text-off-white lg:hidden",
            menuOpen && "invisible"
          )}
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={26} aria-hidden="true" />
        </button>
      </Container>

      {mounted ? createPortal(mobileMenu, document.body) : null}
    </header>
  );
}
