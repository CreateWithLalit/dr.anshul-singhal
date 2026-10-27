import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { LocationPinIcon, ChatBubbleIcon, PhoneCallIcon, CalendarIcon } from "@/components/illustrations";
import { getLocations, getSiteSettings } from "@/lib/content";
import { prelaunchRobots } from "@/lib/prelaunch";
import { ContactLink } from "@/components/ContactLink";
import { demoImages } from "@/config/demoImages";

export const metadata = {
  title: "Clinic Location | Dr. Anshul Singhal",
  robots: prelaunchRobots,
};

export default async function LocationsPage() {
  const [locations, settings] = await Promise.all([getLocations(), getSiteSettings()]);

  return (
    <div className="bg-[#FAF8F4]">
      <section className="bg-white border-b border-[#E4DFD6] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-center">
          <RevealOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-3">Consultation Suite</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#16232B] font-normal mb-4">Clinic Location</h1>
            <p className="text-base text-[#5B6870] max-w-lg leading-relaxed">
              Address and clinic hours will be confirmed with Dr. Singhal before public launch.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08} className="relative aspect-[16/9] overflow-hidden rounded-[16px] border border-[#E4DFD6]">
            <Image src={demoImages.clinic.src} alt={demoImages.clinic.alt} fill sizes="(max-width: 767px) 100vw, 40vw" className="object-cover" />
            <span className="temporary-image-label absolute left-3 top-3">Temporary image</span>
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
                  <div className="relative h-48 overflow-hidden border-b border-[#E4DFD6] text-center">
                    <Image src={demoImages.equipment.src} alt={demoImages.equipment.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover opacity-30" />
                    <div className="absolute inset-0 bg-[#0F2A43]/10 flex flex-col items-center justify-center gap-2 px-4">
                    <LocationPinIcon size={28} className="text-[#0F5C63]" />
                    <p className="text-xs text-[#5B6870]">{loc.mapReferenceNote}</p>
                    </div>
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

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <ContactLink
                        kind="whatsapp"
                        value={loc.whatsappNumber}
                        verified={loc.verification.whatsapp}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] rounded-full bg-[#0F5C63] text-white text-sm font-medium hover:bg-[#0b464c] transition-colors active:scale-[0.99]"
                      >
                        <ChatBubbleIcon size={15} strokeWidth={2} />
                        <span>WhatsApp</span>
                      </ContactLink>
                      <ContactLink
                        kind="call"
                        value={loc.phone.replace(/\s/g, "")}
                        verified={loc.verification.phone}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] rounded-full border border-[#E4DFD6] bg-white text-[#16232B] text-sm font-medium hover:bg-[#FAF8F4] transition-colors active:scale-[0.99]"
                      >
                        <PhoneCallIcon size={15} strokeWidth={1.8} className="text-[#0F5C63]" />
                        <span>Call</span>
                      </ContactLink>
                    </div>

                    {loc.bookingEnabled && (
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 w-full py-3 px-4 min-h-[44px] border border-[#0F5C63]/30 rounded-full text-[#0F5C63] text-sm font-medium hover:bg-[#DCEBEA]/40 transition-colors active:scale-[0.99]"
                      >
                        <CalendarIcon size={15} />
                        <span>{settings.contactCtas.bookLabel}</span>
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
