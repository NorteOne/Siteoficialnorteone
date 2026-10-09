"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const headerNav = primaryNav.filter((item) => item.href !== "/contato");

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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const wasMenuOpenRef = useRef(false);

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
      wasMenuOpenRef.current = true;
    } else {
      document.body.style.overflow = "";
      if (wasMenuOpenRef.current) {
        menuButtonRef.current?.focus();
        wasMenuOpenRef.current = false;
      }
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
  const mobileMenu = menuOpen ? (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      className="fixed inset-0 z-[100] flex flex-col bg-azul-noturno lg:hidden"
      initial={{ y: -16 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;

        const focusable = Array.from(
          event.currentTarget.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])'
          )
        );
        const first = focusable[0];
        const last = focusable.at(-1);

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
    >
      <div className="flex h-[4.5rem] items-center justify-between border-b border-[var(--color-border-on-dark)] px-5 sm:h-[4.75rem] sm:px-10">
        <Image
          src="/logo/lockup.png"
          alt="Norte One"
          width={691}
          height={213}
          className="h-8 w-auto"
        />
        <button
          ref={closeButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-off-white transition-colors hover:text-cobre"
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
        >
          <X size={26} aria-hidden="true" />
        </button>
      </div>

      <nav
        aria-label="Navegação móvel"
        className="flex flex-1 flex-col justify-center px-5 sm:px-10"
      >
        {headerNav.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.03 * index, duration: 0.25 }}
          >
            <Link
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[var(--color-border-on-dark)] py-4 font-display text-[1.75rem] font-semibold leading-tight text-off-white sm:py-5 sm:text-[2.25rem]"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      <div className="px-5 pb-8 pt-4 sm:px-10 sm:pb-10">
        <Button
          href="/contato"
          variant="light"
          size="lg"
          className="w-full"
          onClick={() => setMenuOpen(false)}
        >
          Conversar sobre um problema
        </Button>
      </div>
    </motion.div>
  ) : null;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-[var(--ease-premium)]",
        scrolled
          ? "border-[var(--color-border-on-dark)] bg-azul-noturno/98 backdrop-blur-sm"
          : "border-transparent bg-azul-noturno"
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between sm:h-[4.75rem] lg:h-20">
        <Link
          href="/"
          className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobre"
          aria-label="Norte One — página inicial"
        >
          <Image
            src="/logo/lockup.png"
            alt="Norte One"
            width={691}
            height={213}
            priority
            className="h-8 w-auto sm:h-9 lg:h-10"
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex xl:gap-10">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-[0.8125rem] font-medium text-off-white/70 transition-colors hover:text-off-white",
                "after:absolute after:-bottom-2.5 after:left-0 after:h-px after:w-0 after:bg-cobre after:transition-all after:duration-300 hover:after:w-full",
                pathname === item.href && "text-off-white after:w-full"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contato" variant="ghost" size="md" data-event="cta_header_click">
            Conversar
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center text-off-white transition-colors hover:text-cobre lg:hidden",
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
