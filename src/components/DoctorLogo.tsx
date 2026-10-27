import React from "react";

interface DoctorLogoProps {
  className?: string;
  variant?: "default" | "light" | "compact";
  showSubtitle?: boolean;
}

export function DoctorLogo({
  className = "",
  variant = "default",
  showSubtitle = true,
}: DoctorLogoProps) {
  const isLight = variant === "light";
  const isCompact = variant === "compact";

  // Coordinates for orbital dots in a circular radial arrangement
  const dots = [
    { cx: 20, cy: 3, r: 1.6, opacity: 0.95 },
    { cx: 26, cy: 4.5, r: 1.8, opacity: 0.9 },
    { cx: 31.5, cy: 8, r: 2.0, opacity: 0.85 },
    { cx: 35.5, cy: 13, r: 2.1, opacity: 0.8 },
    { cx: 37, cy: 19, r: 2.2, opacity: 0.85 },
    { cx: 36, cy: 25.5, r: 2.0, opacity: 0.9 },
    { cx: 32.5, cy: 31, r: 1.8, opacity: 0.95 },
    { cx: 27.5, cy: 35, r: 1.7, opacity: 0.9 },
    { cx: 21.5, cy: 37, r: 1.6, opacity: 0.85 },
    { cx: 15.5, cy: 36.5, r: 1.5, opacity: 0.75 },
    { cx: 10, cy: 34, r: 1.4, opacity: 0.7 },
    { cx: 5.5, cy: 29.5, r: 1.4, opacity: 0.65 },
    { cx: 3, cy: 24, r: 1.5, opacity: 0.7 },
    { cx: 3, cy: 17.5, r: 1.6, opacity: 0.75 },
    { cx: 5, cy: 11.5, r: 1.7, opacity: 0.8 },
    { cx: 9, cy: 6.8, r: 1.8, opacity: 0.85 },
    { cx: 14, cy: 4, r: 1.7, opacity: 0.9 },
  ];

  return (
    <div
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}
      aria-label="Dr. Anshul Singhal - Oral & Maxillofacial Surgeon"
    >
      {/* Code-drawn SVG Emblem */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          className={isCompact ? "w-8 h-8" : "w-9 h-9 sm:w-10 sm:h-10"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orbital Dot Halo */}
          <g className="transition-transform duration-500 origin-center group-hover:rotate-12">
            {dots.map((dot, idx) => (
              <circle
                key={idx}
                cx={dot.cx}
                cy={dot.cy}
                r={dot.r}
                fill={idx % 3 === 0 ? "#C62828" : idx % 2 === 0 ? "#E07A5F" : "#D9C7A8"}
                opacity={dot.opacity}
              />
            ))}
          </g>

          {/* Central Stylized Surgical Precision Cross */}
          <g className="origin-center">
            <circle
              cx="20"
              cy="20"
              r="7.5"
              fill={isLight ? "#173650" : "#DCEBEA"}
              opacity="0.85"
            />
            <line
              x1="20"
              y1="14"
              x2="20"
              y2="26"
              stroke="#0F5C63"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <line
              x1="14"
              y1="20"
              x2="26"
              y2="20"
              stroke="#0F5C63"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="20" cy="20" r="1.6" fill="#F2A900" />
          </g>
        </svg>
      </div>

      {/* Code Typography */}
      <div className="flex flex-col min-w-0">
        <span
          className={`font-serif tracking-[-0.015em] font-medium leading-[1.12] whitespace-nowrap ${
            isCompact ? "text-[1.05rem] sm:text-[1.15rem]" : "text-[1.18rem] sm:text-[1.32rem]"
          } ${isLight ? "text-white" : "text-[#16232B] group-hover:text-[#0F5C63]"} transition-colors`}
        >
          Dr. Anshul Singhal
        </span>
        {showSubtitle && (
          <span
            className={`font-sans uppercase font-semibold tracking-[0.14em] text-[8px] sm:text-[9px] mt-0.5 leading-none ${
              isLight ? "text-[#D9C7A8]" : "text-[#0F5C63]"
            }`}
          >
            Oral &amp; Maxillofacial Surgeon
          </span>
        )}
      </div>
    </div>
  );
}
