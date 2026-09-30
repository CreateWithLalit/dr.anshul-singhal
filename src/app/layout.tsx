import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { DemoRibbon } from "@/components/DemoRibbon";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomActionBar } from "@/components/BottomActionBar";
import { LenisSmoothScroll } from "@/components/motion/LenisSmoothScroll";
import { LanguageProvider } from "@/components/LanguageContext";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Anshul Singhal | Oral & Maxillofacial Surgeon",
  description:
    "Specialist oral and maxillofacial surgery in Noida & Delhi NCR. Calm, precise, patient-first care.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Check if this is the login page path (login page gets no site chrome)
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased selection:bg-[#DCEBEA] selection:text-[#0F5C63] bg-[#FAF8F4]"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <LenisSmoothScroll />
          <DemoRibbon />
          <Header />
          <main className="flex-1 flex flex-col min-h-screen">{children}</main>
          <Footer />
          <BottomActionBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
