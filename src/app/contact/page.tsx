"use client";

import React, { useState } from "react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { ChatBubbleIcon, PhoneCallIcon, CalendarIcon, LocationPinIcon } from "@/components/illustrations";
import type { MockFormResponse } from "@/lib/forms";

const BOOKING_STEPS = ["Location", "Date & Slot", "Confirm"] as const;
type BookingStep = 0 | 1 | 2 | 3;

const SLOTS = ["9:30 AM", "10:15 AM", "11:00 AM", "2:30 PM", "3:15 PM", "4:00 PM"];
const UNAVAILABLE = new Set([1, 3]); // deterministic unavailable slots

function getNextDays(n: number) {
  const days = [];
  const d = new Date();
  for (let i = 1; i <= n; i++) {
    const nd = new Date(d);
    nd.setDate(d.getDate() + i);
    days.push(nd);
  }
  return days;
}

export default function ContactPage() {
  const [tab, setTab] = useState<"whatsapp" | "contact" | "booking">("whatsapp");

  // Contact form state
  const [form, setForm] = useState({ name: "", phone: "", message: "", hp: "" });
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // Booking state
  const [bookStep, setBookStep] = useState<BookingStep>(0);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const days = getNextDays(14);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) return;
    setFormState("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: form.hp }),
      });
      const result = (await response.json()) as MockFormResponse;
      if (result.success) {
        setFormState("sent");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="bg-[#FAF8F4]">
      {/* Header */}
      <section className="bg-white border-b border-[#E4DFD6] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <RevealOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F5C63] mb-3">Get in Touch</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#16232B] font-normal mb-4">Contact & Appointments</h1>
            <p className="text-base text-[#5B6870] max-w-lg leading-relaxed">
              WhatsApp and phone contact routes will be verified before launch. This pre-launch page demonstrates the intended patient pathway.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* Primary: WhatsApp + Call prominent CTA */}
        <RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <a
              href="https://wa.me/910000000000?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation%20with%20Dr.%20Anshul%20Singhal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#0F5C63] text-white rounded-[16px] hover:bg-[#0b464c] transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <ChatBubbleIcon size={22} strokeWidth={1.8} className="text-white" />
              </div>
              <div>
                <p className="font-semibold">WhatsApp Consultation</p>
                <p className="text-sm text-white/75">+91 00000 00000 (Placeholder)</p>
              </div>
            </a>
            <a
              href="tel:+910000000000"
              className="flex items-center gap-4 p-5 bg-white border border-[#E4DFD6] rounded-[16px] hover:bg-[#FAF8F4] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#DCEBEA] flex items-center justify-center flex-shrink-0">
                <PhoneCallIcon size={22} strokeWidth={1.6} className="text-[#0F5C63]" />
              </div>
              <div>
                <p className="font-semibold text-[#16232B]">Call Clinic</p>
                <p className="text-sm text-[#5B6870]">+91 00000 00000 (Placeholder)</p>
              </div>
            </a>
          </div>
        </RevealOnScroll>

        {/* Tabs */}
        <RevealOnScroll delay={0.1}>
          <div className="flex items-center gap-2 mb-7 border-b border-[#E4DFD6] pb-0">
            {([["contact", "Send Enquiry"], ["booking", "Book Appointment"]] as const).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors -mb-px ${
                  tab === id
                    ? "border-[#0F5C63] text-[#0F5C63]"
                    : "border-transparent text-[#5B6870] hover:text-[#16232B]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Contact Form */}
        {tab === "contact" && (
          <RevealOnScroll>
            <div className="bg-white border border-[#E4DFD6] rounded-[16px] p-6 sm:p-8">
              <p className="text-xs text-[#9BA7AE] mb-6 font-sans">
                Demo only: this form is a prototype. Nothing is stored or transmitted.
              </p>

              {formState === "sent" ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#DCEBEA] flex items-center justify-center mx-auto">
                    <svg className="w-7 h-7 stroke-[#0F5C63]" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="font-serif text-xl text-[#16232B]">Form preview complete</p>
                  <p className="text-sm text-[#5B6870]">
                    Demo only: nothing is sent or stored.
                  </p>
                  <button onClick={() => setFormState("idle")} className="text-[#0F5C63] underline text-sm">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Honeypot */}
                  <input type="text" name="hp" value={form.hp} onChange={(e) => setForm({ ...form, hp: e.target.value })} className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#16232B] mb-1.5">
                        Full Name <span className="text-[#B3392F]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={80}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E4DFD6] rounded-lg bg-[#FAF8F4] text-[#16232B] text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C63]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#16232B] mb-1.5">
                        Phone / WhatsApp <span className="text-[#B3392F]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength={15}
                        pattern="[0-9+\s\-]{7,15}"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E4DFD6] rounded-lg bg-[#FAF8F4] text-[#16232B] text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C63]"
                        placeholder="+91 98XXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16232B] mb-1.5">
                      Your Enquiry <span className="text-[#B3392F]">*</span>
                    </label>
                    <textarea
                      required
                      maxLength={500}
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E4DFD6] rounded-lg bg-[#FAF8F4] text-[#16232B] text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5C63] resize-none"
                      placeholder="Briefly describe your concern or the treatment you are enquiring about…"
                    />
                  </div>
                  {formState === "error" && (
                    <p className="text-sm text-[#B3392F]" role="alert">
                      Please check the required fields and try again.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="w-full py-3.5 rounded-full bg-[#0F5C63] text-white font-medium text-sm hover:bg-[#0b464c] transition-colors disabled:opacity-50"
                  >
                    {formState === "sending" ? "Submitting…" : "Send Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>
        )}

        {/* Booking Flow */}
        {tab === "booking" && (
          <RevealOnScroll>
            <div className="bg-white border border-[#E4DFD6] rounded-[16px] p-6 sm:p-8">
              <p className="text-xs text-[#9BA7AE] mb-6">
                Demo only: this is a prototype booking flow. Nothing is confirmed or stored.
              </p>

              {/* Step indicator */}
              <div className="flex items-center gap-0 mb-8">
                {BOOKING_STEPS.map((label, i) => (
                  <React.Fragment key={label}>
                    <div className={`flex items-center gap-2 ${i < bookStep ? "text-[#0F5C63]" : i === bookStep ? "text-[#16232B]" : "text-[#9BA7AE]"}`}>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium border-2 ${i < bookStep ? "bg-[#0F5C63] border-[#0F5C63] text-white" : i === bookStep ? "border-[#0F5C63] text-[#0F5C63]" : "border-[#E4DFD6] text-[#9BA7AE]"}`}>
                        {i < bookStep ? "✓" : i + 1}
                      </div>
                      <span className="text-xs font-medium hidden sm:block">{label}</span>
                    </div>
                    {i < BOOKING_STEPS.length - 1 && <div className="flex-1 h-px bg-[#E4DFD6] mx-3" />}
                  </React.Fragment>
                ))}
              </div>

              {bookStep === 0 && (
                <div className="space-y-3">
                  <p className="font-serif text-lg text-[#16232B] mb-4">Choose location</p>
                  <button
                    onClick={() => setBookStep(1)}
                    className="w-full flex items-center gap-4 p-4 border border-[#E4DFD6] rounded-[12px] hover:border-[#0F5C63]/40 hover:bg-[#DCEBEA]/10 transition-colors text-left"
                  >
                    <LocationPinIcon size={20} className="text-[#0F5C63]" />
                    <div>
                      <p className="font-medium text-[#16232B] text-sm">Specialist Surgical Suite</p>
                      <p className="text-xs text-[#5B6870]">[Noida / Delhi NCR — address to be confirmed]</p>
                    </div>
                  </button>
                </div>
              )}

              {bookStep === 1 && (
                <div className="space-y-5">
                  <p className="font-serif text-lg text-[#16232B]">Choose a date</p>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {days.map((day, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedDay(day)}
                        className={`py-2.5 px-1 rounded-[10px] border text-xs font-medium transition-colors flex flex-col items-center gap-0.5 ${
                          selectedDay?.toDateString() === day.toDateString()
                            ? "bg-[#0F5C63] border-[#0F5C63] text-white"
                            : "border-[#E4DFD6] text-[#16232B] hover:border-[#0F5C63]/30"
                        }`}
                      >
                        <span className="text-[10px] opacity-70">{day.toLocaleDateString("en-IN", { weekday: "short" })}</span>
                        <span>{day.getDate()}</span>
                      </button>
                    ))}
                  </div>

                  {selectedDay && (
                    <div>
                      <p className="text-sm font-semibold text-[#16232B] mb-3">Available slots</p>
                      <div className="grid grid-cols-3 gap-2">
                        {SLOTS.map((slot, i) => {
                          const unavail = UNAVAILABLE.has(i);
                          return (
                            <button
                              key={slot}
                              disabled={unavail}
                              onClick={() => setSelectedSlot(slot)}
                              className={`py-2 px-3 rounded-[8px] border text-xs font-medium transition-colors ${
                                unavail
                                  ? "bg-[#FAF8F4] border-[#E4DFD6] text-[#C0C8CC] line-through cursor-not-allowed"
                                  : selectedSlot === slot
                                  ? "bg-[#0F5C63] border-[#0F5C63] text-white"
                                  : "border-[#E4DFD6] text-[#16232B] hover:border-[#0F5C63]/40"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <button onClick={() => setBookStep(0)} className="px-4 py-2.5 rounded-full border border-[#E4DFD6] text-[#5B6870] text-sm hover:bg-[#FAF8F4] transition-colors">
                      Back
                    </button>
                    <button
                      disabled={!selectedDay || !selectedSlot}
                      onClick={() => setBookStep(2)}
                      className="flex-1 py-2.5 rounded-full bg-[#0F5C63] text-white text-sm font-medium disabled:opacity-40 hover:bg-[#0b464c] transition-colors"
                    >
                      Confirm Slot
                    </button>
                  </div>
                </div>
              )}

              {bookStep === 2 && (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#DCEBEA] flex items-center justify-center mx-auto">
                    <CalendarIcon size={28} className="text-[#0F5C63]" />
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-[#16232B] mb-1">Appointment Confirmed</p>
                    <p className="text-sm text-[#5B6870]">
                      {selectedDay?.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })} at {selectedSlot}
                    </p>
                  </div>
                  <p className="text-xs text-[#9BA7AE] max-w-xs mx-auto">
                    Demo only: no actual booking has been made. In the live build, a confirmation message would be sent via WhatsApp.
                  </p>
                  <button
                    onClick={() => { setBookStep(0); setSelectedDay(null); setSelectedSlot(""); }}
                    className="text-[#0F5C63] underline text-sm"
                  >
                    Start over
                  </button>
                </div>
              )}
            </div>
          </RevealOnScroll>
        )}
      </div>
    </div>
  );
}
