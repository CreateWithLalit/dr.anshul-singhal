import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getArticles } from "@/lib/content";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return {
    title: article
      ? `${article.title} | Patient Guide | Dr. Anshul Singhal`
      : "Patient Guide | Dr. Anshul Singhal",
    robots: { index: false, follow: false },
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="bg-[#FAF8F4]">
      <ReadingProgressBar />
      <section className="bg-white border-b border-[#E4DFD6] py-10">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Link
            href="/guide"
            className="inline-flex items-center gap-1.5 text-sm text-[#5B6870] hover:text-[#0F5C63] mb-5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
            Patient Guide
          </Link>
          <RevealOnScroll>
            <span className="text-[10px] uppercase tracking-widest text-[#0F5C63] bg-[#DCEBEA] px-2.5 py-1 rounded-full font-semibold">
              {article.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#16232B] font-normal mt-4 mb-3 leading-[1.15]">
              {article.title}
            </h1>
            <p className="text-sm text-[#9BA7AE]">
              {article.readTimeMinutes} min read · Published {article.publishedDate} · General educational content
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <RevealOnScroll>
          <div className="prose prose-lg max-w-none text-[#5B6870] leading-relaxed font-sans space-y-5">
            {article.bodyParagraphs.map((para, i) => (
              para.startsWith("##") ? (
                <h2 key={i} className="font-serif text-2xl text-[#16232B] font-normal mt-8 mb-3">
                  {para.replace(/^## /, "")}
                </h2>
              ) : (
                <p key={i}>{para}</p>
              )
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="mt-10">
          <div className="border-t border-[#E4DFD6] pt-8">
            <p className="text-xs text-[#9BA7AE] leading-relaxed">
              This article is general educational information and does not constitute medical advice. Always consult a qualified specialist for your individual clinical situation.
            </p>
          </div>
        </RevealOnScroll>
      </article>
    </div>
  );
}
