import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CountUp, TimelineLine } from "./_home-animations";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import {
  ChatBubbleIcon,
  PhoneCallIcon,
  LocationPinIcon,
  CalendarIcon,
} from "@/components/illustrations";
import { getServices, getLocations, getSiteSettings } from "@/lib/content";
import { HomeActions } from "@/components/HomeActions";
import { ContactLink } from "@/components/ContactLink";
import { ServiceStoneCard } from "@/components/ServiceStoneCard";
import { demoImages } from "@/config/demoImages";

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
  { value: 4, suffix: "", label: "steps in your care journey" },
  { value: 3, suffix: "", label: "educational service pillars" },
  { value: 1, suffix: "", label: "clear next-step pathway" },
];


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
      <section className="relative overflow-hidden bg-[#F8F3E9] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
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
          <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">
            {/* Left column */}
            <div className="space-y-5 lg:space-y-7">
              {/* Specialty pill */}
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2A900]/15 text-[#0F2A43] text-xs font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F5C63]" />
                  Oral &amp; Maxillofacial Surgeon
                </div>
              </RevealOnScroll>

              {/* Name */}
              <RevealOnScroll delay={0.05}>
                <h1 className="font-serif text-[2.8rem] sm:text-[3.7rem] lg:text-[4.35rem] font-semibold text-[#0F2A43] leading-[1.03] tracking-[-0.025em]">
                  Specialist care for your face, mouth and jaw.
                </h1>
              </RevealOnScroll>

              {/* Positioning line */}
              <RevealOnScroll delay={0.12}>
                <p className="text-lg sm:text-xl text-[#5B6870] leading-relaxed font-sans max-w-lg">
                  Clear, plain-language guidance for surgical concerns — in English and हिन्दी.
                </p>
              </RevealOnScroll>

              {/* CTA buttons */}
              <RevealOnScroll delay={0.18}>
                <HomeActions
                  phone={settings.defaultPhone}
                  whatsApp={settings.defaultWhatsApp}
                  phoneVerified={settings.contactVerification.phone}
                  whatsAppVerified={settings.contactVerification.whatsapp}
                />
                <p className="mt-2 text-[12px] text-[#5B6870] font-sans">Clinic number coming soon.</p>
              </RevealOnScroll>
            </div>

            {/* Right column — animated illustration */}
            <div className="mt-9 lg:mt-0 relative min-h-[430px] sm:min-h-[520px]">
              <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-[#0F2A43] shadow-[0_18px_40px_rgba(15,42,67,.20)]">
                <Image src={demoImages.hero.src} alt={demoImages.hero.alt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A43]/45 via-transparent" />
              </div>
              <div className="absolute -right-2 top-8 bg-[#C62828] text-white rounded-xl p-3 shadow-lg text-xs"><b>By appointment</b><br />Time slots coming soon</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F2A43] text-white py-4"><div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm"><span>✓ By appointment</span><span>✓ English & हिन्दी</span><span>✓ Family members welcome</span></div></section>

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

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {services.map((svc, index) => (
              <StaggerItem key={svc.slug}>
                <ServiceStoneCard service={svc} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-[#F8F3E9] py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <div><p className="inline-block text-xs font-semibold bg-[#F2A900]/20 text-[#0F2A43] rounded-full px-3 py-1">CLINIC & FACILITIES</p><h2 className="font-serif text-3xl sm:text-4xl text-[#0F2A43] mt-3">A calm setting for a clear conversation.</h2><div className="w-14 h-1 bg-[#F2A900] mt-4" /><p className="mt-5 text-[#5B6870]">Clinic details and appointment availability will be shared here once confirmed.</p><Link href="/locations" className="inline-flex mt-5 text-[#0F5C63] font-semibold">View clinic information →</Link></div>
          <div className="grid grid-cols-2 gap-3">{[demoImages.clinic, demoImages.equipment, demoImages.consultation, demoImages.family].map((image) => <figure key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-xl"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" /><figcaption className="absolute bottom-2 left-2 bg-white/90 rounded px-2 py-1 text-[10px] text-[#0F2A43]">Temporary image</figcaption></figure>)}</div>
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
                  <p className="text-sm text-[#9BA7AE]">{stat.label}</p>
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
          <ContactLink
            kind="call"
            value={settings.emergencyCallNumber}
            verified={settings.contactVerification.emergencyPhone}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#B3392F] text-white font-medium text-sm hover:bg-[#922e26] transition-colors flex-shrink-0 active:scale-[0.98]"
          >
            <PhoneCallIcon size={16} strokeWidth={2} className="text-white" />
            Emergency Call
          </ContactLink>
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
                    <ContactLink
                      kind="whatsapp"
                      value={primaryLocation.whatsappNumber}
                      verified={primaryLocation.verification.whatsapp}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] rounded-full bg-[#0F5C63] text-white text-sm font-medium hover:bg-[#0b464c] transition-colors active:scale-[0.99]"
                    >
                      <ChatBubbleIcon size={15} strokeWidth={2} />
                      <span>WhatsApp</span>
                    </ContactLink>
                    <ContactLink
                      kind="call"
                      value={primaryLocation.phone.replace(/\s/g, "")}
                      verified={primaryLocation.verification.phone}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] rounded-full border border-[#E4DFD6] bg-white text-[#16232B] text-sm font-medium hover:bg-[#FAF8F4] transition-colors active:scale-[0.99]"
                    >
                      <PhoneCallIcon size={15} strokeWidth={1.8} className="text-[#0F5C63]" />
                      <span>Call</span>
                    </ContactLink>
                  </div>

                  {primaryLocation.bookingEnabled && (
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 min-h-[44px] border border-[#0F5C63]/30 rounded-full text-[#0F5C63] text-sm font-medium hover:bg-[#DCEBEA]/40 transition-colors active:scale-[0.99]"
                    >
                      <CalendarIcon size={15} />
                      <span>Book consultation</span>
                    </Link>
                  )}
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
