"use client";

import React, { useEffect, useState } from "react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CalendarIcon } from "@/components/illustrations";
import type { MockFormResponse } from "@/lib/forms";
import type { PublicContactSettings } from "@/lib/content";

export default function ForDoctorsPage() {
  const [form, setForm] = useState({ drName: "", clinic: "", patientName: "", patientPhone: "", details: "", hp: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [contactSettings, setContactSettings] = useState<PublicContactSettings | null>(null);

  useEffect(() => {
    void fetch("/api/public-contact-settings")
      .then((response) => (response.ok ? response.json() : null))
      .then((settings: PublicContactSettings | null) => setContactSettings(settings))
      .catch(() => setContactSettings(null));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.drName.trim() || !form.patientName.trim() || !form.patientPhone.trim()) return;
    setState("sending");
    try {
      const response = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          referringDoctor: form.drName,
          clinicName: form.clinic,
          patientName: form.patientName,
          patientPhone: form.patientPhone,
          referralSummary: form.details,
          website: form.hp,
        }),
      });
      const result = (await response.json()) as MockFormResponse;
      setState(result.success ? "sent" : "error");
    } catch {
      setState("error");
    }
  };

  return (
    <div className="bg-[#FAF8F4]">
      <section className="bg-white border-b border-[#E4DFD6] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-3">Clinical Pathway</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#16232B] font-normal mb-4">For Referring Doctors</h1>
            <p className="text-base text-[#5B6870] max-w-lg leading-relaxed">
              A production-ready referral pathway for dental practitioners and physicians. Contact details and service scope will be verified before launch.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <RevealOnScroll>
              <h2 className="font-serif text-2xl text-[#16232B] font-normal mb-5">What to Include</h2>
              <ul className="space-y-4 text-sm text-[#5B6870] leading-relaxed mb-8">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F5C63] mt-2 flex-shrink-0" />
                  Brief history of present complaint and relevant medical background.
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F5C63] mt-2 flex-shrink-0" />
                  Recent radiographs (OPG/CBCT) if available.
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F5C63] mt-2 flex-shrink-0" />
                  Urgency of referral (e.g., routine evaluation vs. suspected pathology).
                </li>
              </ul>

              <div className="bg-[#DCEBEA]/30 border border-[#0F5C63]/15 rounded-[12px] p-6">
                <p className="font-medium text-[#16232B] mb-2 text-sm">Direct Clinician Line</p>
                <p className="text-sm text-[#5B6870] mb-3">For urgent case discussions, please call the clinic and request the clinician line.</p>
                <a href={contactSettings ? `tel:${contactSettings.phone}` : "#referral-form"} className="inline-flex items-center gap-2 text-[#0F5C63] font-medium text-sm">
                  <CalendarIcon size={16} /> {contactSettings?.phoneFormatted ?? "Contact details loading…"}
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div id="referral-form" className="bg-white border border-[#E4DFD6] rounded-[16px] p-6 sm:p-8">
                <p className="text-xs text-[#9BA7AE] mb-6">Demo only: nothing is sent or stored. Do not include medical records, images, or urgent emergency information.</p>
                
                {state === "sent" ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 rounded-full bg-[#DCEBEA] flex items-center justify-center mx-auto mb-4">✓</div>
                    <p className="font-serif text-lg text-[#16232B]">Form preview complete</p>
                    <p className="text-sm text-[#5B6870] mt-2">Demo only: nothing is sent or stored.</p>
                    <button onClick={() => setState("idle")} className="text-[#0F5C63] underline text-sm mt-4">Send another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="website" value={form.hp} onChange={(e) => setForm({ ...form, hp: e.target.value })} className="hidden" tabIndex={-1} autoComplete="off" />
                    <div>
                      <label htmlFor="referring-doctor" className="block text-xs font-semibold uppercase tracking-wider text-[#16232B] mb-1.5">Referring Doctor *</label>
                      <input id="referring-doctor" required type="text" value={form.drName} onChange={(e) => setForm({ ...form, drName: e.target.value })} className="w-full px-4 py-3 border border-[#E4DFD6] rounded-lg bg-[#FAF8F4] text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C63]" />
                    </div>
                    <div>
                      <label htmlFor="referring-clinic" className="block text-xs font-semibold uppercase tracking-wider text-[#16232B] mb-1.5">Clinic Name</label>
                      <input id="referring-clinic" type="text" value={form.clinic} onChange={(e) => setForm({ ...form, clinic: e.target.value })} className="w-full px-4 py-3 border border-[#E4DFD6] rounded-lg bg-[#FAF8F4] text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C63]" />
                    </div>
                    <div>
                      <label htmlFor="referred-patient-name" className="block text-xs font-semibold uppercase tracking-wider text-[#16232B] mb-1.5">Patient Name *</label>
                      <input id="referred-patient-name" required maxLength={80} type="text" value={form.patientName} onChange={(e) => setForm({ ...form, patientName: e.target.value })} className="w-full px-4 py-3 border border-[#E4DFD6] rounded-lg bg-[#FAF8F4] text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C63]" />
                    </div>
                    <div>
                      <label htmlFor="referred-patient-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#16232B] mb-1.5">Patient Phone *</label>
                      <input id="referred-patient-phone" required maxLength={20} pattern="[0-9+\\s()\\-]{7,20}" type="tel" value={form.patientPhone} onChange={(e) => setForm({ ...form, patientPhone: e.target.value })} className="w-full px-4 py-3 border border-[#E4DFD6] rounded-lg bg-[#FAF8F4] text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C63]" />
                    </div>
                    {state === "error" && <p className="text-sm text-[#B3392F]" role="alert">Please check the required fields and try again.</p>}
                    <div>
                      <label htmlFor="referral-details" className="block text-xs font-semibold uppercase tracking-wider text-[#16232B] mb-1.5">Clinical Details</label>
                      <textarea id="referral-details" rows={3} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className="w-full px-4 py-3 border border-[#E4DFD6] rounded-lg bg-[#FAF8F4] text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C63] resize-none" />
                    </div>
                    <button type="submit" disabled={state === "sending"} className="w-full py-3.5 rounded-full bg-[#0F5C63] text-white font-medium text-sm hover:bg-[#0b464c] transition-colors disabled:opacity-50">
                      {state === "sending" ? "Sending..." : "Submit Referral"}
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
