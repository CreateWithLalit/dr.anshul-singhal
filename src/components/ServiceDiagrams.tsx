import React from "react";

interface DiagramProps {
  slug: string;
  className?: string;
}

/**
 * 1. Wisdom Teeth: The Four Impaction Angles
 * (Vertical, Mesioangular, Distoangular, Horizontal)
 */
function WisdomTeethDiagram() {
  const angles = [
    { name: "Vertical", nameHi: "सीधा (Vertical)", desc: "Tooth oriented upright but blocked by bone or adjacent crown." },
    { name: "Mesioangular", nameHi: "आगे झुका हुआ (Mesioangular)", desc: "Most common: tilted forward toward the second molar." },
    { name: "Distoangular", nameHi: "पीछे झुका हुआ (Distoangular)", desc: "Tilted backward toward the ramus of the jaw." },
    { name: "Horizontal", nameHi: "समानांतर (Horizontal)", desc: "Lying completely flat at 90 degrees against adjacent tooth." },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {angles.map((ang, i) => (
          <div key={ang.name} className="bg-white rounded-[12px] border border-[#E4DFD6] p-3.5 flex flex-col items-center text-center">
            <svg viewBox="0 0 100 90" className="w-20 h-20 mb-2 stroke-[#0F5C63]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {/* Gum / alveolar bone baseline */}
              <path d="M10 75 Q50 68 90 75" stroke="#D9C7A8" strokeWidth="2.2" />
              {/* Second molar (reference) */}
              <rect x="20" y="38" width="22" height="34" rx="4" fill="#DCEBEA" fillOpacity="0.4" />
              <path d="M25 45 Q31 50 37 45" />

              {/* Wisdom tooth in 4 impaction positions */}
              {i === 0 && (
                // Vertical
                <g>
                  <rect x="52" y="38" width="22" height="34" rx="4" fill="#0F5C63" fillOpacity="0.12" strokeWidth="1.8" />
                  <path d="M57 45 Q63 50 69 45" />
                  <path d="M63 38 L63 24 M59 28 L63 24 L67 28" stroke="#0F5C63" strokeWidth="1.4" />
                </g>
              )}
              {i === 1 && (
                // Mesioangular (tilted forward ~45 deg)
                <g transform="rotate(-35 60 55)">
                  <rect x="50" y="38" width="22" height="34" rx="4" fill="#0F5C63" fillOpacity="0.12" strokeWidth="1.8" />
                  <path d="M55 45 Q61 50 67 45" />
                  <path d="M61 38 L61 24 M57 28 L61 24 L65 28" stroke="#0F5C63" strokeWidth="1.4" />
                </g>
              )}
              {i === 2 && (
                // Distoangular (tilted backward ~35 deg)
                <g transform="rotate(35 65 55)">
                  <rect x="52" y="38" width="22" height="34" rx="4" fill="#0F5C63" fillOpacity="0.12" strokeWidth="1.8" />
                  <path d="M57 45 Q63 50 69 45" />
                  <path d="M63 38 L63 24 M59 28 L63 24 L67 28" stroke="#0F5C63" strokeWidth="1.4" />
                </g>
              )}
              {i === 3 && (
                // Horizontal (90 deg)
                <g transform="rotate(-85 64 56)">
                  <rect x="50" y="38" width="22" height="34" rx="4" fill="#0F5C63" fillOpacity="0.12" strokeWidth="1.8" />
                  <path d="M55 45 Q61 50 67 45" />
                  <path d="M61 38 L61 24 M57 28 L61 24 L65 28" stroke="#0F5C63" strokeWidth="1.4" />
                </g>
              )}
            </svg>
            <p className="font-serif text-sm text-[#16232B] font-semibold mb-1">{ang.name}</p>
            <p className="text-[11px] text-[#5B6870] leading-tight">{ang.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 2. Facial Injury: Mandible Fracture Line & Fixation Mini-Plate
 */
function FacialInjuryDiagram() {
  return (
    <div className="bg-white rounded-[12px] border border-[#E4DFD6] p-6 max-w-xl mx-auto">
      <svg viewBox="0 0 360 210" className="w-full h-auto stroke-[#0F5C63]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {/* Mandibular arch outline */}
        <path
          d="M 50 60 C 70 120 100 170 180 175 C 260 170 290 120 310 60 L 290 55 C 275 105 245 150 180 154 C 115 150 85 105 70 55 Z"
          fill="#DCEBEA"
          fillOpacity="0.3"
          stroke="#0F5C63"
          strokeWidth="1.8"
        />

        {/* Anatomical condylar and coronoid processes */}
        <path d="M 50 60 C 45 40 48 30 55 25 C 62 20 68 28 66 42" strokeWidth="1.5" />
        <path d="M 310 60 C 315 40 312 30 305 25 C 298 20 292 28 294 42" strokeWidth="1.5" />

        {/* Teeth outline atop ridge */}
        <path d="M 120 145 C 140 148 180 150 220 146" stroke="#D9C7A8" strokeWidth="2.5" />

        {/* Fracture line across left parasymphysis / body */}
        <path d="M 128 128 L 134 142 L 126 155 L 132 172" stroke="#B3392F" strokeWidth="2" strokeDasharray="3 2" />

        {/* Titanium mini-plate bridging fracture */}
        <rect x="110" y="146" width="46" height="11" rx="4" fill="#0F5C63" stroke="#0F5C63" strokeWidth="1.6" />
        {/* 4 screw holes */}
        <circle cx="116" cy="151.5" r="2.2" fill="#FAF8F4" stroke="#0F5C63" strokeWidth="1.2" />
        <circle cx="126" cy="151.5" r="2.2" fill="#FAF8F4" stroke="#0F5C63" strokeWidth="1.2" />
        <circle cx="140" cy="151.5" r="2.2" fill="#FAF8F4" stroke="#0F5C63" strokeWidth="1.2" />
        <circle cx="150" cy="151.5" r="2.2" fill="#FAF8F4" stroke="#0F5C63" strokeWidth="1.2" />

        {/* Callout pointers & labels */}
        <line x1="130" y1="126" x2="165" y2="105" stroke="#9BA7AE" strokeWidth="1" strokeDasharray="2 2" />
        <text x="170" y="107" fill="#B3392F" fontSize="11" fontFamily="sans-serif" fontWeight="600">Fracture Line</text>

        <line x1="146" y1="158" x2="175" y2="178" stroke="#9BA7AE" strokeWidth="1" strokeDasharray="2 2" />
        <text x="180" y="182" fill="#0F5C63" fontSize="11" fontFamily="sans-serif" fontWeight="600">Osteosynthesis Mini-Plate & Screws</text>
      </svg>
      <div className="mt-4 pt-3 border-t border-[#E4DFD6] flex items-center justify-between text-xs text-[#5B6870]">
        <span>Anatomical reduction principle</span>
        <span className="font-medium text-[#0F5C63]">Rigid internal fixation</span>
      </div>
    </div>
  );
}

/**
 * 3. Dental Implants: Fixture, Abutment, and Crown Anatomy
 */
function DentalImplantsDiagram() {
  return (
    <div className="bg-white rounded-[12px] border border-[#E4DFD6] p-6 max-w-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        <div className="sm:col-span-6 flex justify-center">
          <svg viewBox="0 0 160 240" className="w-36 h-auto stroke-[#0F5C63]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {/* Crown (Prosthetic Tooth) */}
            <path
              d="M 55 70 C 50 45 60 20 80 18 C 100 20 110 45 105 70 Z"
              fill="#DCEBEA"
              fillOpacity="0.6"
              stroke="#0F5C63"
              strokeWidth="1.8"
            />
            <path d="M 68 35 Q 80 42 92 35" stroke="#0F5C63" strokeWidth="1.2" />

            {/* Gumline (Gingiva) */}
            <path d="M 20 80 C 45 92 115 92 140 80" stroke="#D9C7A8" strokeWidth="2.4" />

            {/* Abutment (Connector) */}
            <path
              d="M 68 70 L 65 92 L 95 92 L 92 70 Z"
              fill="#D9C7A8"
              fillOpacity="0.5"
              stroke="#9E5A20"
              strokeWidth="1.6"
            />

            {/* Jawbone outline */}
            <path
              d="M 25 85 C 30 115 30 190 25 220 L 135 220 C 130 190 130 115 135 85 Z"
              fill="#FAF5EE"
              stroke="#E8DAC6"
              strokeWidth="1.4"
            />

            {/* Implant Fixture (Titanium Screw in bone) */}
            <rect x="68" y="92" width="24" height="95" rx="3" fill="#DCEBEA" fillOpacity="0.8" stroke="#0F5C63" strokeWidth="1.8" />
            {/* Thread ridges */}
            <line x1="62" y1="110" x2="98" y2="110" strokeWidth="1.8" />
            <line x1="62" y1="124" x2="98" y2="124" strokeWidth="1.8" />
            <line x1="62" y1="138" x2="98" y2="138" strokeWidth="1.8" />
            <line x1="62" y1="152" x2="98" y2="152" strokeWidth="1.8" />
            <line x1="64" y1="166" x2="96" y2="166" strokeWidth="1.8" />
            <line x1="68" y1="180" x2="92" y2="180" strokeWidth="1.8" />
          </svg>
        </div>

        <div className="sm:col-span-6 space-y-4">
          <div className="p-3 rounded-lg bg-[#F3F8F8] border border-[#CFE3E3]">
            <p className="text-xs font-bold text-[#0F5C63] uppercase tracking-wider">1. Custom Crown</p>
            <p className="text-xs text-[#5B6870]">The visible, natural-looking tooth custom shaded to match your smile.</p>
          </div>
          <div className="p-3 rounded-lg bg-[#FAF5EE] border border-[#E8DAC6]">
            <p className="text-xs font-bold text-[#9E5A20] uppercase tracking-wider">2. Precision Abutment</p>
            <p className="text-xs text-[#5B6870]">The solid titanium connector joining crown securely to implant.</p>
          </div>
          <div className="p-3 rounded-lg bg-[#F3F6FA] border border-[#CFDCED]">
            <p className="text-xs font-bold text-[#1D4A6E] uppercase tracking-wider">3. Biocompatible Fixture</p>
            <p className="text-xs text-[#5B6870]">Surgically placed root replica integrating naturally with bone (osseointegration).</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Geriatric Dentistry: Full-Arch Gentle Preservation Outline
 */
function GeriatricDentistryDiagram() {
  const points = [
    { title: "Root Surface Care", desc: "Targeted protection against exposed root caries and sensitivity." },
    { title: "Gingival Health", desc: "Gentle maintenance preserving attachment and soft tissue comfort." },
    { title: "Salivary & Medication Adaptation", desc: "Management tailored to systemic health and dry mouth (xerostomia)." },
    { title: "Bite & Chewing Stability", desc: "Ensuring comfortable nutritional chewing without complex strain." },
  ];

  return (
    <div className="bg-white rounded-[12px] border border-[#E4DFD6] p-6 max-w-xl mx-auto space-y-6">
      <div className="flex justify-center">
        <svg viewBox="0 0 280 140" className="w-56 h-auto stroke-[#0F5C63]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {/* Gentle arch horseshoe */}
          <path d="M 40 120 C 40 30 240 30 240 120" stroke="#0F5C63" strokeWidth="2.4" fill="#DCEBEA" fillOpacity="0.25" />
          {/* Arch teeth markers */}
          {[60, 80, 105, 140, 175, 200, 220].map((cx, idx) => (
            <circle key={idx} cx={cx} cy={cx <= 140 ? 40 + (140 - cx) * 0.4 : 40 + (cx - 140) * 0.4} r="7" fill="#FFFFFF" stroke="#0F5C63" strokeWidth="1.5" />
          ))}
          {/* Care focus halos */}
          <circle cx="140" cy="40" r="14" stroke="#D9C7A8" strokeWidth="1.8" strokeDasharray="3 3" />
          <circle cx="80" cy="64" r="14" stroke="#D9C7A8" strokeWidth="1.8" strokeDasharray="3 3" />
          <circle cx="200" cy="64" r="14" stroke="#D9C7A8" strokeWidth="1.8" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#E4DFD6]">
        {points.map((p, i) => (
          <div key={i} className="flex items-start gap-2.5 text-left">
            <span className="w-5 h-5 rounded-full bg-[#DCEBEA] text-[#0F5C63] text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
              {i + 1}
            </span>
            <div>
              <p className="text-xs font-semibold text-[#16232B]">{p.title}</p>
              <p className="text-[11px] text-[#5B6870] leading-snug">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 5. Full-Mouth Rehabilitation: Upper & Lower Arch Stepwise Plan
 */
function FullMouthRehabDiagram() {
  const phases = [
    { phase: "Phase 1: Foundation", focus: "Periodontal stabilization, symptom relief, and diagnostic bite records." },
    { phase: "Phase 2: Reconstruction", focus: "Precise vertical dimension restoration, implant or crown placement." },
    { phase: "Phase 3: Harmony", focus: "Balanced bilateral mastication, joint comfort, and long-term protective splint." },
  ];

  return (
    <div className="bg-white rounded-[12px] border border-[#E4DFD6] p-6 max-w-xl mx-auto space-y-6">
      <div className="flex justify-center items-center gap-6">
        <svg viewBox="0 0 240 130" className="w-48 h-auto stroke-[#0F5C63]" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {/* Upper arch */}
          <path d="M 30 60 C 30 15 210 15 210 60" stroke="#0F5C63" strokeWidth="2.2" fill="#DCEBEA" fillOpacity="0.3" />
          {/* Lower arch */}
          <path d="M 40 70 C 40 115 200 115 200 70" stroke="#1D4A6E" strokeWidth="2.2" fill="#DFEBF6" fillOpacity="0.3" />
          {/* Center bite alignment axis */}
          <line x1="120" y1="10" x2="120" y2="120" stroke="#D9C7A8" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="space-y-2.5 pt-2 border-t border-[#E4DFD6]">
        {phases.map((ph, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-[#FAF8F4] border border-[#E4DFD6] flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#0F5C63] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <div>
              <p className="text-xs font-bold text-[#16232B]">{ph.phase}</p>
              <p className="text-xs text-[#5B6870] leading-relaxed">{ph.focus}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServiceDiagram({ slug, className = "" }: DiagramProps) {
  let content = null;
  let title = "Clinical Anatomical Overview";

  switch (slug) {
    case "wisdom-teeth":
      title = "The Four Primary Impaction Angles";
      content = <WisdomTeethDiagram />;
      break;
    case "facial-injury":
      title = "Mandibular Fracture & Mini-Plate Fixation";
      content = <FacialInjuryDiagram />;
      break;
    case "dental-implants":
      title = "Anatomy of an Implant Restoration";
      content = <DentalImplantsDiagram />;
      break;
    case "geriatric-dentistry":
      title = "Full-Arch Preventive Preservation Plan";
      content = <GeriatricDentistryDiagram />;
      break;
    case "full-mouth-rehabilitation":
      title = "Stepwise Dual-Arch Functional Plan";
      content = <FullMouthRehabDiagram />;
      break;
    default:
      return null;
  }

  return (
    <section className={`rounded-[16px] bg-[#FAF8F4] border border-[#E4DFD6] p-6 sm:p-8 text-center ${className}`}>
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0F5C63] bg-[#DCEBEA] px-2.5 py-1 rounded-full">
          Illustration
        </span>
        <span className="text-[11px] text-[#5B6870] italic">
          Illustration for education
        </span>
      </div>

      <h3 className="font-serif text-xl sm:text-2xl text-[#16232B] font-normal mb-2">
        {title}
      </h3>
      <p className="text-xs text-[#5B6870] max-w-md mx-auto mb-6">
        Simplified schematic designed to explain anatomical principles. Does not replace an individual diagnostic scan or doctor consultation.
      </p>

      {content}

      <p className="text-[10px] text-[#9BA7AE] mt-4">
        Educational diagram · Clinical content subject to formal surgical verification
      </p>
    </section>
  );
}
