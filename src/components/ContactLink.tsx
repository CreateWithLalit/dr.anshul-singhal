"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";

type ContactKind = "call" | "whatsapp";

type ContactLinkProps = {
  kind: ContactKind;
  value: string;
  verified: boolean;
  className?: string;
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

  return (
    <span className="inline-flex flex-col items-stretch">
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
        <span id="contact-demo-notice" role="status" className="mt-1 text-center text-[11px] leading-snug text-[#5B6870]">
          {t("contactDemoNotice")}
        </span>
      )}
    </span>
  );
}
