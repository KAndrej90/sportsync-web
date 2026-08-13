import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postavljanje nove lozinke",
  description: "Postavite novu lozinku za svoj SportSync račun.",
  alternates: { canonical: "/reset-password" },
  robots: { index: false, follow: false },
};

export default function ResetPasswordLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
