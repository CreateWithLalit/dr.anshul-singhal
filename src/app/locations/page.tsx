import React from "react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { LocationPinIcon, ChatBubbleIcon, PhoneCallIcon, CalendarIcon } from "@/components/illustrations";
import { getLocations, getSiteSettings } from "@/lib/content";
import { prelaunchRobots } from "@/lib/prelaunch";

export const metadata = {
  title: "Clinic Location | Dr. Anshul Singhal",
  robots: prelaunchRobots,
};

export default async function LocationsPage() {
  const [locations, settings] = await Promise.all([getLocations(), getSiteSettings()]);

  return (
    <div className="bg-[#FAF8F4]">
      <section className="bg-white border-b border-[#E4DFD6] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-3">Consultation Suite</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#16232B] font-normal mb-4">Clinic Location</h1>
            <p className="text-base text-[#5B6870] max-w-lg leading-relaxed">
              Address and clinic hours will be confirmed with Dr. Singhal before public launch.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((loc) => (
              <StaggerItem key={loc.slug}>
                <div className="bg-white rounded-[16px] border border-[#E4DFD6] overflow-hidden">
                  {/* Map placeholder */}
                  <div className="h-48 bg-[#DCEBEA]/30 flex flex-col items-center justify-center gap-2 border-b border-[#E4DFD6] text-center px-4">
                    <LocationPinIcon size={28} className="text-[#0F5C63]" />
                    <p className="text-xs text-[#5B6870]">{loc.mapReferenceNote}</p>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h2 className="font-serif text-xl text-[#16232B] font-normal mb-0.5">{loc.name}</h2>
                      <p className="text-sm text-[#0F5C63] font-medium">{loc.district}</p>
                    </div>

                    <div className="space-y-1.5 text-sm text-[#5B6870]">
                      <p className="flex items-start gap-2">
                        <LocationPinIcon size={14} className="text-[#0F5C63] mt-0.5 flex-shrink-0" />
                        <span className="credential-placeholder">{loc.address}</span>
                      </p>
                      {loc.hours.map((h, i) => (
                        <p key={i} className="pl-5 text-xs">{h}</p>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 pt-2">
                      <a
                        href={`https://wa.me/${loc.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-3 rounded-full bg-[#0F5C63] text-white text-sm font-medium hover:bg-[#0b464c] transition-colors"
                      >
                        <ChatBubbleIcon size={14} strokeWidth={2} />
                        WhatsApp
                      </a>
                      <a
                        href={`tel:${loc.phone.replace(/\s/g, "")}`}
                        className="flex items-center justify-center gap-1.5 py-3 rounded-full border border-[#E4DFD6] text-[#16232B] text-sm font-medium hover:bg-[#FAF8F4] transition-colors"
                      >
                        <PhoneCallIcon size={14} strokeWidth={1.8} className="text-[#0F5C63]" />
                        Call
                      </a>
                    </div>

                    {loc.bookingEnabled && (
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 w-full py-3 border border-[#0F5C63]/30 rounded-full text-[#0F5C63] text-sm font-medium hover:bg-[#DCEBEA]/40 transition-colors"
                      >
                        <CalendarIcon size={14} />
                        {settings.contactCtas.bookLabel}
                      </Link>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
