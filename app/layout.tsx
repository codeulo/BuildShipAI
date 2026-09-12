import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Self-hosted variable fonts — no runtime dependency on Google Fonts' CDN,
// which also means one less third-party origin for the browser to connect to.
const fraunces = localFont({
  src: [
    { path: "./fonts/Fraunces.ttf", weight: "300 900", style: "normal" },
    { path: "./fonts/Fraunces-Italic.ttf", weight: "300 900", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-body",
  weight: "300 800",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono.ttf",
  variable: "--font-mono",
  weight: "400 800",
  display: "swap",
});

const siteUrl = "https://buildshipai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BuildShip AI — Stop Losing Customers on WhatsApp",
    template: "%s — BuildShip AI",
  },
  description:
    "Custom WhatsApp + AI automation for Nigerian businesses. We build automations that answer enquiries, capture leads, qualify customers and hand off to your team. Founding-client implementations from ₦100,000.",
  keywords: [
    "WhatsApp automation Nigeria",
    "WhatsApp AI chatbot",
    "WhatsApp business automation",
    "AI customer service Nigeria",
    "WhatsApp lead qualification",
  ],
  authors: [{ name: "BuildShip AI" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "BuildShip AI — Stop Losing Customers on WhatsApp",
    description:
      "Custom WhatsApp + AI automation for Nigerian businesses. Free 15-minute automation audit. Founding-client implementations from ₦100,000.",
    url: siteUrl,
    siteName: "BuildShip AI",
    locale: "en_NG",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BuildShip AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildShip AI — Stop Losing Customers on WhatsApp",
    description:
      "Custom WhatsApp + AI automation for Nigerian businesses. Free 15-minute automation audit.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BuildShip AI",
  description:
    "Custom WhatsApp + AI business automation for Nigerian small and medium businesses.",
  url: siteUrl,
  areaServed: {
    "@type": "Country",
    name: "Nigeria",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  priceRange: "₦₦",
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ground text-text">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
