"use client";

import Image from "next/image";
import LogoAndName from "../assets/logoAndName.svg";
import LanguageChooser from "../localization/LanguageChooser";
import LocalizedLink from "../localization/LocalizedLink";
import { useLanguage } from "../localization/LanguageProvider";

const copy = {
  hr: {
    nav: [
      { href: "/#sezone", label: "Sezone", isNew: true },
      { href: "/#kako-funkcionira", label: "Kako funkcionira" },
      { href: "/#sportovi", label: "Sportovi" },
      { href: "/contact", label: "Kontakt" },
    ],
    home: "SportSync početna",
    logo: "SportSync logotip",
    newLabel: "Novo",
    download: "Preuzmi aplikaciju",
  },
  en: {
    nav: [
      { href: "/#sezone", label: "Seasons", isNew: true },
      { href: "/#kako-funkcionira", label: "How it works" },
      { href: "/#sportovi", label: "Sports" },
      { href: "/contact", label: "Contact" },
    ],
    home: "SportSync home",
    logo: "SportSync logo",
    newLabel: "New",
    download: "Download the app",
  },
};

export default function LegalShell({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <div className="min-h-screen bg-[#E4E6F6] text-[#222222]">
      <header className="sticky top-0 z-40 border-b border-[#4138d0] bg-[#3026C1]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-5 md:gap-6 md:px-8">
          <LocalizedLink href="/" aria-label={text.home} className="shrink-0">
            <Image
              src={LogoAndName}
              alt={text.logo}
              priority
              className="h-9 w-auto md:h-10"
            />
          </LocalizedLink>

          <nav className="hidden items-center gap-8 text-sm text-white/80 lg:flex">
            {text.nav.map((link) => (
              <LocalizedLink
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2 rounded-full px-1 py-1 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {link.label}
                {link.isNew ? (
                  <span className="rounded-full bg-[#89FC00] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#3026C1]">
                    {text.newLabel}
                  </span>
                ) : null}
              </LocalizedLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageChooser compact />
            <a
              href={`https://apps.apple.com/hr/app/sportsync/id6758768052?l=${language}`}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#89FC00] px-6 py-3 text-sm font-semibold text-[#3026C1] transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:inline-flex"
            >
              {text.download}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-14 md:px-8 md:pt-16">
        {children}
      </main>
    </div>
  );
}
