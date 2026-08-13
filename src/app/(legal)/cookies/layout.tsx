import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politika kolačića",
  description: "Informacije o kolačićima na web stranici SportSync.",
  alternates: { canonical: "/cookies" },
  openGraph: {
    url: "/cookies",
    title: "Politika kolačića | SportSync",
    description: "Informacije o kolačićima na web stranici SportSync.",
  },
}

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
