"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { CalendarIcon, ChatBubbleIcon, PhoneCallIcon } from "./illustrations";

export function HomeActions({ phone, whatsApp }: { phone: string; whatsApp: string }) {
  const { language, t } = useLanguage();
  const lang = language === "hi" ? "hi" : "en";

  return (
    <div lang={lang} className={`flex flex-wrap items-center gap-3 ${language === "hi" ? "lang-hi" : ""}`}>
      <a
        href={`https://wa.me/${whatsApp}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation%20with%20Dr.%20Anshul%20Singhal`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0F5C63] text-white font-medium text-[0.9375rem] hover:bg-[#0b464c] transition-colors shadow-[0_4px_14px_rgba(15,92,99,0.25)] active:scale-[0.98]"
      >
        <ChatBubbleIcon size={18} strokeWidth={2} />
        {t("btnWhatsApp")}
      </a>
      <a href={`tel:${phone}`} className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white border border-[#E4DFD6] text-[#16232B] font-medium text-[0.9375rem] hover:bg-[#FAF8F4] transition-colors shadow-[0_2px_8px_rgba(22,35,43,0.04)] active:scale-[0.98]">
        <PhoneCallIcon size={18} strokeWidth={1.8} className="text-[#0F5C63]" />
        {t("btnCall")}
      </a>
      <Link href="/contact" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-[#0F5C63]/30 text-[#0F5C63] font-medium text-[0.9375rem] hover:bg-[#DCEBEA]/40 transition-colors active:scale-[0.98]">
        <CalendarIcon size={18} />
        {t("btnBook")}
      </Link>
    </div>
  );
}
