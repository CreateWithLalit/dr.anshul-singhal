import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAF8F4] px-5 py-20">
      <div className="max-w-md w-full text-center">
        <span className="text-xs uppercase tracking-widest text-[#0F5C63] font-semibold bg-[#DCEBEA] px-3 py-1 rounded-full">
          404 · Page Not Found
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#16232B] font-normal mt-5 mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-[#5B6870] leading-relaxed mb-8">
          The requested page or resource could not be found. Please check the URL or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0F5C63] text-white text-sm font-medium hover:bg-[#0b464c] transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/guide"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#E4DFD6] text-[#16232B] text-sm font-medium hover:bg-white transition-colors"
          >
            Patient Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
