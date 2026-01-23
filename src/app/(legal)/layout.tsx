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
      <header className="hero-animate fixed inset-x-0 top-0 z-30 border-b border-[#141031] bg-gradient-to-r from-[#16112e]/98 via-[#1b1650]/95 to-[#141031]/98 shadow-[0_18px_45px_rgba(12,9,30,0.35)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 md:px-10">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="SportSync početna" className="inline-flex">
              <Image
                src={LogoAndName}
                alt="SportSync logotip"
                priority
                className="h-11 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
              />
            </Link>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/75 lg:flex">
            <Link href="/#feature" className="transition-colors hover:text-white">
              Značajke
            </Link>
            <Link href="/#kako" className="transition-colors hover:text-white">
              Kako funkcionira
            </Link>
            <Link href="/#sports" className="transition-colors hover:text-white">
              Sportovi
            </Link>
            <Link href="/#download" className="transition-colors hover:text-white">
              Preuzmi
            </Link>
          </nav>
          <Link
            href="/#download"
            className="hidden rounded-full bg-gradient-to-r from-[#89FC00] to-[#54C600] px-6 py-2 text-sm font-semibold text-[#101010] shadow-lg shadow-[#89FC00]/25 transition hover:brightness-110 lg:inline-flex"
          >
            Preuzmi aplikaciju
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-6 pb-20 pt-32 md:px-10">
        {children}
      </main>
    </>
  );
}
