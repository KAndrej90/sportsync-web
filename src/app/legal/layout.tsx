import type { Metadata } from "next";
import LegalShell from "./LegalShell";

export const metadata: Metadata = {
  title: {
    template: "%s | SportSync",
    default: "SportSync",
  },
};

export default function LegalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LegalShell>{children}</LegalShell>;
}
