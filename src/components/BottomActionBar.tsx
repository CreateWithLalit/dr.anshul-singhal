"use client";

import React from "react";
import { ChatBubbleIcon, PhoneCallIcon } from "./illustrations";
import { useLanguage } from "./LanguageContext";
import type { SiteSettings } from "@/lib/content";

export function BottomActionBar({ phone, whatsApp, ctas }: { phone: string; whatsApp: string; ctas: SiteSettings["contactCtas"] }) {
  const { t } = useLanguage();

  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-md border-t border-hairline px-3 py-2 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] pb-[calc(0.5rem+env(safe-area-inset-bottom,0))]">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* WhatsApp Call to Action */}
        <a
          href={`https://wa.me/${whatsApp}?text=${encodeURIComponent(ctas.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-pill bg-[#0F5C63] text-white font-medium text-sm shadow-soft active:scale-[0.98] transition-transform"
        >
          <ChatBubbleIcon size={17} strokeWidth={2} />
          <span>{t("btnWhatsApp")}</span>
        </a>

        {/* Immediate Call Action */}
        <a
          href={`tel:${phone}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-pill bg-surface text-ink border border-hairline font-medium text-sm active:bg-background shadow-soft active:scale-[0.98] transition-transform"
        >
          <PhoneCallIcon size={17} strokeWidth={2} className="text-[#0F5C63]" />
          <span>{t("btnCall")}</span>
        </a>
      </div>
    </div>
  );
}
