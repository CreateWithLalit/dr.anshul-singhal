"use client";

import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

/**
 * NOTE ON HINDI TRANSLATIONS:
 * The Hindi copy below is provided as demo terminology and requires formal
 * review and validation by a native medical professional before production use.
 */
const dictionary: Record<Language, Record<string, string>> = {
  en: {
    doctorName: "Dr. Anshul Singhal",
    doctorTitle: "Oral & Maxillofacial Surgeon",
    navHome: "Home",
    navAbout: "About & Credentials",
    navServices: "Services",
    navLocations: "Clinic Location",
    navGuide: "Patient Guide",
    navForDoctors: "For Doctors",
    navContact: "Contact",
    btnWhatsApp: "WhatsApp Consultation",
    btnCall: "Call Clinic",
    btnEmergency: "Emergency Trauma",
    btnBook: "Book Appointment",
    heroPositioning:
      "Specialist surgical care for the face, mouth, and jaws — calm, transparent, and patient-first.",
  },
  hi: {
    // Demo translation — Needs human clinical review before live release
    doctorName: "डॉ. अंशुल सिंघल",
    doctorTitle: "ओरल एवं मैक्सिलोफेशियल सर्जन",
    navHome: "होम",
    navAbout: "परिचय एवं योग्यताएं",
    navServices: "सर्जरी सेवाएं",
    navLocations: "क्लिनिक पता",
    navGuide: "मरीज मार्गदर्शिका",
    navForDoctors: "डॉक्टरों के लिए",
    navContact: "संपर्क करें",
    btnWhatsApp: "व्हाट्सएप परामर्श",
    btnCall: "कॉल करें",
    btnEmergency: "आपातकालीन ट्रौमा",
    btnBook: "अपॉइंटमेंट बुक करें",
    heroPositioning:
      "चेहरे, जबड़े एवं मुख की विशेषज्ञ शल्य चिकित्सा — शांत, स्पष्ट और गरिमापूर्ण देखभाल।",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return dictionary[language]?.[key] || dictionary.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
