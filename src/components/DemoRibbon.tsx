"use client";

import React, { useState } from "react";

export function DemoRibbon() {
  const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";
  const [dismissed, setDismissed] = useState(false);

  if (!isDemo || dismissed) return null;

  return (
    <aside
      aria-label="Demo prototype notice"
      className="sticky top-0 z-50 bg-[#16232B] text-[#FAF8F4] text-xs py-1.5 px-4 text-center border-b border-[#2C3B45] flex items-center justify-between shadow-sm select-none"
    >
      <div className="flex-1 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#D9C7A8] animate-pulse" />
        <span className="font-medium tracking-wide">
          Demo prototype: content is placeholder. Not for public distribution.
        </span>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Temporarily minimize banner"
        className="text-[#9BA7AE] hover:text-white px-2 py-0.5 text-xs transition-colors rounded min-h-0 h-6 leading-none"
      >
        ×
      </button>
    </aside>
  );
}
