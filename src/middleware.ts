import { NextResponse } from "next/server";
export function middleware() {
  // Owner override: no visitor-facing password gate. Robots/noindex stay active.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
