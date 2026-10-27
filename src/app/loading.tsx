import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FAF8F4] px-5 py-24">
      <div className="w-full max-w-md mx-auto space-y-6 text-center">
        {/* Subtle pulsing surgical monogram */}
        <div className="w-14 h-14 rounded-full bg-[#DCEBEA] border border-[#0F5C63]/20 flex items-center justify-center mx-auto animate-pulse">
          <span className="font-serif text-[#0F5C63] font-semibold text-lg">AS</span>
        </div>

        <div className="space-y-3">
          <div className="h-4 w-32 bg-[#E4DFD6]/60 rounded-full mx-auto animate-pulse" />
          <div className="h-6 w-48 bg-[#E4DFD6] rounded-full mx-auto animate-pulse" />
        </div>

        <p className="text-xs text-[#5B6870] font-sans">
          Loading clinical information…
        </p>
      </div>
    </div>
  );
}
