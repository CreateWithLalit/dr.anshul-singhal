import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
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
  const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";
  if (!isDemo) return NextResponse.next();

  const session = request.cookies.get("demo_session");
  if (session?.value !== "authenticated") {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
