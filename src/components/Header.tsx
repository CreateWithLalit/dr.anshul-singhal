"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";
import { ChatBubbleIcon } from "./illustrations";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/about", label: t("navAbout") },
    { href: "/services", label: t("navServices") },
    { href: "/locations", label: t("navLocations") },
    { href: "/guide", label: t("navGuide") },
    { href: "/for-doctors", label: t("navForDoctors") },
    { href: "/contact", label: t("navContact") },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md hairline-b py-3 shadow-soft"
          : "bg-background py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Wordmark logo */}
        <Link
          href="/"
          className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          <span className="font-serif text-xl sm:text-2xl font-normal text-ink group-hover:text-accent transition-colors leading-tight">
            {t("doctorName")}
          </span>
          <span className="text-[11px] uppercase tracking-wider text-muted font-sans font-medium">
            {t("doctorTitle")}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-6"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent relative py-1 ${
                  isActive ? "text-accent" : "text-muted"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <LanguageToggle />

          <a
            href="https://wa.me/910000000000?text=Hello%20Dr.%20Anshul%20Singhal,%20I%20would%20like%20to%20inquire%20about%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors shadow-soft"
          >
            <ChatBubbleIcon size={16} strokeWidth={2} />
            <span>{t("btnWhatsApp")}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle className="sm:hidden" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-lg text-ink hover:bg-surface border border-hairline focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-surface hairline-b shadow-card p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-accent-soft text-accent"
                      : "text-ink hover:bg-background"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-hairline flex flex-col gap-2 mt-2">
              <a
                href="https://wa.me/910000000000?text=Hello%20Dr.%20Anshul%20Singhal,%20I%20would%20like%20to%20inquire%20about%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-pill bg-accent text-white text-center font-medium flex items-center justify-center gap-2"
              >
                <ChatBubbleIcon size={18} />
                <span>{t("btnWhatsApp")}</span>
              </a>

              <a
                href="tel:+910000000000"
                className="w-full py-3 rounded-pill bg-white border border-hairline text-ink text-center font-medium hover:bg-background transition"
              >
                {t("btnCall")} (+91 00000 00000)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
