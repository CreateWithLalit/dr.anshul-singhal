import type { Metadata } from "next";

/**
 * The one public configuration switch for the temporary private/pre-launch state.
 * Keep the legacy environment-variable name until a compatibility-safe rename is
 * planned; all application code must read the state through this module.
 */
export const isPrelaunchMode = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";

export const prelaunchRobots: Metadata["robots"] = isPrelaunchMode
  ? { index: false, follow: false }
  : { index: true, follow: true };

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
