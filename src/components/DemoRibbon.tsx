"use client";

import React from "react";
import { isPrelaunchMode } from "@/lib/prelaunch";

export function DemoRibbon() {
  if (!isPrelaunchMode) return null;

  return (
    <aside
      aria-label="Pre-launch notice"
      className="sticky top-0 z-50 bg-[#16232B] text-[#FAF8F4] text-xs py-1.5 px-4 text-center border-b border-[#2C3B45] shadow-sm select-none"
    >
      <div className="flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#D9C7A8] animate-pulse" />
        <span className="font-medium tracking-wide">
          Pre-launch: some content is awaiting verification. Not for public distribution.
        </span>
      </div>
    </aside>
  );
}
