import React from "react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { getArticles } from "@/lib/content";
import { prelaunchRobots } from "@/lib/prelaunch";

export const metadata = {
  title: "Patient Guide | Dr. Anshul Singhal",
  robots: prelaunchRobots,
};

export default async function GuidePage() {
  const articles = await getArticles();

  return (
    <div className="bg-[#FAF8F4]">
      <section className="bg-white border-b border-[#E4DFD6] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-3">Patient Resources</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#16232B] font-normal mb-4">Patient Guide</h1>
            <p className="text-base text-[#5B6870] max-w-lg leading-relaxed">
              Plain-language educational articles to help you understand your options before a consultation.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <StaggerItem key={article.slug}>
                <Link
                  href={`/guide/${article.slug}`}
                  className="group flex flex-col gap-4 p-6 sm:p-7 bg-white border border-[#E4DFD6] rounded-[16px] hover:border-[#0F5C63]/30 hover:shadow-[0_8px_24px_rgba(15,92,99,0.07)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-[#0F5C63] bg-[#DCEBEA] px-2.5 py-1 rounded-full font-semibold">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-[#9BA7AE]">{article.readTimeMinutes} min read</span>
                  </div>
                  <div>
                    <h2 className="font-serif text-xl text-[#16232B] font-normal mb-2 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-[#5B6870] leading-relaxed line-clamp-3">{article.bodyParagraphs[0]}</p>
                  </div>
                  <span className="text-[#0F5C63] text-sm font-medium flex items-center gap-1.5 group-hover:gap-3 transition-all mt-auto">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                    </svg>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
