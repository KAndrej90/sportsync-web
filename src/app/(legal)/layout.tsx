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

const navLinks = [
  { href: "/#sezone", label: "Sezone", isNew: true },
  { href: "/#kako-funkcionira", label: "Kako funkcionira" },
  { href: "/#sportovi", label: "Sportovi" },
  { href: "/contact", label: "Kontakt" },
];

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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2 rounded-full px-1 py-1 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {link.label}
                {link.isNew ? (
                  <span className="rounded-full bg-[#89FC00] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#3026C1] transition group-hover:scale-[1.04]">
                    Novo
                  </span>
                ) : null}
              </Link>
            ))}
          </nav>

          <a
            href="https://apps.apple.com/hr/app/sportsync/id6758768052?l=hr"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#89FC00] px-6 py-3 text-sm font-semibold text-[#3026C1] transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:inline-flex"
          >
            Preuzmi aplikaciju
          </a>
        </div>
      </header>

        <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-14 md:px-8 md:pt-16">
          {children}
        </main>
      </div>
    </>
  );
}
