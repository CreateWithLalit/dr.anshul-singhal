import type { Metadata, Viewport } from "next";
import { Fraunces, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
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

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-sans",
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Anshul Singhal | Oral & Maxillofacial Surgeon",
  description:
    "Information about oral and maxillofacial consultation with Dr. Anshul Singhal.",
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
      className={`${fraunces.variable} ${notoSansDevanagari.variable}`}
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
          <Header phone={settings.defaultPhone} whatsApp={settings.defaultWhatsApp} phoneVerified={settings.contactVerification.phone} whatsAppVerified={settings.contactVerification.whatsapp} ctas={settings.contactCtas} />
          <main id="main-content" className="flex-1 flex flex-col min-h-screen">{children}</main>
          <Footer phoneDisplay={settings.defaultPhoneFormatted} />
          <BottomActionBar phone={settings.defaultPhone} whatsApp={settings.defaultWhatsApp} phoneVerified={settings.contactVerification.phone} whatsAppVerified={settings.contactVerification.whatsapp} />
        </LanguageProvider>
      </body>
    </html>
  );
}
