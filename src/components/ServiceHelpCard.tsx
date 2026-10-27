import React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ContactLink } from "./ContactLink";

interface ServiceHelpCardProps {
  whatsApp?: string;
  whatsAppVerified?: boolean;
  className?: string;
}

export function ServiceHelpCard({
  whatsApp = "+91 00000 00000",
  whatsAppVerified = false,
  className = "",
}: ServiceHelpCardProps) {
  return (
    <ContactLink
      kind="whatsapp"
      value={whatsApp}
      verified={whatsAppVerified}
      serviceName="General guidance"
      containerClassName="w-full h-full flex"
      className={`group relative flex flex-col justify-between p-7 sm:p-8 border shadow-[0_4px_18px_rgba(22,35,43,0.04)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.012] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] overflow-hidden select-none bg-[#F2FAF5] border-[#C5E9D3] hover:bg-[#25D366] hover:border-[#1EB858] hover:shadow-[0_20px_38px_-6px_rgba(37,211,102,0.32)] text-left w-full h-full ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.25)_40%,transparent_70%)] opacity-90 group-hover:opacity-20 transition-opacity duration-500"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-black/[0.02] group-hover:bg-white/[0.06] transition-colors duration-500"
        aria-hidden
      />

      {/* Card Content Top */}
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="w-12 h-12 rounded-[14px_10px_16px_12px/12px_16px_10px_14px] flex items-center justify-center transition-all duration-400 group-hover:scale-105 shadow-xs bg-[#D7F5E3] text-[#128C7E] group-hover:bg-[#102B24]/10 group-hover:text-[#102B24]">
            <WhatsAppIcon size={24} />
          </div>

          <span className="text-[10px] font-medium tracking-wide border border-dashed border-[#1EB858]/60 bg-white/70 text-[#128C7E] px-2.5 py-1 rounded-full group-hover:bg-white/40 group-hover:text-[#102B24] group-hover:border-[#102B24]/30 transition-colors duration-400">
            Guidance
          </span>
        </div>

        <p className="text-[10px] uppercase font-bold tracking-[0.14em] mb-1.5 transition-colors duration-400 text-[#128C7E] group-hover:text-[#102B24]/90">
          Not sure where to start?
        </p>

        <h3 className="font-serif text-xl sm:text-[1.28rem] font-normal text-[#16232B] group-hover:text-[#102B24] transition-colors duration-400 leading-snug mb-3">
          Ask on WhatsApp
        </h3>

        <p className="text-sm text-[#5B6870] group-hover:text-[#102B24]/90 transition-colors duration-400 leading-relaxed">
          Describe your symptoms or dental concern. We will guide you to the right consultation pathway and specialist care.
        </p>
      </div>

      {/* Card Footer */}
      <div className="relative z-10 pt-6 mt-4 border-t border-black/[0.06] group-hover:border-[#102B24]/20 transition-colors duration-400 flex items-center justify-between w-full">
        <span className="text-sm font-semibold flex items-center gap-2 transition-all duration-300 text-[#128C7E] group-hover:text-[#102B24]">
          <span>Start consultation</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </span>

        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] group-hover:bg-[#102B24]/40 transition-colors duration-400" />
      </div>
    </ContactLink>
  );
}
