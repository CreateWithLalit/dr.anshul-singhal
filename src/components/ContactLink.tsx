"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";

type ContactKind = "call" | "whatsapp";

type ContactLinkProps = {
  kind: ContactKind;
  value: string;
  verified: boolean;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  serviceName?: string;
  ariaLabel?: string;
};

/**
 * The sole client-side boundary for telephone and WhatsApp actions.
 * Unverified demo contacts deliberately cannot open external contact routes.
 */
export function ContactLink({
  kind,
  value,
  verified,
  className = "",
  containerClassName,
  children,
  serviceName,
  ariaLabel,
}: ContactLinkProps) {
  const { t } = useLanguage();
  const [showNotice, setShowNotice] = useState(false);

  const handleClick = () => {
    if (!verified) {
      setShowNotice(true);
      return;
    }

    if (kind === "call") {
      window.location.assign(`tel:${value}`);
      return;
    }

    const message = serviceName
      ? `${t("whatsappServiceMessage")} ${serviceName}.`
      : t("whatsappMessage");
    window.open(`https://wa.me/${value}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const isFullWidth = className.includes("w-full");
  const wrapperClass = containerClassName !== undefined
    ? containerClassName
    : isFullWidth
    ? "relative w-full flex"
    : "relative inline-flex items-center";

  return (
    <span className={wrapperClass}>
      <button
        type="button"
        onClick={handleClick}
        className={className}
        aria-label={ariaLabel}
        aria-describedby={showNotice ? "contact-demo-notice" : undefined}
      >
        {children}
      </button>
      {showNotice && (
        <span
          id="contact-demo-notice"
          role="status"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap bg-[#16232B] text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow-lg z-50 pointer-events-none"
        >
          {t("contactDemoNotice")}
        </span>
      )}
    </span>
  );
}
