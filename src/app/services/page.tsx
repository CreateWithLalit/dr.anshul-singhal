import React from "react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { getServices } from "@/lib/content";
import { prelaunchRobots } from "@/lib/prelaunch";
import { ServiceStoneCard } from "@/components/ServiceStoneCard";

export const metadata = {
  title: "Surgical Services | Dr. Anshul Singhal",
  description: "Educational guides about oral and maxillofacial care. Service availability is confirmed before public launch.",
  robots: prelaunchRobots,
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

      {/* Service stone cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
            {services.map((svc, index) => (
              <StaggerItem key={svc.slug}>
                <ServiceStoneCard
                  service={svc}
                  index={index}
                  showStatusBadge
                  actionLabel="Read overview"
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
