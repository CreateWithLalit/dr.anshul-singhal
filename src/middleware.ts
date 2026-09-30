import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isPrelaunchMode } from "@/lib/prelaunch";
import { createDemoSessionToken } from "@/lib/demo-session";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Never gate: API routes, login page, static assets
  if (
    pathname.startsWith("/api/") ||
    pathname === "/login" ||
    pathname.startsWith("/_next") ||
    pathname === "/robots.txt" ||
    pathname.includes("favicon")
  ) {
    return NextResponse.next();
  }

  // Only gate in demo mode
  if (!isPrelaunchMode) return NextResponse.next();

  const password = process.env.DEMO_PASSWORD;
  const session = request.cookies.get("demo_session");
  const expectedSession = password ? await createDemoSessionToken(password) : undefined;
  if (!expectedSession || session?.value !== expectedSession) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
