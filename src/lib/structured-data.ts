import { getDoctor, getLocations, getSiteSettings } from "./content";
import { isPrelaunchMode, siteUrl } from "./prelaunch";

const isPublishedValue = (value: string) =>
  Boolean(value) && !value.includes("[") && !value.includes("00000");

/**
 * Emits no structured data until the site is in production mode and the minimum
 * factual fields are present. This keeps placeholder data out of search engines.
 */
export async function getVerifiedMedicalSchema(): Promise<Record<string, unknown> | null> {
  if (isPrelaunchMode || !siteUrl) return null;

  const [doctor, locations, settings] = await Promise.all([
    getDoctor(),
    getLocations(),
    getSiteSettings(),
  ]);
  const location = locations.find((item) => item.isPrimary);

  if (
    doctor.registrationNumber.status !== "verified" ||
    !location ||
    !isPublishedValue(location.address) ||
    !isPublishedValue(settings.defaultPhoneFormatted)
  ) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": ["Physician", "MedicalClinic", "LocalBusiness"],
    name: doctor.name,
    url: siteUrl,
    telephone: settings.defaultPhoneFormatted,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
    },
  };
}
