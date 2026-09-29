import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          hover: "#0b464c",
        },
        sand: {
          DEFAULT: "var(--sand)",
          light: "#EFE8DA",
        },
        hairline: "var(--hairline)",
        emergency: "var(--emergency)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(22, 35, 43, 0.05), 0 1px 4px -1px rgba(22, 35, 43, 0.03)",
        card: "0 4px 20px -4px rgba(22, 35, 43, 0.06)",
        hover: "0 8px 30px -4px rgba(22, 35, 43, 0.09)",
      },
    },
  },
  plugins: [],
} satisfies Config;
