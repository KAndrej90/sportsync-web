import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt i podrška za SportSync.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
