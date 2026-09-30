import { NextResponse } from "next/server";
import { mockSuccess, type MockFormFailure, validateReferralPayload } from "@/lib/forms";

export async function POST(request: Request) {
  try {
    const payload = validateReferralPayload(await request.json());
    if (!payload) {
      const response: MockFormFailure = {
        success: false,
        code: "validation_error",
        error: "Please provide a valid referrer name, patient name, and phone number.",
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Pre-launch contract: deliberately do not persist, transmit, or log payload data.
    return NextResponse.json(mockSuccess);
  } catch {
    const response: MockFormFailure = {
      success: false,
      code: "validation_error",
      error: "Please check the form and try again.",
    };
    return NextResponse.json(response, { status: 400 });
  }
}
