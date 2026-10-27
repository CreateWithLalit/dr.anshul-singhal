/**
 * Single source of truth for provisional clinic facts.
 *
 * Keep every value explicitly verified before allowing a production contact
 * action or factual presentation. Seed content adapts this configuration for
 * the page-level content contract.
 */
export type VerifiedValue<T> = {
  value: T;
  verified: boolean;
};

export const clinicConfig = {
  location: {
    slug: { value: "consultation-suite", verified: false },
    name: { value: "Specialist Surgical Consultation Suite", verified: false },
    district: { value: "[Consultation area to be confirmed]", verified: false },
    address: { value: "[Clinic address, landmark, and area to be confirmed]", verified: false },
    hours: {
      value: [
        "Monday – Friday: [Hours to be confirmed]",
        "Saturday: [Hours to be confirmed]",
        "Sunday: [Hours to be confirmed]",
      ],
      verified: false,
    },
    mapReferenceNote: {
      value: "A map and directions will appear here once the clinic location is verified.",
      verified: false,
    },
  },
  contacts: {
    phone: { value: "+910000000000", verified: false },
    phoneDisplay: { value: "+91 00000 00000", verified: false },
    whatsapp: { value: "910000000000", verified: false },
    whatsappDisplay: { value: "+91 00000 00000", verified: false },
    emergencyPhone: { value: "+910000000000", verified: false },
  },
  clinicDetails: {
    landmark: { value: "[Landmark to be confirmed]", verified: false },
    nearestMetro: { value: "[Nearest metro to be confirmed]", verified: false },
    consultationFee: { value: "[Consultation fee to be confirmed]", verified: false },
    paymentModes: { value: "[Payment modes to be confirmed]", verified: false },
    insurance: { value: "[Insurance support to be confirmed]", verified: false },
  },
} as const;
