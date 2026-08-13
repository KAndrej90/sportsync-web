import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Potvrda email adrese",
  description: "Potvrdite email adresu povezanu sa SportSync računom.",
  alternates: { canonical: "/confirm-email" },
  robots: { index: false, follow: false },
};

export default function ConfirmEmailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
