"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";
import { ChatBubbleIcon, PhoneCallIcon, CalendarIcon } from "./illustrations";
import { ContactLink } from "./ContactLink";
import type { SiteSettings } from "@/lib/content";

const NAV_LINKS = [
  { href: "/about", key: "navAbout" },
  { href: "/services", key: "navServices" },
  { href: "/locations", key: "navLocations" },
  { href: "/guide", key: "navGuide" },
  { href: "/for-doctors", key: "navForDoctors" },
  { href: "/contact", key: "navContact" },
];

export function Header({ phone, whatsApp, phoneVerified, whatsAppVerified, ctas }: { phone: string; whatsApp: string; phoneVerified: boolean; whatsAppVerified: boolean; ctas: SiteSettings["contactCtas"] }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { t, language } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <><div className="hidden md:block bg-[#0F2A43] text-white text-xs"><div className="max-w-6xl mx-auto px-5 sm:px-8 h-9 flex items-center justify-between"><span>Emergency: 112 · Clinic number coming soon</span><div className="flex gap-4 items-center"><span>WhatsApp available</span><LanguageToggle compact /></div></div></div><header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E4DFD6] py-2.5 shadow-[0_1px_8px_rgba(22,35,43,0.04)]"
          : "bg-[#FAF8F4] py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-8 flex items-center justify-between gap-2 min-w-0">

        {/* Wordmark — always one line */}
        <Link
          href="/"
          className="flex-shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5C63] rounded-sm"
        >
          <Image
            src="/images/dr-anshul-singhal-logo-cropped.png"
            alt="Dr. Anshul Singhal"
            width={168}
            height={53}
            priority
            className="h-9 sm:h-10 w-auto object-contain"
          />
          <span className="sr-only">{t("doctorName")}, {t("doctorTitle")}</span>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex min-[1440px]:flex items-center gap-3 min-[1440px]:gap-5 min-w-0"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`${link.href === "/for-doctors" || link.href === "/contact" ? "hidden min-[1440px]:inline-flex" : "inline-flex"} text-[0.75rem] min-[1440px]:text-[0.8125rem] font-medium whitespace-nowrap transition-colors relative py-1 ${
                  active ? "text-[#0F5C63]" : "text-[#5B6870] hover:text-[#16232B]"
                }`}
              >
                  {t(link.key)}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-[#0F5C63] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center gap-2 min-[1440px]:gap-3 flex-shrink-0">
          <LanguageToggle />
          <ContactLink kind="call" value={phone} verified={phoneVerified} className="inline-flex items-center gap-2 px-3 min-[1440px]:px-4 py-2 rounded-full border border-[#0F2A43]/20 text-[#0F2A43] text-[0.75rem] min-[1440px]:text-[0.8125rem] font-semibold"><PhoneCallIcon size={14} /><span className="hidden min-[1440px]:inline">{ctas.callLabel}</span><span className="min-[1440px]:hidden">Call</span></ContactLink>
          <ContactLink
            kind="whatsapp"
            value={whatsApp}
            verified={whatsAppVerified}
            className="inline-flex items-center gap-2 px-3 min-[1440px]:px-4 py-2 rounded-full bg-[#0F5C63] text-white text-[0.75rem] min-[1440px]:text-[0.8125rem] font-medium hover:bg-[#0b464c] transition-colors"
          >
            <ChatBubbleIcon size={14} strokeWidth={2.2} />
            {ctas.whatsappLabel}
          </ContactLink>
          <Link href="/contact" className="hidden min-[1440px]:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C62828] text-white text-[0.8125rem] font-semibold"><CalendarIcon size={14} />{ctas.bookLabel}</Link>
          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label="Open all navigation links" className="hidden xl:inline-flex min-[1440px]:hidden min-h-11 min-w-11 items-center justify-center rounded-lg border border-[#E4DFD6] text-[#16232B] hover:bg-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {/* Mobile: language + hamburger */}
        <div className="flex items-center gap-2 xl:hidden">
          <LanguageToggle compact />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            className="min-h-12 min-w-12 p-2 rounded-lg border border-[#E4DFD6] text-[#16232B] hover:bg-white transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="min-[1440px]:hidden absolute top-full inset-x-0 bg-white border-b border-[#E4DFD6] shadow-[0_8px_24px_rgba(22,35,43,0.08)] p-5 z-50">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2.5 px-3 rounded-lg text-[0.9375rem] font-medium transition-colors ${
                  pathname.startsWith(link.href)
                    ? "bg-[#DCEBEA] text-[#0F5C63]"
                    : "text-[#16232B] hover:bg-[#FAF8F4]"
                }`}
              >
                <span lang={language === "hi" ? "hi" : "en"} className={language === "hi" ? "lang-hi" : ""}>{t(link.key)}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#E4DFD6] grid grid-cols-2 gap-2">
            <ContactLink
              kind="whatsapp"
              value={whatsApp}
              verified={whatsAppVerified}
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#0F5C63] text-white text-sm font-medium"
            >
              <ChatBubbleIcon size={16} strokeWidth={2} />
              {t("btnWhatsApp")}
            </ContactLink>
            <ContactLink
              kind="call"
              value={phone}
              verified={phoneVerified}
              className="flex items-center justify-center py-3 rounded-full border border-[#E4DFD6] text-[#16232B] text-sm font-medium hover:bg-[#FAF8F4]"
            >
              {t("btnCall")}
            </ContactLink>
          </div>
        </div>
      )}
    </header></>
  );
}
