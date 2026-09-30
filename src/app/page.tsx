import React from "react";
import Link from "next/link";
import { HeroIllustration, CountUp, TimelineLine } from "./_home-animations";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import {
  JawSkullIcon,
  DentalImplantIcon,
  ToothIcon,
  FaceProfileIcon,
  ChatBubbleIcon,
  PhoneCallIcon,
  LocationPinIcon,
  CalendarIcon,
} from "@/components/illustrations";
import { getServices, getLocations, getSiteSettings } from "@/lib/content";
import { HomeActions } from "@/components/HomeActions";

const CARE_STEPS = [
  {
    n: "01",
    title: "First Contact",
    desc: "Use WhatsApp or phone to share a brief, non-clinical enquiry. Contact details will be verified before launch.",
  },
  {
    n: "02",
    title: "Specialist Consultation",
    desc: "A consultation is an opportunity to discuss concerns, available records, and next steps in plain language.",
  },
  {
    n: "03",
    title: "Diagnosis & Plan",
    desc: "If treatment is appropriate, planning can explain possible steps, recovery considerations, and cost factors.",
  },
  {
    n: "04",
    title: "Treatment & Follow-up",
    desc: "A confirmed care plan can include treatment, recovery guidance, and appropriate review points.",
  },
];

const SAMPLE_STATS = [
  { value: 4, suffix: " steps", label: "in every care journey" },
  { value: 3, suffix: " specialties", label: "under one surgical roof" },
  { value: 1, suffix: " goal", label: "clear, confident recovery" },
];

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  maxillofacial: <JawSkullIcon size={28} strokeWidth={1.4} />,
  implantology: <DentalImplantIcon size={28} strokeWidth={1.4} />,
  geriatric: <ToothIcon size={28} strokeWidth={1.4} />,
  rehabilitation: <FaceProfileIcon size={28} strokeWidth={1.4} />,
};

export default async function HomePage() {
  const [services, locations, settings] = await Promise.all([
    getServices(),
    getLocations(),
    getSiteSettings(),
  ]);

  const primaryLocation = locations.find((l) => l.isPrimary) || locations[0];

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FAF8F4] pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28">
        {/* Subtle background texture ring */}
        <div
          className="pointer-events-none absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(220,235,234,0.45) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-12 lg:items-center">
            {/* Left column */}
            <div className="lg:col-span-3 space-y-6 lg:space-y-8">
              {/* Specialty pill */}
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEBEA] text-[#0F5C63] text-xs font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F5C63]" />
                  Oral &amp; Maxillofacial Surgeon
                </div>
              </RevealOnScroll>

              {/* Name */}
              <RevealOnScroll delay={0.05}>
                <h1 className="font-serif text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] font-normal text-[#16232B] leading-[1.08] tracking-[-0.01em]">
                  Dr. Anshul
                  <br />
                  Singhal
                </h1>
              </RevealOnScroll>

              {/* Positioning line */}
              <RevealOnScroll delay={0.12}>
                <p className="text-lg sm:text-xl text-[#5B6870] leading-relaxed font-sans max-w-lg">
                  Specialist surgical care for the face, mouth, and jaws —
                  <em className="font-normal text-[#16232B] not-italic"> calm, transparent, and patient-first.</em>
                </p>
              </RevealOnScroll>

              {/* CTA buttons */}
              <RevealOnScroll delay={0.18}>
                <HomeActions phone={settings.defaultPhone} whatsApp={settings.defaultWhatsApp} />
                <p className="mt-2 text-[11px] text-[#9BA7AE] font-sans">
                  Contact details are placeholder — confirm before launch.
                </p>
              </RevealOnScroll>
            </div>

            {/* Right column — animated illustration */}
            <div className="lg:col-span-2 mt-12 lg:mt-0 flex items-center justify-center">
              <div className="w-full max-w-[320px] lg:max-w-none">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE PILLARS ─────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24 border-t border-[#E4DFD6]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-2">
                  Surgical Expertise
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#16232B] font-normal">
                  Areas of Specialist Care
                </h2>
              </div>
              <p className="text-xs text-[#9BA7AE] max-w-xs border border-dashed border-[#A2AFB6]/50 px-3 py-2 rounded-lg bg-[#DCEBEA]/10">
                Services to be confirmed with Dr. Singhal.
              </p>
            </div>
          </RevealOnScroll>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {services.map((svc) => (
              <StaggerItem key={svc.slug}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex flex-col gap-4 p-6 bg-[#FAF8F4] border border-[#E4DFD6] rounded-[12px] hover:border-[#0F5C63]/30 hover:shadow-[0_8px_24px_rgba(15,92,99,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-[10px] bg-[#DCEBEA] flex items-center justify-center text-[#0F5C63]">
                    {PILLAR_ICONS[svc.pillar] ?? <ToothIcon size={24} strokeWidth={1.4} />}
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-[#5B6870] mb-1.5">
                      {svc.pillarLabel}
                    </p>
                    <h3 className="font-serif text-lg text-[#16232B] font-normal leading-snug mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#5B6870] leading-relaxed line-clamp-3">
                      {svc.shortSummary}
                    </p>
                  </div>
                  <span className="text-[#0F5C63] text-sm font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                    </svg>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── HOW CARE WORKS ──────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div className="mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-2">
                4 Steps in Your Care Journey
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#16232B] font-normal">
                How Care Works
              </h2>
            </div>
          </RevealOnScroll>

          <div className="relative">
            <TimelineLine />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {CARE_STEPS.map((step, i) => (
                <StaggerItem key={step.n}>
                  <div className="flex flex-col gap-4">
                    {/* Step number circle */}
                    <div className="flex items-center gap-4 md:block">
                      <div className="w-14 h-14 md:w-12 md:h-12 rounded-full bg-white border-2 border-[#0F5C63] flex items-center justify-center flex-shrink-0 md:mb-6 shadow-[0_0_0_4px_#FAF8F4]">
                        <span className="font-serif text-[#0F5C63] text-sm font-normal">
                          {step.n}
                        </span>
                      </div>
                      {/* Mobile vertical connector */}
                      {i < CARE_STEPS.length - 1 && (
                        <div className="md:hidden flex-1 h-px bg-[#E4DFD6]" aria-hidden />
                      )}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#16232B] font-normal mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#5B6870] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────── */}
      <section className="bg-[#16232B] py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-end mb-6">
            <span className="text-[10px] text-[#9BA7AE] border border-[#2C3B45] px-3 py-1 rounded-full">
              Sample figures — illustrative only
            </span>
          </div>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center sm:text-left">
            {SAMPLE_STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="flex flex-col gap-1">
                  <p className="font-serif text-[3rem] sm:text-[3.5rem] font-normal text-white leading-none">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-[#9BA7AE] capitalize">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── EMERGENCY BAND ───────────────────────────────────── */}
      <section className="bg-[#B3392F]/10 border-y border-[#B3392F]/20 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#B3392F]/15 flex items-center justify-center flex-shrink-0">
              <PhoneCallIcon size={20} strokeWidth={1.8} className="text-[#B3392F]" />
            </div>
            <div>
              <p className="font-serif text-lg text-[#16232B] font-normal">
                Facing facial trauma or a dental emergency?
              </p>
              <p className="text-sm text-[#5B6870] mt-0.5">
                Emergency trauma is assessed as a priority. Call immediately.
              </p>
            </div>
          </div>
          <a
            href={`tel:${settings.emergencyCallNumber}`}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#B3392F] text-white font-medium text-sm hover:bg-[#922e26] transition-colors flex-shrink-0 active:scale-[0.98]"
          >
            <PhoneCallIcon size={16} strokeWidth={2} className="text-white" />
            Emergency Call
          </a>
        </div>
      </section>

      {/* ─── LOCATION CARD ────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24 border-b border-[#E4DFD6]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div className="mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-2">
                Consultation Suite
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#16232B] font-normal">
                Where We Meet
              </h2>
            </div>
          </RevealOnScroll>

          {primaryLocation && (
            <RevealOnScroll delay={0.1}>
              <div className="max-w-2xl bg-[#FAF8F4] rounded-[16px] border border-[#E4DFD6] overflow-hidden">
                {/* Map placeholder */}
                <div className="h-44 sm:h-52 bg-[#DCEBEA]/40 flex items-center justify-center relative border-b border-[#E4DFD6]">
                  <div className="text-center space-y-2">
                    <LocationPinIcon size={32} className="text-[#0F5C63] mx-auto" />
                    <p className="text-xs text-[#5B6870] font-sans">
                      {primaryLocation.mapReferenceNote}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl text-[#16232B] font-normal mb-1">
                      {primaryLocation.name}
                    </h3>
                    <p className="text-sm text-[#5B6870]">{primaryLocation.district}</p>
                  </div>

                  <div className="space-y-1.5 text-sm text-[#5B6870]">
                    <p className="flex items-start gap-2">
                      <LocationPinIcon size={14} className="text-[#0F5C63] mt-0.5 flex-shrink-0" />
                      <span className="credential-placeholder">{primaryLocation.address}</span>
                    </p>
                    {primaryLocation.hours.map((h, i) => (
                      <p key={i} className="pl-5 text-xs">{h}</p>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <a
                      href={`https://wa.me/${primaryLocation.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#0F5C63] text-white text-sm font-medium hover:bg-[#0b464c] transition-colors"
                    >
                      <ChatBubbleIcon size={15} strokeWidth={2} />
                      WhatsApp
                    </a>
                    <a
                      href={`tel:${primaryLocation.phone.replace(/\s/g, "")}`}
                      className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#E4DFD6] text-[#16232B] text-sm font-medium hover:bg-[#FAF8F4] transition-colors"
                    >
                      <PhoneCallIcon size={15} strokeWidth={1.8} className="text-[#0F5C63]" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}
        </div>
      </section>

      {/* ─── REFERRAL TEASER ──────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div className="bg-[#DCEBEA] rounded-[16px] p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-xl space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <CalendarIcon size={18} className="text-[#0F5C63]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63]">
                    For Referring Clinicians
                  </p>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#16232B] font-normal leading-snug">
                  A clearer pathway for specialist referral information.
                </h2>
                <p className="text-sm text-[#5B6870] leading-relaxed">
                  A structured, transparent referral pathway for dental practitioners and physicians requiring specialist
                  maxillofacial input. Clear case updates and prompt communication.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <Link
                  href="/for-doctors"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0F5C63] text-white font-medium text-sm hover:bg-[#0b464c] transition-colors"
                >
                  Referral Information
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
                <p className="text-[11px] text-[#5B6870] text-center">
                  No referral letter required for initial enquiry.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
