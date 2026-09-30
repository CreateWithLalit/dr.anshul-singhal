import { seedContent } from "./seed";
import type {
  Doctor,
  Credential,
  Service,
  Location,
  Article,
  SiteSettings,
  PublicContactSettings,
} from "./types";

/**
 * Content Access Module
 * In this demo prototype, reads from typed local seed data.
 * In production/real build, swap only this module to Sanity/Payload/Headless CMS.
 */

export async function getDoctor(): Promise<Doctor> {
  return seedContent.doctor;
}

export async function getCredentials(): Promise<Credential[]> {
  // Verification rule: only "verified" items render as normal content.
  // In demo mode, "placeholder" items are preserved with status chips.
  // "pending" items are never shown publicly.
  return seedContent.credentials.filter((c) => c.status !== "pending");
}

export async function getServices(): Promise<Service[]> {
  return seedContent.services;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  return seedContent.services.find((s) => s.slug === slug);
}

export async function getLocations(): Promise<Location[]> {
  return seedContent.locations;
}

export async function getLocationBySlug(slug: string): Promise<Location | undefined> {
  return seedContent.locations.find((l) => l.slug === slug);
}

export async function getArticles(): Promise<Article[]> {
  return seedContent.articles;
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return seedContent.articles.find((a) => a.slug === slug);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return seedContent.settings;
}

/**
 * Explicit allowlist for client form shells. Do not add credentials, gate state,
 * integration configuration, or any secret values here.
 */
export async function getPublicContactSettings(): Promise<PublicContactSettings> {
  const primaryLocation = seedContent.locations.find((location) => location.isPrimary);
  const settings = seedContent.settings;

  return {
    phone: settings.defaultPhone,
    phoneFormatted: settings.defaultPhoneFormatted,
    whatsappNumber: settings.defaultWhatsApp,
    whatsappFormatted: settings.defaultWhatsAppFormatted,
    whatsappMessage: settings.contactCtas.whatsappMessage,
    locationName: primaryLocation?.name ?? settings.defaultLocationName,
    locationDistrict: primaryLocation?.district ?? "[Consultation area to be confirmed]",
  };
}

export * from "./types";
