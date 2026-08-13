import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brisanje računa i podataka",
  description: "Upute za brisanje SportSync računa i podataka (data deletion).",
  alternates: { canonical: "/delete-account" },
  openGraph: {
    url: "/delete-account",
    title: "Brisanje računa i podataka | SportSync",
    description: "Upute za brisanje SportSync računa i povezanih podataka.",
  },
}

export default function DeleteAccountLayout({ children }: { children: React.ReactNode }) {
  return children
}
