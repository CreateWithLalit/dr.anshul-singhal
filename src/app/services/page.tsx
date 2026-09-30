import React from "react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { JawSkullIcon, DentalImplantIcon, ToothIcon, FaceProfileIcon } from "@/components/illustrations";
import { getServices } from "@/lib/content";
import type { ServicePillar } from "@/lib/content/types";

export const metadata = {
  title: "Surgical Services | Dr. Anshul Singhal",
  robots: { index: false, follow: false },
};

const PILLAR_ICONS: Record<ServicePillar, React.ReactNode> = {
  maxillofacial: <JawSkullIcon size={32} strokeWidth={1.3} />,
  implantology: <DentalImplantIcon size={32} strokeWidth={1.3} />,
  geriatric: <ToothIcon size={32} strokeWidth={1.3} />,
  rehabilitation: <FaceProfileIcon size={32} strokeWidth={1.3} />,
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="bg-[#FAF8F4]">
      {/* Header */}
      <section className="bg-white border-b border-[#E4DFD6] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-3">
              Clinical Scope
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#16232B] font-normal mb-4">
              Surgical Services
            </h1>
            <p className="text-base text-[#5B6870] max-w-xl leading-relaxed">
              Generic educational overviews of the procedures this specialty typically addresses.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="mt-5">
            <div className="inline-flex items-center gap-2 text-xs border border-dashed border-[#A2AFB6]/60 bg-[#DCEBEA]/10 text-[#5B6870] px-4 py-2 rounded-lg">
              <svg className="w-3.5 h-3.5 text-[#D9C7A8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
              </svg>
              Services to be confirmed directly with Dr. Singhal before publication.
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <StaggerItem key={svc.slug}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex flex-col gap-5 p-7 sm:p-8 bg-white border border-[#E4DFD6] rounded-[16px] hover:border-[#0F5C63]/30 hover:shadow-[0_8px_32px_rgba(15,92,99,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-14 h-14 rounded-[12px] bg-[#DCEBEA] flex items-center justify-center text-[#0F5C63]">
                      {PILLAR_ICONS[svc.pillar]}
                    </div>
                    <span className="text-[10px] text-[#5B6870] border border-dashed border-[#A2AFB6]/60 px-2.5 py-1 rounded-lg bg-[#DCEBEA]/10">
                      {svc.status === "to-confirm" ? "To confirm" : "Offered"}
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-[#5B6870] mb-1.5">{svc.pillarLabel}</p>
                    <h2 className="font-serif text-xl text-[#16232B] font-normal mb-3">{svc.title}</h2>
                    <p className="text-sm text-[#5B6870] leading-relaxed">{svc.shortSummary}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#0F5C63] text-sm font-medium mt-auto group-hover:gap-2.5 transition-all">
                    Read overview
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
