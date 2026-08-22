"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-event="whatsapp_click"
      aria-label="Falar com a Norte One pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-on-dark)] bg-azul-profundo/95 px-4 py-3 text-sm font-medium text-off-white shadow-[var(--shadow-card-md)] backdrop-blur transition-all duration-200 hover:border-cobre hover:text-cobre sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
