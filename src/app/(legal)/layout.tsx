import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LogoAndName from "../assets/logoAndName.svg";

export const metadata: Metadata = {
  title: {
    template: "%s | SportSync",
    default: "SportSync",
  },
};

export default function LegalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="min-h-screen bg-[#E4E6F6] text-[#222222]">
        <header className="sticky top-0 z-40 border-b border-[#4138d0] bg-[#3026C1]">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-5 md:px-8">
            <Link href="/" aria-label="SportSync početna" className="shrink-0">
              <Image
                src={LogoAndName}
                alt="SportSync logotip"
                priority
                className="h-9 w-auto md:h-10"
              />
            </Link>

            <nav className="hidden items-center gap-8 text-sm text-white/80 lg:flex">
              <Link href="/#znacajke" className="transition hover:text-white">
                Značajke
              </Link>
              <Link href="/#kako-funkcionira" className="transition hover:text-white">
                Kako funkcionira
              </Link>
              <Link href="/#sportovi" className="transition hover:text-white">
                Sportovi
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Kontakt
              </Link>
            </nav>

            <Link
              href="/#preuzmi"
              className="hidden rounded-full bg-[#89FC00] px-6 py-3 text-sm font-semibold text-[#3026C1] transition hover:brightness-95 lg:inline-flex"
            >
              Preuzmi aplikaciju
            </Link>
          </div>
        </header>

        <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-14 md:px-8 md:pt-16">
          {children}
        </main>
      </div>
    </>
  );
}
