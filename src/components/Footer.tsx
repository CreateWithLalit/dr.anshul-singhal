import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#16232B] text-[#FAF8F4] pt-14 pb-28 sm:pb-14 mt-auto border-t border-[#2C3B45]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Identity */}
          <div className="md:col-span-2 space-y-3">
            <h2 className="font-serif text-xl font-normal text-white leading-snug">
              Dr. Anshul Singhal
            </h2>
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#D9C7A8]">
              Oral &amp; Maxillofacial Surgeon
            </p>
            <p className="text-sm text-[#9BA7AE] leading-relaxed max-w-sm">
              A pre-launch information and consultation pathway. Services and contact details await verification.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 text-[11px] bg-[#1E2F3A] text-[#DCEBEA] px-3 py-1.5 rounded-full border border-[#2C3B45]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9C7A8]" />
                Prototype Edition — Content is placeholder
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D9C7A8]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#9BA7AE]">
              {[
                ["/about", "About & Credentials"],
                ["/services", "Surgical Services"],
                ["/locations", "Clinic Location"],
                ["/guide", "Patient Guides"],
                ["/for-doctors", "For Referring Doctors"],
                ["/contact", "Contact & Appointments"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Prototype tools */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#D9C7A8]">
              Prototype
            </h3>
            <ul className="space-y-2 text-sm text-[#9BA7AE]">
              <li>
                <Link href="/demo/dashboard" className="flex items-center gap-2 hover:text-white transition-colors">
                  Analytics Preview
                  <span className="text-[10px] bg-[#0F5C63] text-white px-1.5 py-0.5 rounded">
                    Demo
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy & Disclaimer
                </Link>
              </li>
              <li className="pt-2 text-xs text-[#9BA7AE]/70">
                WhatsApp: +91 00000 00000
                <br />
                <span className="text-[10px] text-[#6F7D85]">(Placeholder — confirm before launch)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2C3B45] pt-7 space-y-3">
          <p className="text-xs text-[#87959D] leading-relaxed max-w-3xl">
            <strong className="text-[#9BA7AE]">Medical Disclaimer:</strong>{" "}
            Information on this website is for general educational purposes only. It does not substitute for an individual clinical examination or surgical consultation with a qualified specialist. All credentials and services are subject to formal confirmation.
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs text-[#6F7D85]">
            <span>© 2026 Dr. Anshul Singhal. Private demo prototype.</span>
            <div className="flex items-center gap-3">
              <Link href="/privacy" className="hover:text-[#9BA7AE] transition-colors">Privacy Policy</Link>
              <span>·</span>
              <Link href="/demo/dashboard" className="hover:text-[#9BA7AE] transition-colors">Analytics Preview</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
