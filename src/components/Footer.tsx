import React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#16232B] text-[#FAF8F4] pt-14 pb-24 sm:pb-14 mt-auto border-t border-[#2C3B45]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Doctor Identity */}
          <div className="md:col-span-2 space-y-3">
            <h2 className="font-serif text-2xl font-normal text-white">
              Dr. Anshul Singhal
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#D9C7A8] font-sans">
              Oral &amp; Maxillofacial Surgeon • Noida / Delhi NCR
            </p>
            <p className="text-sm text-[#9BA7AE] max-w-md leading-relaxed">
              Specialist surgical consultations for complex impacted teeth, facial trauma reconstruction, dental implants, and jaw disorders. Designed for patient clarity, dignity, and calm.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs bg-[#24343F] text-[#DCEBEA] px-3 py-1.5 rounded-pill border border-[#354753]">
                <span className="w-2 h-2 rounded-full bg-[#D9C7A8]" />
                Prototype Demonstration Edition
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D9C7A8]">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[#9BA7AE]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About &amp; Credentials
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Surgical Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Clinic Consultation Suite
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-white transition-colors">
                  Patient Guides
                </Link>
              </li>
              <li>
                <Link href="/for-doctors" className="hover:text-white transition-colors">
                  For Referring Doctors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Appointments
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Demo Tools */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D9C7A8]">
              Prototype Controls
            </h3>
            <ul className="space-y-2 text-sm text-[#9BA7AE]">
              <li>
                <Link
                  href="/demo/dashboard"
                  className="text-[#DCEBEA] hover:underline flex items-center gap-1.5"
                >
                  <span>Demo: Analytics Preview</span>
                  <span className="text-[10px] bg-[#0F5C63] text-white px-1.5 py-0.5 rounded">
                    Demo only
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy &amp; Medical Disclaimer
                </Link>
              </li>
              <li className="pt-2 text-xs text-[#9BA7AE]/80">
                WhatsApp: +91 00000 00000 (Placeholder)
              </li>
              <li className="text-xs text-[#9BA7AE]/80">
                Direct Tel: +91 00000 00000 (Placeholder)
              </li>
            </ul>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="border-t border-[#2C3B45] pt-8 space-y-4">
          <p className="text-xs text-[#87959D] leading-relaxed max-w-4xl">
            <strong>Medical Disclaimer:</strong> Information presented across this website is for general educational orientation and prototype evaluation only. It does not replace individualized clinical examination or surgical consultation. Specific procedures and credentials are subject to formal confirmation prior to public launch.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-[#6F7D85]">
            <span>
              © {currentYear} Dr. Anshul Singhal. Private demo prototype. Not for public distribution.
            </span>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-[#9BA7AE] transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/demo/dashboard" className="hover:text-[#9BA7AE] transition-colors">
                Analytics Preview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
