"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site-config";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateVisibility = () => {
      const closingSection =
        document.querySelector<HTMLElement>("[data-whatsapp-hide]") ??
        document.getElementById("trabalhos");
      const hasReachedClosing = closingSection
        ? closingSection.getBoundingClientRect().top < window.innerHeight
        : false;

      if (hasReachedClosing) {
        setIsVisible(false);
        return;
      }

      const isDesktop = window.innerWidth >= 1024;
      if (isDesktop) {
        setIsVisible(window.scrollY > window.innerHeight * 0.55);
        return;
      }

      const narrativeSection = document.getElementById("como-pensamos");
      const hasPassedNarrative = narrativeSection
        ? narrativeSection.getBoundingClientRect().bottom <= 0
        : window.scrollY > window.innerHeight;
      setIsVisible(hasPassedNarrative);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  if (!isVisible || pathname === "/contato") return null;

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-event="whatsapp_click"
      aria-label="Falar com a Norte One pelo WhatsApp"
      title="Falar com a Norte One pelo WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex size-12 items-center justify-center rounded-full border border-off-white/25 bg-azul-noturno text-off-white shadow-[var(--shadow-card-md)] transition-[color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-cobre hover:text-cobre sm:bottom-6 sm:right-6 sm:size-13"
    >
      <MessageCircle size={20} strokeWidth={1.7} aria-hidden="true" />
    </a>
  );
}
