export type VerificationStatus = "placeholder" | "pending" | "verified";

export type ServiceStatus = "offered" | "to-confirm";

export type ServicePillar =
  | "maxillofacial"
  | "implantology"
  | "geriatric"
  | "rehabilitation";

export interface Doctor {
  name: string; // "Dr. Anshul Singhal"
  title: string; // "Oral and Maxillofacial Surgeon"
  positioningLine: string;
  bioPlaceholder: string;
  portrait: {
    alt: string;
    type: "illustration" | "image";
    status: VerificationStatus;
    src?: string;
    blurDataURL?: string;
  };
  registrationNumber: {
    value: string;
    status: VerificationStatus;
  };
  languages: string[];
}

export interface Credential {
  id: string;
  type: "degree" | "specialization" | "registration" | "membership" | "hospital_affiliation";
  title: string;
  institution: string;
  year?: string;
  status: VerificationStatus;
  sourceNote?: string;
}

export interface ServiceStep {
  number: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  pillar: ServicePillar;
  pillarLabel: string;
  title: string;
  shortSummary: string;
  educationalOverview: string;
  whatToExpect: string[];
  steps: ServiceStep[];
  faqs: ServiceFAQ[];
  costFactors: string[];
  relatedSlugs: string[];
  status: ServiceStatus;
  sampleBeforeAfterNote?: string;
}

export interface Location {
  slug: string;
  name: string;
  district: string;
  address: string;
  hours: string[];
  phone: string; // fake placeholder e.g. +91 00000 00000
  whatsappNumber: string; // fake placeholder e.g. +91 00000 00000
  whatsappDisplay: string;
  mapReferenceNote: string;
  bookingEnabled: boolean;
  isPrimary?: boolean;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  readTimeMinutes: number;
  bodyParagraphs: string[];
  relatedServiceSlug: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  attribution: string;
  consentRecord: string;
  status: VerificationStatus;
}

export interface SiteSettings {
  isDemoMode: boolean;
  demoNotice: string;
  defaultPhone: string;
  defaultPhoneFormatted: string;
  defaultWhatsApp: string;
  defaultWhatsAppFormatted: string;
  emergencyCallNumber: string;
  defaultLocationName: string;
  disclaimerText: string;
  privacyNoticeText: string;
  statFiguresDisclaimer: string;
  servicesDisclaimer: string;
  contactCtas: {
    whatsappLabel: string;
    callLabel: string;
    bookLabel: string;
    emergencyLabel: string;
    whatsappMessage: string;
  };
}

/** Safe, public subset of site settings for client-rendered interaction shells. */
export interface PublicContactSettings {
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappMessage: string;
  locationName: string;
  locationDistrict: string;
}

export interface ContentData {
  doctor: Doctor;
  credentials: Credential[];
  services: Service[];
  locations: Location[];
  articles: Article[];
  testimonials: Testimonial[];
  settings: SiteSettings;
}
