import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { ChatBubbleIcon, PhoneCallIcon } from "@/components/illustrations";
import { getServiceBySlug, getServices } from "@/lib/content";

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
    robots: { index: false, follow: false },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="bg-[#FAF8F4]">
      {/* Header */}
      <section className="bg-white border-b border-[#E4DFD6] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-[#5B6870] hover:text-[#0F5C63] mb-5 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
              All Services
            </Link>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-2">
              {service.pillarLabel}
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#16232B] font-normal mb-4">
              {service.title}
            </h1>
            <p className="text-base text-[#5B6870] max-w-xl leading-relaxed">
              {service.shortSummary}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="mt-5">
            <span className="inline-flex items-center gap-2 text-xs border border-dashed border-[#A2AFB6]/60 bg-[#DCEBEA]/10 text-[#5B6870] px-4 py-2 rounded-lg">
              <svg className="w-3.5 h-3.5 text-[#D9C7A8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
              </svg>
              Generic educational overview. Whether Dr. Singhal offers this service is to be confirmed.
            </span>
          </RevealOnScroll>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16 space-y-14">
        {/* Overview */}
        <RevealOnScroll>
          <div className="prose prose-lg max-w-none text-[#5B6870] leading-relaxed font-sans">
            <h2 className="font-serif text-2xl text-[#16232B] font-normal mb-4">
              What This Generally Involves
            </h2>
            <p>{service.educationalOverview}</p>
          </div>
        </RevealOnScroll>

        {/* What to expect */}
        <RevealOnScroll>
          <h2 className="font-serif text-2xl text-[#16232B] font-normal mb-5">
            What to Expect
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
        </RevealOnScroll>

        {/* Steps */}
        <RevealOnScroll>
          <h2 className="font-serif text-2xl text-[#16232B] font-normal mb-7">
            Step-by-Step
          </h2>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="p-5 bg-white border border-[#E4DFD6] rounded-[12px]">
                  <div className="w-8 h-8 rounded-full bg-[#0F5C63] text-white flex items-center justify-center text-xs font-medium mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-lg text-[#16232B] font-normal mb-2">{step.title}</h3>
                  <p className="text-sm text-[#5B6870] leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </RevealOnScroll>

        {/* Cost factors */}
        <RevealOnScroll>
          <div className="bg-white border border-[#E4DFD6] rounded-[16px] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#16232B] font-normal mb-5">
              Cost Factors
            </h2>
            <p className="text-sm text-[#5B6870] mb-4">
              Surgical investment varies by individual case. These are the most common variables — no specific pricing is presented here.
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

        {/* FAQs */}
        <RevealOnScroll>
          <h2 className="font-serif text-2xl text-[#16232B] font-normal mb-7">
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

        {/* CTA */}
        <RevealOnScroll>
          <div className="bg-[#16232B] rounded-[16px] p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h2 className="font-serif text-xl text-white font-normal mb-1">
                Have questions about this treatment?
              </h2>
              <p className="text-sm text-[#9BA7AE]">
                Reach out via WhatsApp or call for a specialist discussion.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#0F5C63] text-white text-sm font-medium hover:bg-[#0b464c] transition-colors"
              >
                <ChatBubbleIcon size={15} strokeWidth={2} />
                WhatsApp
              </a>
              <a
                href="tel:+910000000000"
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#2C3B45] text-white text-sm font-medium hover:bg-[#1E2F3A] transition-colors"
              >
                <PhoneCallIcon size={15} strokeWidth={1.8} />
                Call
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
