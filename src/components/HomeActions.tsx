"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { CalendarIcon, ChatBubbleIcon, PhoneCallIcon } from "./illustrations";
import { ContactLink } from "./ContactLink";

export function HomeActions({
  phone,
  whatsApp,
  phoneVerified,
  whatsAppVerified,
}: {
  phone: string;
  whatsApp: string;
  phoneVerified: boolean;
  whatsAppVerified: boolean;
}) {
  const { language, t } = useLanguage();
  const lang = language === "hi" ? "hi" : "en";

  return (
    <div lang={lang} className={`flex flex-wrap items-center gap-3 ${language === "hi" ? "lang-hi" : ""}`}>
      <ContactLink
        kind="whatsapp"
        value={whatsApp}
        verified={whatsAppVerified}
        className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#25D366] text-[#102B24] font-semibold text-[0.9375rem] hover:bg-[#1fb85a] transition-colors shadow-[0_4px_14px_rgba(15,92,99,0.25)] active:scale-[0.98]"
      >
        <ChatBubbleIcon size={18} strokeWidth={2} />
        {t("btnWhatsApp")}
      </ContactLink>
      <ContactLink kind="call" value={phone} verified={phoneVerified} className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white border border-[#E4DFD6] text-[#16232B] font-medium text-[0.9375rem] hover:bg-[#FAF8F4] transition-colors shadow-[0_2px_8px_rgba(22,35,43,0.04)] active:scale-[0.98]">
        <PhoneCallIcon size={18} strokeWidth={1.8} className="text-[#0F5C63]" />
        {t("btnCall")}
      </ContactLink>
      <Link href="/contact" className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#C62828] text-white font-semibold text-[0.9375rem] hover:bg-[#a51f1f] transition-colors active:scale-[0.98]">
        <CalendarIcon size={18} />
        {t("btnBook")}
      </Link>
    </div>
  );
}
