"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-0.5 rounded-pill bg-[#FAF8F4] border border-hairline ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2.5 py-1 text-xs rounded-pill font-medium transition-all ${
          language === "en"
            ? "bg-accent text-white shadow-soft"
            : "text-muted hover:text-ink"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("hi")}
        aria-pressed={language === "hi"}
        className={`px-2.5 py-1 text-xs rounded-pill font-medium transition-all ${
          language === "hi"
            ? "bg-accent text-white shadow-soft"
            : "text-muted hover:text-ink"
        }`}
      >
        हिन्दी
      </button>
    </div>
  );
}
