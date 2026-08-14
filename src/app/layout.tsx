import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { LanguageProvider } from "./localization/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sportsync.hr"),
  title: {
    default: "SportSync – Organizacija sportskih termina i pronalazak igrača",
    template: "%s | SportSync",
  },
  description:
    "Organiziraj sportske termine, prati dolaske ekipe i pronađi dodatne igrače za nogomet, košarku, padel i druge sportove.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://sportsync.hr/",
    siteName: "SportSync",
    title: "SportSync – Organizacija sportskih termina i pronalazak igrača",
    description:
      "Organiziraj sportske termine, prati dolaske ekipe i pronađi dodatne igrače za nogomet, košarku, padel i druge sportove.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SportSync",
      },
    ],
    locale: "hr_HR",
  },
  twitter: {
    card: "summary_large_image",
    title: "SportSync – Organizacija sportskih termina i pronalazak igrača",
    description:
      "Organiziraj sportske termine, prati dolaske ekipe i pronađi dodatne igrače za nogomet, košarku, padel i druge sportove.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={children}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}
