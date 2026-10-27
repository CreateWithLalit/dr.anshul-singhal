"use client";

import React from "react";
import { PhoneCallIcon, CalendarIcon } from "./illustrations";
import { useLanguage } from "./LanguageContext";
import { ContactLink } from "./ContactLink";

export function BottomActionBar({ phone, whatsApp, phoneVerified, whatsAppVerified }: { phone: string; whatsApp: string; phoneVerified: boolean; whatsAppVerified: boolean }) {
  const { t } = useLanguage();

  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-md border-t border-hairline px-3 py-2 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] pb-[calc(0.5rem+env(safe-area-inset-bottom,0))]">
      <div className="grid gap-2 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-2">
          {/* WhatsApp */}
          <ContactLink
            kind="whatsapp"
            value={whatsApp}
            verified={whatsAppVerified}
            className="w-full flex items-center justify-center gap-1 py-3 px-2 rounded-pill bg-[#25D366] text-[#102B24] font-semibold text-xs shadow-soft active:scale-[0.98] transition-transform"
          >
            <span aria-hidden className="text-base leading-none">◉</span>
            <span>{t("btnWhatsApp")}</span>
          </ContactLink>
          {/* Call */}
          <ContactLink
            kind="call"
            value={phone}
            verified={phoneVerified}
            className="w-full flex items-center justify-center gap-1 py-3 px-2 rounded-pill bg-surface text-ink border border-hairline font-medium text-xs active:bg-background shadow-soft active:scale-[0.98] transition-transform"
          >
            <PhoneCallIcon size={17} strokeWidth={2} className="text-[#0F5C63]" />
            <span>{t("btnCall")}</span>
          </ContactLink>
        </div>
        {/* Book Consultation */}
        <a href="/contact" className="flex items-center justify-center gap-1 py-3 px-2 rounded-pill bg-[#C62828] text-white font-semibold text-xs">
          <CalendarIcon size={15} />
          <span>{t("btnBook")}</span>
        </a>
      </div>
    </div>
  );
}
