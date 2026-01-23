import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "SportSync | Spoji se kroz sport",
    template: "%s | SportSync",
  },
  description:
    "Sportsync okuplja sportske rekreativce u Hrvatskoj i olakšava dogovor grupnih sportskih aktivnosti.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://sportsync.hr/",
    siteName: "SportSync",
    title: "SportSync | Spoji se kroz sport",
    description:
      "Sportsync okuplja sportske rekreativce u Hrvatskoj i olakšava dogovor grupnih sportskih aktivnosti.",
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
    title: "SportSync | Spoji se kroz sport",
    description:
      "Sportsync okuplja sportske rekreativce u Hrvatskoj i olakšava dogovor grupnih sportskih aktivnosti.",
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
        {children}
      </body>
    </html>
  );
}
