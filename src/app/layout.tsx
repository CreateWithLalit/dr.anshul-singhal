import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { DemoRibbon } from "@/components/DemoRibbon";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomActionBar } from "@/components/BottomActionBar";
import { LenisSmoothScroll } from "@/components/motion/LenisSmoothScroll";
import { LanguageProvider } from "@/components/LanguageContext";
import { prelaunchRobots, siteUrl } from "@/lib/prelaunch";
import { getVerifiedMedicalSchema } from "@/lib/structured-data";
import { getSiteSettings } from "@/lib/content";

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
    "A pre-launch website for Dr. Anshul Singhal, Oral and Maxillofacial Surgeon.",
  robots: prelaunchRobots,
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
};

export const viewport: Viewport = {
  themeColor: "#FAF8F4",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [medicalSchema, settings] = await Promise.all([getVerifiedMedicalSchema(), getSiteSettings()]);
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
        {medicalSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
          />
        )}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-[#0F5C63] focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>
        <LanguageProvider>
          <LenisSmoothScroll />
          <DemoRibbon />
          <Header phone={settings.defaultPhone} whatsApp={settings.defaultWhatsApp} ctas={settings.contactCtas} />
          <main id="main-content" className="flex-1 flex flex-col min-h-screen">{children}</main>
          <Footer phoneDisplay={settings.defaultPhoneFormatted} />
          <BottomActionBar phone={settings.defaultPhone} whatsApp={settings.defaultWhatsApp} ctas={settings.contactCtas} />
        </LanguageProvider>
      </body>
    </html>
  );
}
