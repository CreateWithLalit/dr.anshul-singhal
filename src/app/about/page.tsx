import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { CredentialBlock } from "@/components/CredentialBlock";
import { FaceProfileIcon, ShieldCheckIcon } from "@/components/illustrations";
import { getDoctor, getCredentials, getSiteSettings } from "@/lib/content";
import { prelaunchRobots } from "@/lib/prelaunch";

export const metadata = {
  title: "About & Credentials | Dr. Anshul Singhal",
  robots: prelaunchRobots,
};

export default async function AboutPage() {
  const [doctor, credentials, settings] = await Promise.all([getDoctor(), getCredentials(), getSiteSettings()]);

  return (
    <div className="bg-[#FAF8F4]">
      {/* Page header */}
      <section className="bg-white border-b border-[#E4DFD6] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-3">
              About the Surgeon
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#16232B] font-normal mb-4">
              {doctor.name}
            </h1>
            <p className="text-base text-[#5B6870] max-w-lg">{doctor.title}</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Portrait placeholder + Bio */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Portrait */}
            <RevealOnScroll className="lg:col-span-1">
              <div className="relative aspect-[3/4] max-w-xs mx-auto lg:mx-0 rounded-[16px] bg-[#DCEBEA]/40 border border-[#E4DFD6] overflow-hidden">
                {doctor.portrait.type === "image" && doctor.portrait.src ? (
                  <Image
                    src={doctor.portrait.src}
                    alt={doctor.portrait.alt}
                    fill
                    sizes="(min-width: 1024px) 20rem, 75vw"
                    className="object-cover"
                    placeholder={doctor.portrait.blurDataURL ? "blur" : "empty"}
                    blurDataURL={doctor.portrait.blurDataURL}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                    <FaceProfileIcon size={64} className="text-[#0F5C63] opacity-50" strokeWidth={1.2} />
                    <p className="text-xs text-center text-[#5B6870] leading-relaxed">
                      Approved professional portrait will appear here after verification.
                    </p>
                  </div>
                )}
                {doctor.portrait.status !== "verified" && (
                  <span className="absolute left-3 top-3 credential-placeholder text-[10px]">Awaiting approved portrait</span>
                )}
              </div>
            </RevealOnScroll>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <RevealOnScroll delay={0.08}>
                <div className="border border-dashed border-[#A2AFB6]/50 rounded-[12px] bg-[#DCEBEA]/10 p-5">
                  <p className="text-xs font-semibold text-[#5B6870] uppercase tracking-wider mb-2">
                    Biographical Statement — Placeholder
                  </p>
                  <p className="text-sm text-[#5B6870] leading-relaxed">{doctor.bioPlaceholder}</p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.12}>
                <div className="space-y-3">
                  <h2 className="font-serif text-2xl text-[#16232B] font-normal">Languages</h2>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((lang) => (
                      <span key={lang} className="px-3 py-1.5 bg-white border border-[#E4DFD6] rounded-full text-sm text-[#16232B]">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.16}>
                <div className="space-y-3">
                  <h2 className="font-serif text-2xl text-[#16232B] font-normal">
                    Registration
                  </h2>
                  <div className="credential-placeholder text-sm">
                    {doctor.registrationNumber.value}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white border-t border-[#E4DFD6] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-2">
                  Qualifications & Credentials
                </p>
                <h2 className="font-serif text-3xl text-[#16232B] font-normal">
                  How Verified Credentials Will Appear
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#5B6870] bg-[#DCEBEA] px-4 py-2 rounded-lg">
                <ShieldCheckIcon size={15} className="text-[#0F5C63]" />
                Items verified by Dr. Singhal will show as green.
              </div>
            </div>
          </RevealOnScroll>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map((cred) => (
              <StaggerItem key={cred.id}>
                <CredentialBlock credential={cred} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <RevealOnScroll delay={0.2} className="mt-8">
            <div className="bg-[#FAF8F4] border border-[#E4DFD6] rounded-[12px] p-5 text-sm text-[#5B6870] space-y-2">
              <p className="font-semibold text-[#16232B]">What happens at launch?</p>
              <p>Once Dr. Singhal confirms each credential, the dashed &ldquo;Placeholder&rdquo; chip is replaced with a verified green badge. The website&apos;s content module is updated in one step — no rebuild required.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF8F4] py-16 text-center">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <h2 className="font-serif text-2xl text-[#16232B] font-normal mb-4">
              Ready to book a consultation?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0F5C63] text-white font-medium hover:bg-[#0b464c] transition-colors"
            >
              {settings.contactCtas.bookLabel}
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
