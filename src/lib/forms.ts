export type FormErrorCode = "validation_error" | "unavailable";

export interface MockFormSuccess {
  success: true;
  message: "Demo only: nothing is sent.";
}

export interface MockFormFailure {
  success: false;
  error: string;
  code: FormErrorCode;
}

export type MockFormResponse = MockFormSuccess | MockFormFailure;

export interface ContactLeadPayload {
  name: string;
  phone: string;
  message: string;
  website?: string;
}

export interface ReferralLeadPayload {
  referringDoctor: string;
  clinicName?: string;
  patientName: string;
  patientPhone: string;
  referralSummary?: string;
  website?: string;
}

const phonePattern = /^[0-9+\s()-]{7,20}$/;

const text = (value: unknown, maximum: number, required = false) => {
  if (typeof value !== "string") return required ? undefined : "";
  const trimmed = value.trim();
  if (required && !trimmed) return undefined;
  return trimmed.length <= maximum ? trimmed : undefined;
};

const phone = (value: unknown) => {
  const normalized = text(value, 20, true);
  return normalized && phonePattern.test(normalized) ? normalized : undefined;
};

export function validateContactPayload(value: unknown): ContactLeadPayload | undefined {
  if (!value || typeof value !== "object") return undefined;
  const body = value as Record<string, unknown>;
  const name = text(body.name, 80, true);
  const contactPhone = phone(body.phone);
  const message = text(body.message, 500, true);
  const website = text(body.website, 200);
  if (!name || !contactPhone || !message || website) return undefined;
  return { name, phone: contactPhone, message, website };
}

export function validateReferralPayload(value: unknown): ReferralLeadPayload | undefined {
  if (!value || typeof value !== "object") return undefined;
  const body = value as Record<string, unknown>;
  const referringDoctor = text(body.referringDoctor, 80, true);
  const clinicName = text(body.clinicName, 120);
  const patientName = text(body.patientName, 80, true);
  const patientPhone = phone(body.patientPhone);
  const referralSummary = text(body.referralSummary, 500);
  const website = text(body.website, 200);
  if (!referringDoctor || !patientName || !patientPhone || website) return undefined;
  return { referringDoctor, clinicName, patientName, patientPhone, referralSummary, website };
}

export const mockSuccess: MockFormSuccess = {
  success: true,
  message: "Demo only: nothing is sent.",
};
