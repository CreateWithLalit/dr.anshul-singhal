import { NextResponse } from "next/server";
import { getPublicContactSettings } from "@/lib/content";

/**
 * Public, read-only content contract for client-rendered demo form shells.
 * It intentionally returns only contact display/link values, never secrets.
 */
export async function GET() {
  return NextResponse.json(await getPublicContactSettings());
}
