"use client";

import React, { useState, useEffect } from "react";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isDemo) {
      setIsAuthenticated(true);
      return;
    }

    // Check session
    fetch("/api/gate")
      .then((res) => res.json())
      .then((data) => {
        setIsAuthenticated(!!data.authenticated);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, [isDemo]);

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
        setIsAuthenticated(true);
      } else {
        setError(data.error || "Incorrect access code. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // While checking session initially
  if (isAuthenticated === null && isDemo) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center p-6 text-center text-[#5B6870]">
        <div className="w-6 h-6 border-2 border-[#0F5C63] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-sm">Loading Dr. Singhal&apos;s demo...</p>
      </div>
    );
  }

  // If not authenticated in demo mode, show minimal gate
  if (!isAuthenticated && isDemo) {
    return (
      <main className="min-h-screen bg-[#FAF8F4] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white border border-[#E4DFD6] rounded-card p-8 shadow-card text-center">
          <div className="w-12 h-12 rounded-full bg-[#DCEBEA] text-[#0F5C63] flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h1 className="font-serif text-2xl font-normal text-[#16232B] mb-2 tracking-tight">
            Dr. Anshul Singhal
          </h1>
          <p className="text-xs uppercase tracking-wider text-[#5B6870] font-sans font-medium mb-6">
            Oral &amp; Maxillofacial Surgeon • Private Preview
          </p>

          <p className="text-sm text-[#5B6870] mb-6 leading-relaxed">
            This private prototype is prepared for in-person review. Please enter the demo access code to proceed.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label
                htmlFor="gate-password"
                className="block text-xs font-semibold text-[#16232B] uppercase tracking-wider mb-1"
              >
                Access Code
              </label>
              <input
                id="gate-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter access code..."
                className="w-full px-4 py-3 border border-[#E4DFD6] rounded-lg text-[#16232B] bg-[#FAF8F4] focus:outline-none focus:ring-2 focus:ring-[#0F5C63] transition"
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
              className="w-full py-3 px-6 bg-[#0F5C63] text-white rounded-pill font-medium hover:bg-[#0b464c] transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "View Prototype"}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#E4DFD6] text-xs text-[#5B6870] flex justify-between items-center">
            <span>Demo default: <code className="bg-[#FAF8F4] px-1 py-0.5 rounded border border-[#E4DFD6]">dranshul2026</code></span>
            <button
              type="button"
              onClick={() => setPassword("dranshul2026")}
              className="text-[#0F5C63] underline font-medium hover:text-[#0b464c]"
            >
              Fill code
            </button>
          </div>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
