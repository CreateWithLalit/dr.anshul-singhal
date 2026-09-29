import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

// 1. Tooth
export function ToothIcon({
  size = 24,
  className = "",
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`monoline-svg ${className}`}
      {...props}
    >
      <path d="M12 2C8.5 2 6 4 6 7c0 2.5 1 5 1.5 8 .5 3 1.5 7 4.5 7s2-4 2-6c0 2-1 6 2 6s4-4 4.5-7c.5-3 1.5-5.5 1.5-8 0-3-2.5-5-6-5z" />
      <path d="M9 7c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
    </svg>
  );
}

// 2. Dental Implant
export function DentalImplantIcon({
  size = 24,
  className = "",
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`monoline-svg ${className}`}
      {...props}
    >
      {/* Crown abutment */}
      <path d="M7 3h10v4c0 1.5-2 3-5 3s-5-1.5-5-3V3z" />
      {/* Implant collar & screw threads */}
      <line x1="9" y1="10" x2="15" y2="10" />
      <path d="M9 10v10c0 1 1.5 2 3 2s3-1 3-2V10" />
      <line x1="8.5" y1="13" x2="15.5" y2="13" />
      <line x1="9" y1="16" x2="15" y2="16" />
      <line x1="10" y1="19" x2="14" y2="19" />
    </svg>
  );
}

// 3. Jaw / Skull Outline
export function JawSkullIcon({
  size = 24,
  className = "",
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`monoline-svg ${className}`}
      {...props}
    >
      <circle cx="12" cy="9" r="7" />
      <path d="M7 13.5v2.5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.5" />
      <line x1="10" y1="18" x2="10" y2="21" />
      <line x1="14" y1="18" x2="14" y2="21" />
      <path d="M9 21h6" />
      <circle cx="9.5" cy="9.5" r="1.2" fill="currentColor" />
      <circle cx="14.5" cy="9.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

// 4. Face Profile
export function FaceProfileIcon({
  size = 24,
  className = "",
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`monoline-svg ${className}`}
      {...props}
    >
      <path d="M16 3c-4.5 0-7 2.5-7 5.5v1L6 11l3 1.5c.3 1.2 1 2.5 2 3.5l-1 2.5c2.5 1.5 5 1.5 7 0" />
      <path d="M12 21h5c2 0 3-1 3-3V7c0-2.5-1.5-4-4-4" />
      <circle cx="11.5" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}

// 5. Hero Clinic Room Scene (Monoline architectural scene with draw paths)
export function ClinicHeroIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      stroke="#0F5C63"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-full h-auto monoline-svg ${className}`}
    >
      {/* Background architectural window & daylight beam */}
      <rect
        x="60"
        y="30"
        width="140"
        height="180"
        rx="8"
        stroke="#E4DFD6"
        strokeDasharray="4 4"
      />
      <line x1="130" y1="30" x2="130" y2="210" stroke="#E4DFD6" strokeDasharray="4 4" />
      <line x1="60" y1="120" x2="200" y2="120" stroke="#E4DFD6" strokeDasharray="4 4" />

      {/* Floor baseline hairline */}
      <line x1="30" y1="280" x2="450" y2="280" stroke="#16232B" strokeWidth="1.8" />

      {/* Specialist Surgical / Examination Chair */}
      {/* Base */}
      <ellipse cx="270" cy="275" rx="45" ry="5" fill="#DCEBEA" stroke="#0F5C63" />
      <line x1="270" y1="270" x2="270" y2="210" strokeWidth="2.4" />
      {/* Hydraulic bracket */}
      <path d="M255 210h30l-10 20h-10z" fill="#DCEBEA" />
      {/* Seat */}
      <path d="M230 190h70a8 8 0 0 1 8 8v6h-86v-6a8 8 0 0 1 8-8z" fill="#DCEBEA" />
      {/* Backrest angled */}
      <path d="M298 190l40-60a6 6 0 0 1 8-2l6 4a6 6 0 0 1 2 8l-40 60" fill="#FAF8F4" />
      {/* Headrest */}
      <rect x="345" y="115" width="20" height="28" rx="5" transform="rotate(30 345 115)" fill="#DCEBEA" />
      {/* Leg rest */}
      <path d="M222 204l-25 40a5 5 0 0 0 1 6l4 3a5 5 0 0 0 6-1l24-38" fill="#FAF8F4" />

      {/* Modern overhead surgical luminaire */}
      <line x1="410" y1="30" x2="410" y2="120" strokeWidth="1.8" />
      <path d="M410 120c-30 0-40 20-70 20" strokeWidth="1.8" />
      <ellipse cx="325" cy="142" rx="28" ry="10" transform="rotate(-15 325 142)" fill="#DCEBEA" />
      {/* Soft luminaire light cone */}
      <path
        d="M300 148L240 250h80l-10-104"
        fill="#FAF8F4"
        opacity="0.4"
        stroke="#D9C7A8"
        strokeDasharray="2 3"
      />

      {/* Precision Diagnostic Screen / Console */}
      <rect x="375" y="170" width="60" height="42" rx="4" fill="#FAF8F4" />
      <line x1="405" y1="212" x2="405" y2="275" strokeWidth="1.5" />
      <ellipse cx="405" cy="275" rx="18" ry="4" fill="#DCEBEA" />
      {/* 3D Anatomical waveform graphic on screen */}
      <path d="M385 192h8l4-8 6 16 6-12 4 4h12" stroke="#0F5C63" strokeWidth="1.2" />

      {/* Sterile Instrument Tray */}
      <rect x="150" y="215" width="55" height="6" rx="2" fill="#DCEBEA" />
      <line x1="177" y1="221" x2="177" y2="280" strokeWidth="1.4" />
      <ellipse cx="177" cy="280" rx="14" ry="3" fill="#E4DFD6" />
    </svg>
  );
}

// 6. Tooth Gap to Implant Sequence (Sample Before / After Illustration)
export function ToothSequenceIllustration({
  step = "after",
  className = "",
}: {
  step?: "before" | "after";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      stroke="#0F5C63"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-full h-auto monoline-svg ${className}`}
    >
      {/* Gingiva / Bone Ridge Baseline */}
      <path
        d="M20 120c30-5 60-15 120-15s90 10 120 15"
        stroke="#D9C7A8"
        strokeWidth="2"
      />
      <rect x="20" y="120" width="240" height="45" fill="#DCEBEA" opacity="0.3" stroke="none" />

      {/* Natural Adjacent Tooth Left */}
      <path
        d="M50 120V75c0-10 6-18 16-18s16 8 16 18v45"
        fill="#FFFFFF"
      />
      <line x1="66" y1="75" x2="66" y2="90" stroke="#A2AFB6" strokeWidth="1" />

      {/* Natural Adjacent Tooth Right */}
      <path
        d="M198 120V75c0-10 6-18 16-18s16 8 16 18v45"
        fill="#FFFFFF"
      />
      <line x1="214" y1="75" x2="214" y2="90" stroke="#A2AFB6" strokeWidth="1" />

      {/* Center Position: Gap (before) vs Restored Implant Crown (after) */}
      {step === "before" ? (
        <g>
          {/* Missing tooth gap with dashed outline indicating planned site */}
          <path
            d="M124 120v-35c0-8 6-14 16-14s16 6 16 14v35"
            stroke="#A2AFB6"
            strokeDasharray="4 4"
          />
          <text
            x="140"
            y="95"
            textAnchor="middle"
            fill="#5B6870"
            fontSize="10"
            fontFamily="sans-serif"
            letterSpacing="0.5"
            stroke="none"
          >
            Missing Tooth Site
          </text>
        </g>
      ) : (
        <g>
          {/* Implant Fixture embedded in bone */}
          <line x1="133" y1="120" x2="147" y2="120" strokeWidth="2" />
          <path d="M135 120v28c0 3 2 5 5 5s5-2 5-5v-28" fill="#FAF8F4" />
          <line x1="134" y1="128" x2="146" y2="128" strokeWidth="1.2" />
          <line x1="135" y1="136" x2="145" y2="136" strokeWidth="1.2" />
          <line x1="137" y1="144" x2="143" y2="144" strokeWidth="1.2" />

          {/* Abutment & Final Porcelain Crown */}
          <path
            d="M124 120V73c0-10 7-18 16-18s16 8 16 18v47"
            fill="#FFFFFF"
            stroke="#0F5C63"
            strokeWidth="2"
          />
          <circle cx="140" cy="78" r="1.5" fill="#0F5C63" />
        </g>
      )}
    </svg>
  );
}

// 7. Location Pin
export function LocationPinIcon({
  size = 24,
  className = "",
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`monoline-svg ${className}`}
      {...props}
    >
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

// 8. WhatsApp-style Chat Bubble (generic monoline, not brand logo)
export function ChatBubbleIcon({
  size = 24,
  className = "",
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`monoline-svg ${className}`}
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <circle cx="9" cy="11.5" r="0.75" fill="currentColor" />
      <circle cx="12" cy="11.5" r="0.75" fill="currentColor" />
      <circle cx="15" cy="11.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

// 9. Shield / Check (Verification)
export function ShieldCheckIcon({
  size = 24,
  className = "",
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`monoline-svg ${className}`}
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

// 10. Calendar
export function CalendarIcon({
  size = 24,
  className = "",
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`monoline-svg ${className}`}
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="14" x2="8.01" y2="14" strokeWidth={strokeWidth * 1.5} />
      <line x1="12" y1="14" x2="12.01" y2="14" strokeWidth={strokeWidth * 1.5} />
      <line x1="16" y1="14" x2="16.01" y2="14" strokeWidth={strokeWidth * 1.5} />
      <line x1="8" y1="18" x2="8.01" y2="18" strokeWidth={strokeWidth * 1.5} />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth={strokeWidth * 1.5} />
    </svg>
  );
}

// Emergency Phone Icon (convenience helper)
export function PhoneCallIcon({
  size = 24,
  className = "",
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`monoline-svg ${className}`}
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
