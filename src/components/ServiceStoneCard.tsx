import React from "react";
import Link from "next/link";
import type { Service, ServicePillar } from "@/lib/content/types";
import {
  JawSkullIcon,
  DentalImplantIcon,
  ToothIcon,
  FaceProfileIcon,
} from "./illustrations";

const PILLAR_ICONS: Record<ServicePillar, React.ReactNode> = {
  maxillofacial: <JawSkullIcon size={26} strokeWidth={1.4} />,
  implantology: <DentalImplantIcon size={26} strokeWidth={1.4} />,
  geriatric: <ToothIcon size={26} strokeWidth={1.4} />,
  rehabilitation: <FaceProfileIcon size={26} strokeWidth={1.4} />,
};

interface StonePalette {
  name: string;
  borderRadius: string;
  hoverBorderRadius: string;
  defaultBg: string;
  defaultBorder: string;
  hoverBg: string;
  hoverBorder: string;
  hoverShadow: string;
  defaultPillarColor: string;
  hoverPillarColor: string;
  defaultIconBg: string;
  defaultIconColor: string;
  hoverIconBg: string;
  hoverIconColor: string;
}

const STONE_PALETTES: StonePalette[] = [
  // 0: Polished Teal Jade Stone (Maxillofacial)
  {
    name: "teal-jade",
    borderRadius: "44px 28px 46px 26px / 28px 46px 26px 44px",
    hoverBorderRadius: "40px 32px 42px 30px / 32px 42px 30px 40px",
    defaultBg: "bg-[#F3F8F8]",
    defaultBorder: "border-[#CFE3E3]",
    hoverBg: "hover:bg-[#0F5C63]",
    hoverBorder: "hover:border-[#0B464C]",
    hoverShadow: "hover:shadow-[0_20px_38px_-6px_rgba(15,92,99,0.32)]",
    defaultPillarColor: "text-[#0F5C63]",
    hoverPillarColor: "group-hover:text-[#D9C7A8]",
    defaultIconBg: "bg-[#DCEBEA]",
    defaultIconColor: "text-[#0F5C63]",
    hoverIconBg: "group-hover:bg-white/20",
    hoverIconColor: "group-hover:text-white",
  },
  // 1: Ocean Slate Blue Stone (Implantology)
  {
    name: "ocean-slate",
    borderRadius: "28px 48px 24px 44px / 44px 26px 46px 28px",
    hoverBorderRadius: "32px 44px 28px 40px / 40px 30px 42px 32px",
    defaultBg: "bg-[#F3F6FA]",
    defaultBorder: "border-[#CFDCED]",
    hoverBg: "hover:bg-[#1D4A6E]",
    hoverBorder: "hover:border-[#14354F]",
    hoverShadow: "hover:shadow-[0_20px_38px_-6px_rgba(29,74,110,0.32)]",
    defaultPillarColor: "text-[#1D4A6E]",
    hoverPillarColor: "group-hover:text-[#A8D4E6]",
    defaultIconBg: "bg-[#DFEBF6]",
    defaultIconColor: "text-[#1D4A6E]",
    hoverIconBg: "group-hover:bg-white/20",
    hoverIconColor: "group-hover:text-white",
  },
  // 2: Warm Amber / Terracotta River Pebble (Geriatric)
  {
    name: "warm-amber",
    borderRadius: "46px 24px 42px 32px / 28px 46px 30px 44px",
    hoverBorderRadius: "42px 28px 38px 34px / 32px 42px 34px 40px",
    defaultBg: "bg-[#FAF5EE]",
    defaultBorder: "border-[#E8DAC6]",
    hoverBg: "hover:bg-[#B66827]",
    hoverBorder: "hover:border-[#94521C]",
    hoverShadow: "hover:shadow-[0_20px_38px_-6px_rgba(182,104,39,0.32)]",
    defaultPillarColor: "text-[#9E5A20]",
    hoverPillarColor: "group-hover:text-[#FCECD8]",
    defaultIconBg: "bg-[#F5E8D6]",
    defaultIconColor: "text-[#9E5A20]",
    hoverIconBg: "group-hover:bg-white/20",
    hoverIconColor: "group-hover:text-white",
  },
  // 3: Polished Basalt / River Granite (Rehabilitation)
  {
    name: "river-basalt",
    borderRadius: "32px 44px 28px 46px / 42px 28px 44px 28px",
    hoverBorderRadius: "36px 40px 32px 42px / 38px 32px 40px 32px",
    defaultBg: "bg-[#F5F6F7]",
    defaultBorder: "border-[#D6DCDE]",
    hoverBg: "hover:bg-[#334752]",
    hoverBorder: "hover:border-[#24333B]",
    hoverShadow: "hover:shadow-[0_20px_38px_-6px_rgba(51,71,82,0.32)]",
    defaultPillarColor: "text-[#334752]",
    hoverPillarColor: "group-hover:text-[#D9C7A8]",
    defaultIconBg: "bg-[#E1E7E9]",
    defaultIconColor: "text-[#334752]",
    hoverIconBg: "group-hover:bg-white/20",
    hoverIconColor: "group-hover:text-white",
  },
];

interface ServiceStoneCardProps {
  service: Service;
  index: number;
  showStatusBadge?: boolean;
  actionLabel?: string;
  className?: string;
}

export function ServiceStoneCard({
  service,
  index,
  showStatusBadge = false,
  actionLabel = "Learn more",
  className = "",
}: ServiceStoneCardProps) {
  const palette = STONE_PALETTES[index % STONE_PALETTES.length];
  const icon = PILLAR_ICONS[service.pillar] ?? <ToothIcon size={26} strokeWidth={1.4} />;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative flex flex-col justify-between p-7 sm:p-8 border shadow-[0_4px_18px_rgba(22,35,43,0.04)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.012] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0F5C63] overflow-hidden select-none ${palette.defaultBg} ${palette.defaultBorder} ${palette.hoverBg} ${palette.hoverBorder} ${palette.hoverShadow} ${className}`}
      style={{
        borderRadius: palette.borderRadius,
      }}
    >
      {/* Polished stone sheen overlay (specular reflection on smooth pebble) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.25)_40%,transparent_70%)] opacity-90 group-hover:opacity-20 transition-opacity duration-500"
        aria-hidden
      />

      {/* Soft bottom water-reflection vignette */}
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-black/[0.02] group-hover:bg-white/[0.06] transition-colors duration-500"
        aria-hidden
      />

      {/* Card Content Top */}
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-4">
          {/* Pebble-shaped icon badge */}
          <div
            className={`w-12 h-12 rounded-[14px_10px_16px_12px/12px_16px_10px_14px] flex items-center justify-center transition-all duration-400 group-hover:scale-105 shadow-xs ${palette.defaultIconBg} ${palette.defaultIconColor} ${palette.hoverIconBg} ${palette.hoverIconColor}`}
          >
            {icon}
          </div>

          {/* Optional status badge */}
          {showStatusBadge && (
            <span className="text-[10px] font-medium tracking-wide border border-dashed border-[#A2AFB6]/60 bg-white/70 text-[#5B6870] px-2.5 py-1 rounded-full group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40 transition-colors duration-400">
              {service.status === "to-confirm" ? "To confirm" : "Offered"}
            </span>
          )}
        </div>

        {/* Category / Pillar Label */}
        <p
          className={`text-[10px] uppercase font-bold tracking-[0.14em] mb-1.5 transition-colors duration-400 ${palette.defaultPillarColor} ${palette.hoverPillarColor}`}
        >
          {service.pillarLabel}
        </p>

        {/* Title */}
        <h3 className="font-serif text-xl sm:text-[1.28rem] font-normal text-[#16232B] group-hover:text-white transition-colors duration-400 leading-snug mb-3">
          {service.title}
        </h3>

        {/* Short Summary */}
        <p className="text-sm text-[#5B6870] group-hover:text-white/90 transition-colors duration-400 leading-relaxed line-clamp-3">
          {service.shortSummary}
        </p>
      </div>

      {/* Card Footer / Action Link */}
      <div className="relative z-10 pt-6 mt-4 border-t border-black/[0.06] group-hover:border-white/15 transition-colors duration-400 flex items-center justify-between">
        <span
          className={`text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${palette.defaultPillarColor} group-hover:text-white`}
        >
          <span>{actionLabel}</span>
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

        {/* Subtle stone indicator dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-black/15 group-hover:bg-white/50 transition-colors duration-400" />
      </div>
    </Link>
  );
}
