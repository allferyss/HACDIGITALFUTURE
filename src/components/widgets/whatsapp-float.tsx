"use client";

import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/utils";

export function WhatsappFloat() {
  return (
    <a
      href={waLink("Halo HAC Digital Future, saya ingin konsultasi layanan.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_36px_rgba(37,211,102,0.55)] md:bottom-8 md:right-8"
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle className="h-5 w-5 fill-white/20" />
        <span className="absolute -inset-1 animate-ping rounded-full bg-white/30" />
      </div>
      <span className="font-display font-medium tracking-normal text-white">
        WhatsApp Kami
      </span>
    </a>
  );
}
