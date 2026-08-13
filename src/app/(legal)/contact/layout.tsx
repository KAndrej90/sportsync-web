import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt i podrška za SportSync.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Kontakt | SportSync",
    description: "Kontaktirajte SportSync tim za podršku i pitanja o aplikaciji.",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
