import { isPrelaunchMode } from "@/lib/prelaunch";

export function GET() {
  const body = isPrelaunchMode
    ? "User-agent: *\nDisallow: /\n"
    : "User-agent: *\nAllow: /\n";
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
