import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { LocationPinIcon, PhoneCallIcon, CalendarIcon } from "@/components/illustrations";
import { getLocations, getSiteSettings } from "@/lib/content";
import { prelaunchRobots } from "@/lib/prelaunch";
import { ContactLink } from "@/components/ContactLink";
import { demoImages } from "@/config/demoImages";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

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
          {locations.length === 1 ? (
            <RevealOnScroll>
              {(() => {
                const loc = locations[0];
                return (
                  <div className="bg-white rounded-[16px] border border-[#E4DFD6] overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-0">
                    {/* Left: Outdoor Hospital & Clinic Exterior Visual */}
                    <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[420px] w-full bg-[#FAF8F4] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E4DFD6]">
                      <Image
                        src={demoImages.clinicExterior.src}
                        alt={demoImages.clinicExterior.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <span className="temporary-image-label absolute left-3 top-3 z-10">
                        Temporary image
                      </span>
                      <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/95 bg-[#16232B]/75 backdrop-blur-xs px-3 py-1 rounded-md">
                          <LocationPinIcon size={14} className="text-[#D9C7A8]" />
                          <span>Outdoor clinical facility</span>
                        </span>
                        <span className="text-[11px] text-white/80 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded">
                          Location to be confirmed
                        </span>
                      </div>
                    </div>

                    {/* Right: Facility Details, Address, Hours, and Action CTAs */}
                    <div className="p-6 sm:p-8 lg:p-9 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs uppercase font-bold tracking-[0.14em] text-[#0F5C63]">
                            Consultation Suite
                          </p>
                          <span className="text-[11px] text-[#5B6870] border border-dashed border-[#A2AFB6]/60 bg-[#DCEBEA]/10 px-2.5 py-0.5 rounded-full">
                            By appointment
                          </span>
                        </div>

                        <div>
                          <h2 className="font-serif text-2xl sm:text-3xl text-[#16232B] font-normal mb-1">
                            {loc.name}
                          </h2>
                          <p className="text-sm font-medium text-[#0F5C63]">{loc.district}</p>
                        </div>

                        <div className="space-y-3 text-sm text-[#5B6870] bg-[#FAF8F4] p-4 rounded-[12px] border border-[#E4DFD6]">
                          <p className="flex items-start gap-2.5">
                            <LocationPinIcon size={16} className="text-[#0F5C63] mt-0.5 flex-shrink-0" />
                            <span className="credential-placeholder leading-relaxed">{loc.address}</span>
                          </p>
                          <div className="pt-2 border-t border-[#E4DFD6]/60 space-y-1">
                            <p className="text-xs font-semibold text-[#16232B] uppercase tracking-wider">Consultation Hours</p>
                            {loc.hours.map((h, i) => (
                              <p key={i} className="text-xs text-[#5B6870]">{h}</p>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <ContactLink
                            kind="whatsapp"
                            value={loc.whatsappNumber}
                            verified={loc.verification.whatsapp}
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[48px] rounded-full bg-[#25D366] text-[#102B24] text-sm font-semibold hover:bg-[#1fb85a] transition-colors active:scale-[0.99] shadow-xs"
                          >
                            <WhatsAppIcon size={16} />
                            <span>WhatsApp</span>
                          </ContactLink>
                          <ContactLink
                            kind="call"
                            value={loc.phone.replace(/\s/g, "")}
                            verified={loc.verification.phone}
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[48px] rounded-full border border-[#E4DFD6] bg-white text-[#16232B] text-sm font-medium hover:bg-[#FAF8F4] transition-colors active:scale-[0.99]"
                          >
                            <PhoneCallIcon size={16} strokeWidth={1.8} className="text-[#0F5C63]" />
                            <span>Call</span>
                          </ContactLink>
                        </div>

                        {loc.bookingEnabled && (
                          <Link
                            href="/contact"
                            className="flex items-center justify-center gap-2 w-full py-3 px-4 min-h-[48px] border border-[#0F5C63]/30 rounded-full text-[#0F5C63] text-sm font-medium hover:bg-[#DCEBEA]/40 transition-colors active:scale-[0.99]"
                          >
                            <CalendarIcon size={16} />
                            <span>{settings.contactCtas.bookLabel}</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </RevealOnScroll>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((loc) => (
                <StaggerItem key={loc.slug}>
                  <div className="bg-white rounded-[16px] border border-[#E4DFD6] overflow-hidden">
                    <div className="relative h-48 sm:h-52 overflow-hidden border-b border-[#E4DFD6]">
                      <Image
                        src={demoImages.clinicExterior.src}
                        alt={demoImages.clinicExterior.alt}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                      <span className="temporary-image-label absolute left-3 top-3 z-10">
                        Temporary image
                      </span>
                      <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/95 bg-[#16232B]/75 backdrop-blur-xs px-2.5 py-1 rounded-md">
                          <LocationPinIcon size={12} className="text-[#D9C7A8]" />
                          <span>Outdoor clinical facility</span>
                        </span>
                        <span className="text-[10px] text-white/80 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                          Location to be confirmed
                        </span>
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
                          className="w-full flex items-center justify-center gap-2 py-3 px-4 min-h-[48px] rounded-full bg-[#25D366] text-[#102B24] text-sm font-semibold hover:bg-[#1fb85a] transition-colors active:scale-[0.99] shadow-xs"
                        >
                          <WhatsAppIcon size={16} />
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
          )}
        </div>
      </section>
    </div>
  );
}
