"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        router.push(from);
        router.refresh();
      } else {
        setError("Incorrect access code. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F4] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-[#DCEBEA] flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 stroke-[#0F5C63] fill-none"
              viewBox="0 0 24 24"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1 className="font-serif text-2xl font-normal text-[#16232B] mb-1">
            Dr. Anshul Singhal
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#5B6870] font-sans">
            Oral &amp; Maxillofacial Surgeon
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-[#E4DFD6] rounded-[12px] p-7 shadow-[0_4px_20px_-4px_rgba(22,35,43,0.06)]">
          <p className="text-sm text-[#5B6870] mb-6 text-center leading-relaxed">
            This is a private prototype prepared for in-person review. Enter the access code to proceed.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="gate-password"
                className="block text-xs font-semibold text-[#16232B] uppercase tracking-wider mb-1.5"
              >
                Access Code
              </label>
              <input
                id="gate-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter access code…"
                className="w-full px-4 py-3 text-[15px] border border-[#E4DFD6] rounded-lg bg-[#FAF8F4] text-[#16232B] focus:outline-none focus:ring-2 focus:ring-[#0F5C63] focus:border-transparent transition"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-xs text-[#B3392F] font-medium" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-[#0F5C63] text-white rounded-full font-medium text-sm hover:bg-[#0b464c] transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? "Verifying…" : "View Prototype"}
            </button>
          </form>

          <div className="mt-5 pt-4 border-t border-[#E4DFD6] flex items-center justify-between gap-2 text-xs text-[#5B6870]">
            <span>
              Code:{" "}
              <code className="bg-[#FAF8F4] px-1.5 py-0.5 rounded border border-[#E4DFD6] text-[#16232B]">
                dranshul2026
              </code>
            </span>
            <button
              type="button"
              onClick={() => setPassword("dranshul2026")}
              className="text-[#0F5C63] underline font-medium hover:no-underline"
            >
              Autofill
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-[#5B6870]/70">
          Demo prototype · Not for public distribution
        </p>
      </div>
    </main>
  );
}
