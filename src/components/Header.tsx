"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";
import { DoctorLogo } from "./DoctorLogo";
import {
  ChatBubbleIcon,
  CalendarIcon,
  JawSkullIcon,
  FaceProfileIcon,
  LocationPinIcon,
  ShieldCheckIcon,
  ToothIcon,
} from "./illustrations";
import { ContactLink } from "./ContactLink";
import type { SiteSettings } from "@/lib/content";

interface NavLinkItem {
  href: string;
  key: string;
  shortLabel: string;
  fullLabel: string;
  desc: string;
  icon: React.ReactNode;
}

const NAV_LINKS: NavLinkItem[] = [
  {
    href: "/",
    key: "navHome",
    shortLabel: "Home",
    fullLabel: "Home",
    desc: "Overview & immediate consultation",
    icon: (
      <svg className="w-5 h-5 text-[#0F5C63]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: "/about",
    key: "navAbout",
    shortLabel: "About",
    fullLabel: "About & Credentials",
    desc: "Surgeon background & qualifications",
    icon: <FaceProfileIcon size={20} strokeWidth={1.6} className="text-[#0F5C63]" />,
  },
  {
    href: "/services",
    key: "navServices",
    shortLabel: "Services",
    fullLabel: "Surgical Services",
    desc: "Maxillofacial, implants & facial trauma",
    icon: <JawSkullIcon size={20} strokeWidth={1.6} className="text-[#0F5C63]" />,
  },
  {
    href: "/locations",
    key: "navLocations",
    shortLabel: "Clinic",
    fullLabel: "Clinic Location",
    desc: "Consultation suite, hours & directions",
    icon: <LocationPinIcon size={20} strokeWidth={1.6} className="text-[#0F5C63]" />,
  },
  {
    href: "/guide",
    key: "navGuide",
    shortLabel: "Patient Guide",
    fullLabel: "Patient Guide",
    desc: "Plain-language guides & FAQs",
    icon: <ToothIcon size={20} strokeWidth={1.6} className="text-[#0F5C63]" />,
  },
  {
    href: "/for-doctors",
    key: "navForDoctors",
    shortLabel: "For Doctors",
    fullLabel: "For Referring Doctors",
    desc: "Clinician referral pathway & reporting",
    icon: <ShieldCheckIcon size={20} strokeWidth={1.6} className="text-[#0F5C63]" />,
  },
  {
    href: "/contact",
    key: "navContact",
    shortLabel: "Contact",
    fullLabel: "Contact & Appointments",
    desc: "WhatsApp, phone & appointment booking",
    icon: <CalendarIcon size={20} strokeWidth={1.6} className="text-[#0F5C63]" />,
  },
];

const SURGICAL_QUICK_PILLARS = [
  { href: "/services/wisdom-teeth", label: "Wisdom Teeth" },
  { href: "/services/dental-implants", label: "Dental Implants" },
  { href: "/services/facial-injury", label: "Facial Trauma" },
  { href: "/fees-insurance", label: "Fees & Insurance" },
];

export function Header({
  whatsApp,
  whatsAppVerified,
  ctas,
}: {
  phone?: string;
  whatsApp: string;
  phoneVerified?: boolean;
  whatsAppVerified: boolean;
  ctas: SiteSettings["contactCtas"];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, language } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E4DFD6] py-2.5 shadow-[0_2px_12px_rgba(22,35,43,0.06)]"
          : "bg-[#FAF8F4] border-b border-[#E4DFD6]/60 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-8 flex items-center justify-between gap-4">
        {/* ─── GROUP 1: BRAND LOGO (Always flex-shrink-0) ─── */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5C63] rounded-lg transition-transform duration-200 active:scale-[0.98]"
          >
            <DoctorLogo />
            <span className="sr-only">
              {t("doctorName")}, {t("doctorTitle")}
            </span>
          </Link>
        </div>

        {/* ─── GROUP 2: CENTER DESKTOP NAVIGATION (Visible on >= 1280px) ─── */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-1 2xl:gap-1.5 flex-shrink-0"
        >
          {NAV_LINKS.map((link) => {
            const isHome = link.href === "/";
            const active = isHome ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`px-3 py-1.5 rounded-full text-[0.84rem] 2xl:text-[0.875rem] font-medium whitespace-nowrap transition-all duration-150 flex items-center justify-center min-h-[36px] ${
                  active
                    ? "bg-[#DCEBEA] text-[#0F5C63] font-semibold"
                    : "text-[#5B6870] hover:text-[#16232B] hover:bg-black/5"
                }`}
              >
                <span>{t(link.key) || link.shortLabel}</span>
              </Link>
            );
          })}
        </nav>

        {/* ─── GROUP 3: DESKTOP ACTIONS (Dedicated right-aligned area, >= 1280px) ─── */}
        <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
          <LanguageToggle />

          {/* Primary Action: WhatsApp Consultation */}
          <ContactLink
            kind="whatsapp"
            value={whatsApp}
            verified={whatsAppVerified}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F5C63] text-white text-xs font-semibold hover:bg-[#0b464c] shadow-xs transition-all whitespace-nowrap min-h-[38px]"
          >
            <ChatBubbleIcon size={14} strokeWidth={2.2} />
            <span>{ctas.whatsappLabel}</span>
          </ContactLink>

          {/* Action: Book Consultation */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C62828] text-white text-xs font-semibold hover:bg-[#a51d1d] shadow-xs transition-all whitespace-nowrap min-h-[38px]"
          >
            <CalendarIcon size={14} />
            <span>{ctas.bookLabel}</span>
          </Link>
        </div>

        {/* ─── GROUP 4: RESPONSIVE TABLET / MOBILE CONTROLS (< 1280px) ─── */}
        <div className="flex xl:hidden items-center gap-2 flex-shrink-0">
          <LanguageToggle compact />

          {/* Direct WhatsApp Action for quick mobile contact */}
          <ContactLink
            kind="whatsapp"
            value={whatsApp}
            verified={whatsAppVerified}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#0F5C63] text-white text-xs font-semibold hover:bg-[#0b464c] transition-colors whitespace-nowrap min-h-[40px]"
          >
            <ChatBubbleIcon size={14} strokeWidth={2.2} />
            <span>WhatsApp</span>
          </ContactLink>

          {/* Responsive Menu Drawer Trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`min-h-[42px] px-3.5 py-2 rounded-full border transition-all flex items-center gap-2 text-xs font-semibold ${
              menuOpen
                ? "bg-[#0F5C63] text-white border-[#0F5C63]"
                : "bg-white text-[#16232B] border-[#E4DFD6] hover:bg-[#FAF8F4]"
            }`}
          >
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${menuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            <span className="hidden sm:inline">{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {/* ─── SMOOTH ANIMATED RESTRUCTURED MENU DRAWER ─── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 top-[65px] sm:top-[70px] bg-[#16232B]/40 backdrop-blur-sm z-40"
              aria-hidden
            />

            {/* Menu Drawer Container */}
            <motion.div
              initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -12, scaleY: 0.98 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full inset-x-0 bg-white border-b border-[#E4DFD6] shadow-[0_20px_40px_rgba(22,35,43,0.15)] z-50 max-h-[calc(100vh-80px)] overflow-y-auto origin-top"
            >
              <div className="max-w-4xl mx-auto px-5 py-6 sm:py-8 space-y-6">
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E4DFD6]">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0F5C63]">
                      Practice Navigation
                    </p>
                    <p className="text-xs text-[#5B6870]">
                      Dr. Anshul Singhal · Oral &amp; Maxillofacial Surgeon
                    </p>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#DCEBEA] text-[#0F5C63] font-medium">
                    {language === "hi" ? "हिन्दी" : "English"}
                  </span>
                </div>

                {/* Primary Navigation Cards */}
                <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {NAV_LINKS.map((link, idx) => {
                    const isHome = link.href === "/";
                    const active = isHome ? pathname === "/" : pathname.startsWith(link.href);

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.03, duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-start gap-3.5 p-3.5 rounded-[14px] border transition-all ${
                            active
                              ? "bg-[#DCEBEA]/60 border-[#0F5C63]/30 shadow-xs"
                              : "bg-[#FAF8F4] border-[#E4DFD6]/80 hover:bg-white hover:border-[#0F5C63]/30 hover:shadow-xs"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                              active ? "bg-[#0F5C63] text-white" : "bg-white border border-[#E4DFD6] text-[#0F5C63]"
                            }`}
                          >
                            {link.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span
                                className={`text-[0.9375rem] font-semibold ${
                                  active ? "text-[#0F5C63]" : "text-[#16232B]"
                                }`}
                              >
                                {t(link.key) || link.fullLabel}
                              </span>
                              {active && (
                                <span className="w-2 h-2 rounded-full bg-[#0F5C63]" />
                              )}
                            </div>
                            <p className="text-xs text-[#5B6870] mt-0.5 line-clamp-1">
                              {link.desc}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Direct Procedure Pills */}
                <div className="pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5B6870] mb-2.5">
                    Explore Specific Procedures
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SURGICAL_QUICK_PILLARS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="px-3.5 py-1.5 rounded-full bg-white border border-[#E4DFD6] text-xs font-medium text-[#16232B] hover:border-[#0F5C63] hover:text-[#0F5C63] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons in Drawer */}
                <div className="pt-3 border-t border-[#E4DFD6] grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <ContactLink
                    kind="whatsapp"
                    value={whatsApp}
                    verified={whatsAppVerified}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0F5C63] text-white text-xs font-semibold hover:bg-[#0b464c] shadow-xs transition-all"
                  >
                    <ChatBubbleIcon size={16} strokeWidth={2.2} />
                    <span>{ctas.whatsappLabel || t("btnWhatsApp")}</span>
                  </ContactLink>

                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#C62828] text-white text-xs font-semibold hover:bg-[#a51d1d] shadow-xs transition-all"
                  >
                    <CalendarIcon size={15} />
                    <span>{ctas.bookLabel || t("btnBook")}</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
