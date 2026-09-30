import React from "react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

export const metadata = {
  title: "Privacy & Disclaimer | Dr. Anshul Singhal",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#FAF8F4] py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <RevealOnScroll>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#16232B] font-normal mb-10">Privacy & Disclaimer</h1>
          <div className="prose prose-sm max-w-none text-[#5B6870] space-y-6">
            <p><strong>Demo Prototype Notice</strong>: This is a placeholder privacy policy for the private demo prototype. No real patient data is collected or stored on this site.</p>
            
            <h2 className="font-serif text-xl text-[#16232B] font-normal mt-8 mb-3">1. Medical Disclaimer</h2>
            <p>The content provided on this website is for general educational and informational purposes only. It is not intended as, and should not be considered, medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
            
            <h2 className="font-serif text-xl text-[#16232B] font-normal mt-8 mb-3">2. Data Privacy (To be finalised)</h2>
            <p>Upon launch, this website will comply with relevant data protection regulations (including India's DPDP Act, where applicable). Information submitted through contact forms will be used solely for the purpose of scheduling and responding to enquiries.</p>

            <h2 className="font-serif text-xl text-[#16232B] font-normal mt-8 mb-3">3. Third-Party Platforms</h2>
            <p>This website utilizes links to WhatsApp for communication. WhatsApp is a third-party application, and communications through it are subject to WhatsApp's own privacy policy and terms of service.</p>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
