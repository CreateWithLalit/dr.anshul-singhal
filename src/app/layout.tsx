import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { DemoRibbon } from "@/components/DemoRibbon";
import { PasswordGate } from "@/components/PasswordGate";
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
    "Specialist oral and maxillofacial surgery services in Noida & Delhi NCR. Minimal, calm, and patient-first care.",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased selection:bg-[#DCEBEA] selection:text-[#0F5C63] min-h-screen flex flex-col">
        <LanguageProvider>
          <LenisSmoothScroll />
          <DemoRibbon />
          <PasswordGate>
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
            <BottomActionBar />
          </PasswordGate>
        </LanguageProvider>
      </body>
    </html>
  );
}
