import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isPrelaunchMode } from "@/lib/prelaunch";
import { createDemoSessionToken } from "@/lib/demo-session";

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

export async function POST(request: Request) {
  if (!isPrelaunchMode) return NextResponse.json({ success: true });

  try {
    const { password } = await request.json();
    const expectedPassword = process.env.DEMO_PASSWORD;

    if (!expectedPassword) {
      return NextResponse.json(
        { success: false, error: "Private access is not configured." },
        { status: 503 }
      );
    }

    if (typeof password === "string" && password.trim() === expectedPassword.trim()) {
      const cookieStore = await cookies();
      cookieStore.set("demo_session", await createDemoSessionToken(expectedPassword), {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        maxAge: SESSION_MAX_AGE_SECONDS,
        secure: process.env.NODE_ENV === "production",
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: "Incorrect access code" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Server error processing request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (!isPrelaunchMode) return NextResponse.json({ authenticated: true });
  const cookieStore = await cookies();
  const session = cookieStore.get("demo_session");
  const isAuthenticated = session?.value === "authenticated";

  return NextResponse.json({ authenticated: isAuthenticated });
}
