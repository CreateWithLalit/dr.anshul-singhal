import React from "react";
import { notFound } from "next/navigation";
import { getLocationBySlug, getLocations } from "@/lib/content";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { LocationPinIcon, ChatBubbleIcon, PhoneCallIcon } from "@/components/illustrations";
import { prelaunchRobots } from "@/lib/prelaunch";

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
    robots: prelaunchRobots,
  };
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = await getLocationBySlug(slug);
  if (!loc) notFound();

  return (
    <div className="bg-[#FAF8F4] py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <RevealOnScroll>
          <h1 className="font-serif text-3xl text-[#16232B] font-normal mb-2">{loc.name}</h1>
          <p className="text-sm text-[#0F5C63] mb-8">{loc.district}</p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className="bg-white rounded-[16px] border border-[#E4DFD6] overflow-hidden">
            <div className="h-56 bg-[#DCEBEA]/30 flex flex-col items-center justify-center gap-2 border-b border-[#E4DFD6]">
              <LocationPinIcon size={32} className="text-[#0F5C63]" />
              <p className="text-xs text-[#5B6870] px-6 text-center">{loc.mapReferenceNote}</p>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-[#5B6870] credential-placeholder">{loc.address}</p>
              {loc.hours.map((h, i) => <p key={i} className="text-xs text-[#5B6870]">{h}</p>)}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a href={`https://wa.me/${loc.whatsappNumber}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#0F5C63] text-white text-sm font-medium">
                  <ChatBubbleIcon size={15} strokeWidth={2} /> WhatsApp
                </a>
                <a href={`tel:${loc.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#E4DFD6] text-[#16232B] text-sm font-medium">
                  <PhoneCallIcon size={15} strokeWidth={1.8} className="text-[#0F5C63]" /> Call
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
