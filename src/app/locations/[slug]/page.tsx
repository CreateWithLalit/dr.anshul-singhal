import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLocationBySlug, getLocations } from "@/lib/content";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { LocationPinIcon, ChatBubbleIcon, PhoneCallIcon } from "@/components/illustrations";
import { prelaunchRobots } from "@/lib/prelaunch";
import { ContactLink } from "@/components/ContactLink";
import { demoImages } from "@/config/demoImages";

export async function generateStaticParams() {
  const locs = await getLocations();
  return locs.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = await getLocationBySlug(slug);
  return {
    title: loc
      ? `${loc.name} | Dr. Anshul Singhal`
      : "Location | Dr. Anshul Singhal",
    description: loc
      ? "Clinic address, hours, directions pathway, and contact details are awaiting verification before public launch."
      : undefined,
    robots: prelaunchRobots,
  };
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = await getLocationBySlug(slug);
  if (!loc) notFound();

  return (
    <div className="bg-[#FAF8F4] py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <RevealOnScroll>
          <p className="section-label mb-3">Consultation location</p>
          <h1 className="font-serif text-3xl text-[#16232B] font-normal mb-2">{loc.name}</h1>
          <p className="text-sm text-[#0F5C63] mb-8">{loc.district}</p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="bg-white rounded-[16px] border border-[#E4DFD6] overflow-hidden">
            <div className="relative h-56 overflow-hidden border-b border-[#E4DFD6]">
              <Image src={demoImages.clinic.src} alt={demoImages.clinic.alt} fill sizes="(max-width: 767px) 100vw, 48rem" className="object-cover opacity-35" />
              <div className="absolute inset-0 bg-white/45 flex flex-col items-center justify-center gap-2">
              <LocationPinIcon size={32} className="text-[#0F5C63]" />
              <p className="text-xs text-[#5B6870] px-6 text-center">{loc.mapReferenceNote}</p>
              </div>
              <span className="temporary-image-label absolute left-3 top-3">Temporary image</span>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-[#5B6870] credential-placeholder">{loc.address}</p>
              {loc.hours.map((h, i) => <p key={i} className="text-xs text-[#5B6870]">{h}</p>)}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <ContactLink kind="whatsapp" value={loc.whatsappNumber} verified={loc.verification.whatsapp}
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#0F5C63] text-white text-sm font-medium">
                  <ChatBubbleIcon size={15} strokeWidth={2} /> WhatsApp
                </ContactLink>
                <ContactLink kind="call" value={loc.phone.replace(/\s/g, "")} verified={loc.verification.phone}
                  className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#E4DFD6] text-[#16232B] text-sm font-medium">
                  <PhoneCallIcon size={15} strokeWidth={1.8} className="text-[#0F5C63]" /> Call
                </ContactLink>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
