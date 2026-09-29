import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const expectedPassword = process.env.DEMO_PASSWORD || "dranshul2026";

    if (password && password.trim() === expectedPassword.trim()) {
      const cookieStore = await cookies();
      cookieStore.set("demo_session", "authenticated", {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
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
  const cookieStore = await cookies();
  const session = cookieStore.get("demo_session");
  const isAuthenticated = session?.value === "authenticated";

  return NextResponse.json({ authenticated: isAuthenticated });
}
