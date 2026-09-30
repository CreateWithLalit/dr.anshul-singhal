import React from "react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import {
  ChatBubbleIcon,
  PhoneCallIcon,
  LocationPinIcon,
  CalendarIcon,
  ShieldCheckIcon,
  ToothIcon,
  JawSkullIcon,
  DentalImplantIcon,
  FaceProfileIcon,
} from "@/components/illustrations";
import { MetricCard, HorizontalBars, VerticalBars, LineChart } from "./_dashboard-charts";

export const metadata = {
  title: "Analytics Preview (Demo) | Dr. Anshul Singhal",
  robots: { index: false, follow: false },
};

// ─── SAMPLE DATA — hardcoded, illustrative only ───────────────────────────────
const ENQUIRIES_BY_PAGE = [
  { label: "Home (/)", value: 82, maxValue: 82 },
  { label: "Services", value: 61, maxValue: 82 },
  { label: "Dental Implants", value: 47, maxValue: 82 },
  { label: "Contact", value: 38, maxValue: 82 },
  { label: "About & Credentials", value: 27, maxValue: 82 },
  { label: "For Doctors", value: 14, maxValue: 82 },
];

const ENQUIRIES_BY_LOCATION = [
  { label: "Noida Central", value: 73, maxValue: 82 },
  { label: "Other / Not specified", value: 9, maxValue: 82 },
];

const TOP_SERVICES = [
  { label: "Dental Implants", value: 68, maxValue: 68 },
  { label: "Maxillofacial Surgery", value: 54, maxValue: 68 },
  { label: "Full Mouth Rehab", value: 41, maxValue: 68 },
  { label: "Geriatric Dentistry", value: 29, maxValue: 68 },
];

const WEEKLY_TREND = [
  { label: "Mon", value: 14 },
  { label: "Tue", value: 22 },
  { label: "Wed", value: 19 },
  { label: "Thu", value: 31 },
  { label: "Fri", value: 28 },
  { label: "Sat", value: 18 },
  { label: "Sun", value: 7 },
];

const WEEKLY_BARS = WEEKLY_TREND.map((d) => ({
  ...d,
  maxValue: Math.max(...WEEKLY_TREND.map((x) => x.value)),
}));

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "Dental Implants": <DentalImplantIcon size={16} strokeWidth={1.4} />,
  "Maxillofacial Surgery": <JawSkullIcon size={16} strokeWidth={1.4} />,
  "Full Mouth Rehab": <FaceProfileIcon size={16} strokeWidth={1.4} />,
  "Geriatric Dentistry": <ToothIcon size={16} strokeWidth={1.4} />,
};

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────
function Section({
  title,
  subtitle,
  children,
  className = "",
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <RevealOnScroll>
      <div className={`bg-white rounded-[16px] border border-[#E4DFD6] p-6 sm:p-7 ${className}`}>
        <div className="flex items-start justify-between gap-3 mb-5">
          <div>
            <h2 className="font-serif text-lg text-[#16232B] font-normal">{title}</h2>
            {subtitle && (
              <p className="text-xs text-[#9BA7AE] mt-0.5">{subtitle}</p>
            )}
          </div>
          <span className="text-[10px] text-[#9BA7AE] border border-dashed border-[#A2AFB6]/50 px-2.5 py-1 rounded-lg bg-[#DCEBEA]/10 flex-shrink-0">
            Sample data
          </span>
        </div>
        {children}
      </div>
    </RevealOnScroll>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function DemoDashboardPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      {/* Page Header */}
      <section className="bg-white border-b border-[#E4DFD6] py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-2">
                  For Referring Clinicians &amp; Practice Review
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl text-[#16232B] font-normal mb-2">
                  Analytics Preview
                </h1>
                <p className="text-sm text-[#5B6870] max-w-xl leading-relaxed">
                  This page illustrates what website performance reporting will look like once the site is live.
                  All figures are sample data only.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#B3392F] border border-dashed border-[#B3392F]/40 px-4 py-2 rounded-lg bg-[#B3392F]/5 flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B3392F] flex-shrink-0" />
                Sample data: illustrates what reporting will look like.
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14 space-y-8">

        {/* ─── KEY METRICS ─────────────────────────────────────────────────── */}
        <RevealOnScroll>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63]">
            30-Day Summary
          </p>
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StaggerItem>
            <MetricCard
              label="WhatsApp Clicks"
              value={147}
              icon={<ChatBubbleIcon size={20} strokeWidth={1.8} />}
              sub="Past 30 days"
              delay={0}
            />
          </StaggerItem>
          <StaggerItem>
            <MetricCard
              label="Call Taps"
              value={89}
              icon={<PhoneCallIcon size={20} strokeWidth={1.8} />}
              sub="Past 30 days"
              delay={0.06}
            />
          </StaggerItem>
          <StaggerItem>
            <MetricCard
              label="Enquiries Received"
              value={53}
              icon={<ShieldCheckIcon size={20} strokeWidth={1.6} />}
              sub="Contact + WhatsApp"
              delay={0.12}
            />
          </StaggerItem>
          <StaggerItem>
            <MetricCard
              label="Booking Requests"
              value={31}
              icon={<CalendarIcon size={20} strokeWidth={1.6} />}
              sub="Via booking flow"
              delay={0.18}
            />
          </StaggerItem>
        </StaggerContainer>

        {/* ─── WEEKLY TREND ────────────────────────────────────────────────── */}
        <Section
          title="Weekly Activity Trend"
          subtitle="Sample enquiries + WhatsApp clicks combined"
        >
          <LineChart data={WEEKLY_TREND} delay={0.1} />
        </Section>

        {/* ─── TWO-COLUMN ROW ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Enquiries by Page */}
          <Section
            title="Enquiries by Page"
            subtitle="Which pages drove sample contact actions"
          >
            <HorizontalBars data={ENQUIRIES_BY_PAGE} delay={0.1} />
          </Section>

          {/* Enquiries by Location */}
          <Section
            title="Enquiries by Location"
            subtitle="Sample enquiries grouped by clinic location"
          >
            <HorizontalBars data={ENQUIRIES_BY_LOCATION} delay={0.1} />

            <div className="mt-6 border-t border-[#E4DFD6] pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-3">
                Location Breakdown
              </p>
              <div className="space-y-2">
                {ENQUIRIES_BY_LOCATION.map((loc) => (
                  <div
                    key={loc.label}
                    className="flex items-center gap-3 text-sm text-[#5B6870]"
                  >
                    <LocationPinIcon size={14} className="text-[#0F5C63] flex-shrink-0" />
                    <span className="flex-1">{loc.label}</span>
                    <span className="font-medium text-[#16232B]">{loc.value} enquiries</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>

        {/* ─── TWO-COLUMN ROW 2 ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Services */}
          <Section
            title="Top-Viewed Services"
            subtitle="Most-visited service pages (sample)"
          >
            <div className="space-y-3">
              {TOP_SERVICES.map((svc, i) => (
                <div key={svc.label} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#DCEBEA] flex items-center justify-center text-[#0F5C63] flex-shrink-0">
                    {SERVICE_ICONS[svc.label] ?? <ToothIcon size={14} strokeWidth={1.4} />}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-[#16232B]">{svc.label}</span>
                      <span className="text-xs font-medium text-[#0F5C63]">#{i + 1}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[#DCEBEA]/50 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#0F5C63]/40"
                        style={{ width: `${Math.round((svc.value / svc.maxValue) * 100)}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm text-[#5B6870] w-8 text-right">{svc.value}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Weekly bars */}
          <Section
            title="Daily Activity This Week"
            subtitle="Sample engagement count per day"
          >
            <VerticalBars data={WEEKLY_BARS} delay={0.1} />
            <p className="text-[11px] text-[#9BA7AE] mt-4">
              Peak day: Thursday (31 interactions). Weekend naturally lower.
            </p>
          </Section>
        </div>

        {/* ─── FOOTER NOTE ─────────────────────────────────────────────────── */}
        <RevealOnScroll>
          <div className="bg-[#DCEBEA]/30 border border-[#E4DFD6] rounded-[14px] p-5 sm:p-6 text-sm text-[#5B6870] space-y-2">
            <p className="font-semibold text-[#16232B]">About this dashboard</p>
            <p>
              All figures shown are sample data only — they illustrate the structure and format of real
              reporting once the site is live. In the production build, this dashboard would be replaced with
              real analytics from a secure, DPDP-compliant data source.
            </p>
            <p className="text-xs text-[#9BA7AE]">
              No tracking code, analytics SDK, or personal-data storage is active on this prototype.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
