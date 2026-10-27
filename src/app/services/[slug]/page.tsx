import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { PhoneCallIcon } from "@/components/illustrations";
import { VideoSlot } from "@/components/VideoSlot";
import { ServiceDiagram } from "@/components/ServiceDiagrams";
import { getServiceBySlug, getServices, getSiteSettings } from "@/lib/content";
import { prelaunchRobots } from "@/lib/prelaunch";
import { ContactLink } from "@/components/ContactLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  return {
    title: service
      ? `${service.title} | Dr. Anshul Singhal`
      : "Service | Dr. Anshul Singhal",
    description: service
      ? `${service.shortSummary} Educational information only; service availability is to be confirmed.`
      : undefined,
    robots: prelaunchRobots,
  };
}

function StepMonolineIcon({ stepNumber }: { stepNumber: number }) {
  const common = {
    className: "w-5 h-5 text-[#0F5C63]",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": "true" as const,
  };

  if (stepNumber === 1) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    );
  }
  if (stepNumber === 2) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
        <circle cx="15" cy="15" r="2.5" />
      </svg>
    );
  }
  if (stepNumber === 3) {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path d="M14.5 4l5.5 5.5-12 12H2.5v-5.5L14.5 4z" />
        <line x1="12" y1="6.5" x2="17.5" y2="12" />
      </svg>
    );
  }
  return (
    <svg {...common} viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [service, services, settings] = await Promise.all([
    getServiceBySlug(slug),
    getServices(),
    getSiteSettings(),
  ]);
  if (!service) notFound();
  const relatedServices = services.filter((item) => service.relatedSlugs.includes(item.slug));
  const heroImage = service.media?.hero;

  return (
    <div className="bg-[#FAF8F4]">
      {/* Hero Two-Column Header */}
      <section className="bg-white border-b border-[#E4DFD6] py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-8 lg:gap-12 items-center">
            {/* Image (Mobile: order-1 stacked first; Desktop: order-2 on the right) */}
            <div className="order-1 lg:order-2">
              {heroImage && (
                <div className="relative overflow-hidden rounded-[12px] border border-[#E4DFD6] bg-[#FAF8F4] aspect-[16/10] lg:aspect-[4/3] shadow-sm">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <span className="temporary-image-label absolute top-3 right-3 z-10">
                    Temporary image
                  </span>
                  {heroImage.caption && (
                    <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-xs border-t border-[#E4DFD6]/70 px-3.5 py-1.5 text-[11px] text-[#5B6870] truncate">
                      {heroImage.caption}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Text Column (Mobile: order-2; Desktop: order-1 on the left) */}
            <div className="order-2 lg:order-1">
              <RevealOnScroll>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm text-[#5B6870] hover:text-[#0F5C63] mb-4 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                  </svg>
                  All Services
                </Link>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-2">
                  {service.pillarLabel}
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#16232B] font-normal mb-4 leading-tight">
                  {service.title}
                </h1>
                <p className="text-base text-[#5B6870] leading-relaxed max-w-xl">
                  {service.shortSummary}
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1} className="mt-5">
                <span className="inline-flex items-center gap-2 text-xs border border-dashed border-[#A2AFB6]/60 bg-[#DCEBEA]/10 text-[#5B6870] px-4 py-2 rounded-lg">
                  <svg className="w-3.5 h-3.5 text-[#D9C7A8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                  </svg>
                  Educational information only. Services to be confirmed with Dr. Singhal.
                </span>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky In-page Navigation */}
      <nav aria-label="On this page" className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-xs border-b border-[#E4DFD6] overflow-x-auto">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex min-w-max gap-6 text-xs font-semibold text-[#0F2A43] py-3">
          <a href="#overview" className="hover:text-[#0F5C63] transition-colors">Overview</a>
          <a href="#journey" className="hover:text-[#0F5C63] transition-colors">What to Expect</a>
          <a href="#diagram" className="hover:text-[#0F5C63] transition-colors">Diagram</a>
          <a href="#procedure" className="hover:text-[#0F5C63] transition-colors">Step-by-Step</a>
          <a href="#cost" className="hover:text-[#0F5C63] transition-colors">Cost Factors</a>
          <a href="#faq" className="hover:text-[#0F5C63] transition-colors">FAQ</a>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-16 space-y-14">
        {/* What to Expect Image Strip */}
        {service.media?.expect && service.media.expect.length > 0 && (
          <RevealOnScroll>
            <section id="journey" aria-labelledby="journey-heading" className="bg-white border border-[#E4DFD6] rounded-[16px] p-6 sm:p-7 shadow-xs">
              <div className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63]">Patient Journey</p>
                <h2 id="journey-heading" className="font-serif text-2xl text-[#16232B] font-normal mt-1">
                  What to Expect at Each Stage
                </h2>
                <p className="text-xs text-[#5B6870] mt-1">
                  A predictable, structured care sequence from initial assessment through to confirmed recovery.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {service.media.expect.map((item, idx) => (
                  <div key={idx} className="flex flex-col rounded-[12px] border border-[#E4DFD6] overflow-hidden bg-[#FAF8F4]/40">
                    <div className="relative aspect-[16/10] w-full bg-[#E4DFD6]/40 overflow-hidden">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        loading="lazy"
                        sizes="(min-width: 640px) 30vw, 90vw"
                        className="object-cover"
                      />
                      <span className="temporary-image-label absolute top-2 right-2 text-[9px] py-0.5 px-2">
                        Temporary image
                      </span>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-semibold text-[#0F5C63]">STAGE 0{idx + 1}</span>
                        <h3 className="font-serif text-base text-[#16232B] font-normal mt-0.5 mb-1.5">{item.title}</h3>
                        <p className="text-xs text-[#5B6870] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        )}

        {/* Overview */}
        <RevealOnScroll>
          <div id="overview" className="prose prose-lg max-w-none text-[#5B6870] leading-relaxed font-sans">
            <h2 className="font-serif text-2xl text-[#16232B] font-normal mb-4">
              What This Generally Involves
            </h2>
            <p>{service.educationalOverview}</p>
          </div>
        </RevealOnScroll>

        {/* Educational Diagram */}
        <RevealOnScroll>
          <div id="diagram">
            <ServiceDiagram slug={service.slug} />
          </div>
        </RevealOnScroll>

        {/* What to expect checklist */}
        <RevealOnScroll>
          <div className="bg-white border border-[#E4DFD6] rounded-[16px] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#16232B] font-normal mb-5">
              Care Considerations & What to Expect
            </h2>
            <ul className="space-y-3">
              {service.whatToExpect.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#5B6870] leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-[#DCEBEA] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 stroke-[#0F5C63]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        {/* Steps with Monoline Illustrations */}
        <RevealOnScroll>
          <h2 id="procedure" className="font-serif text-2xl text-[#16232B] font-normal mb-7">
            Step-by-Step Procedure
          </h2>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="p-5 bg-white border border-[#E4DFD6] rounded-[12px] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#0F5C63] text-white flex items-center justify-center text-xs font-semibold">
                        {step.number}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#DCEBEA]/60 flex items-center justify-center">
                        <StepMonolineIcon stepNumber={step.number} />
                      </div>
                    </div>
                    <h3 className="font-serif text-lg text-[#16232B] font-normal mb-2">{step.title}</h3>
                    <p className="text-sm text-[#5B6870] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </RevealOnScroll>

        {/* Cost factors */}
        <RevealOnScroll>
          <div id="cost" className="bg-white border border-[#E4DFD6] rounded-[16px] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#16232B] font-normal mb-5">
              Cost Factors
            </h2>
            <p className="text-sm text-[#5B6870] mb-4">
              Costs can vary by individual assessment, clinical complexity, materials, facility requirements, and follow-up needs. No prices are presented in this pre-launch site.
            </p>
            <ul className="space-y-2">
              {service.costFactors.map((cf, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#5B6870]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9C7A8] mt-2 flex-shrink-0" />
                  {cf}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        {service.slug === "facial-injury" && (
          <RevealOnScroll>
            <aside className="rounded-[16px] border border-[#B3392F]/25 bg-[#B3392F]/5 p-6" aria-label="Emergency contact guidance">
              <h2 className="font-serif text-xl font-normal text-[#16232B]">Need urgent help after a facial injury?</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6870]">For immediate danger, breathing difficulty, severe bleeding, or loss of consciousness, contact local emergency services immediately. For a non-life-threatening concern, use the verified clinic number when it is published.</p>
              <ContactLink kind="call" value={settings.emergencyCallNumber} verified={settings.contactVerification.emergencyPhone} className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#B3392F] px-5 py-3 text-sm font-medium text-white hover:bg-[#922e26]">
                <PhoneCallIcon size={16} strokeWidth={2} /> {settings.contactCtas.emergencyLabel}
              </ContactLink>
              <p className="mt-2 text-xs text-[#5B6870]">Placeholder number — replace only with verified emergency contact details.</p>
            </aside>
          </RevealOnScroll>
        )}

        {/* FAQs */}
        <RevealOnScroll>
          <h2 id="faq" className="font-serif text-2xl text-[#16232B] font-normal mb-7">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-[#E4DFD6] rounded-[12px] p-5">
                <summary className="font-medium text-[#16232B] cursor-pointer list-none flex items-center justify-between gap-4 text-[0.9375rem]">
                  {faq.question}
                  <svg className="w-4 h-4 text-[#5B6870] flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-[#5B6870] leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </RevealOnScroll>

        {/* Sample before/after note */}
        {service.sampleBeforeAfterNote && (
          <RevealOnScroll>
            <div className="bg-[#DCEBEA]/30 border border-[#0F5C63]/15 rounded-[12px] p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0F5C63] mb-2">
                Sample Layout — Illustration Only
              </p>
              <p className="text-sm text-[#5B6870]">{service.sampleBeforeAfterNote}</p>
            </div>
          </RevealOnScroll>
        )}

        <RevealOnScroll>
          <VideoSlot title="Future approved educational media" />
        </RevealOnScroll>

        {/* Related Educational Guides with Thumbnails */}
        {relatedServices.length > 0 && (
          <RevealOnScroll>
            <section aria-labelledby="related-services-heading">
              <h2 id="related-services-heading" className="font-serif text-2xl font-normal text-[#16232B] mb-5">
                Related educational guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedServices.map((related) => {
                  const thumb = related.media?.hero?.src || "/images/clinic-chair.jpg";
                  const thumbAlt = related.media?.hero?.alt || "Educational service preview";
                  return (
                    <Link
                      key={related.slug}
                      href={`/services/${related.slug}`}
                      className="group rounded-[12px] border border-[#E4DFD6] bg-white overflow-hidden flex flex-col transition hover:-translate-y-0.5 hover:border-[#0F5C63]/30 hover:shadow-soft"
                    >
                      <div className="relative aspect-[16/10] w-full bg-[#FAF8F4] overflow-hidden">
                        <Image
                          src={thumb}
                          alt={thumbAlt}
                          fill
                          loading="lazy"
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="temporary-image-label absolute top-2 right-2 text-[9px] py-0.5 px-2">
                          Temporary image
                        </span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0F5C63]">
                            {related.pillarLabel}
                          </p>
                          <h3 className="mt-1.5 font-serif text-lg font-normal text-[#16232B] group-hover:text-[#0F5C63] transition-colors">
                            {related.title}
                          </h3>
                          <p className="mt-1.5 text-xs text-[#5B6870] line-clamp-2 leading-relaxed">
                            {related.shortSummary}
                          </p>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0F5C63]">
                          Read guide <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          </RevealOnScroll>
        )}

        {/* CTA */}
        <RevealOnScroll>
          <div className="bg-[#16232B] rounded-[16px] p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h2 className="font-serif text-xl text-white font-normal mb-1">
                Need help planning your next step?
              </h2>
              <p className="text-sm text-[#9BA7AE]">
                Use WhatsApp, call, or the booking pathway to discuss an individual consultation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <ContactLink
                kind="whatsapp"
                value={settings.defaultWhatsApp}
                verified={settings.contactVerification.whatsapp}
                serviceName={service.title}
                className="flex items-center gap-2 px-5 py-3 min-h-[48px] rounded-full bg-[#25D366] text-[#102B24] text-sm font-semibold hover:bg-[#1fb85a] transition-colors shadow-sm"
              >
                <WhatsAppIcon size={16} />
                {settings.contactCtas.whatsappLabel}
              </ContactLink>
              <ContactLink
                kind="call"
                value={settings.defaultPhone}
                verified={settings.contactVerification.phone}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#2C3B45] text-white text-sm font-medium hover:bg-[#1E2F3A] transition-colors"
              >
                <PhoneCallIcon size={15} strokeWidth={1.8} />
                {settings.contactCtas.callLabel}
              </ContactLink>
              <Link href="/contact" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#16232B] text-sm font-medium hover:bg-[#DCEBEA] transition-colors">
                {settings.contactCtas.bookLabel}
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
