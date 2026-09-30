import React from "react";
import type { Credential } from "@/lib/content/types";

interface CredentialBlockProps {
  credential: Credential;
  className?: string;
}

export function CredentialBlock({ credential, className = "" }: CredentialBlockProps) {
  // Section 6: 'pending' items are never shown publicly
  if (credential.status === "pending") {
    return null;
  }

  const isPlaceholder = credential.status === "placeholder";

  return (
    <div
      className={`p-4 rounded-card transition-all ${
        isPlaceholder
          ? "border-2 border-dashed border-[#A2AFB6]/60 bg-[#DCEBEA]/15 text-[#5B6870]"
          : "border border-hairline bg-surface text-ink shadow-soft"
      } ${className}`}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6870]">
          {credential.type.replace("_", " ")}
        </span>

        {isPlaceholder ? (
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill text-[11px] font-medium bg-[#FAF8F4] text-[#5B6870] border border-dashed border-[#A2AFB6]/70"
            title="Awaiting Dr. Singhal's verification before public launch"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9C7A8]" />
            Placeholder
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-pill text-[11px] font-medium bg-[#DCEBEA] text-[#0F5C63]">
            <svg
              className="w-3 h-3 stroke-[#0F5C63] fill-none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Verified
          </span>
        )}
      </div>

      <div className="font-medium text-base text-[#16232B] mb-1">
        {credential.title}
      </div>

      <div className="text-sm text-[#5B6870] flex flex-wrap items-center gap-x-3 gap-y-1">
        <span>{credential.institution}</span>
        {credential.year && (
          <>
            <span className="text-hairline">•</span>
            <span>{credential.year}</span>
          </>
        )}
      </div>

      {isPlaceholder && credential.sourceNote && (
        <p className="mt-2.5 text-xs text-[#5B6870]/80 italic border-t border-[#A2AFB6]/20 pt-2">
          Note: {credential.sourceNote}
        </p>
      )}
    </div>
  );
}
