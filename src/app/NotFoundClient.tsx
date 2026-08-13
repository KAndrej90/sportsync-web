"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LogoAndName from "./assets/logoAndName.svg";
import LanguageChooser from "./localization/LanguageChooser";
import LocalizedLink from "./localization/LocalizedLink";
import { useLanguage } from "./localization/LanguageProvider";
import MatchAnnouncementPage from "./match-announcements/MatchAnnouncementPage";

const copy = {
  hr: {
    home: "SportSync početna",
    logo: "SportSync logotip",
    title: "Stranica nije pronađena",
    description: "Provjerite adresu ili se vratite na početnu stranicu.",
    back: "Natrag na početnu",
  },
  en: {
    home: "SportSync home",
    logo: "SportSync logo",
    title: "Page not found",
    description: "Check the address or return to the home page.",
    back: "Back to home",
  },
};

function getAnnouncementId(pathname: string): string | null {
  const match = pathname.match(/^\/match-announcements\/([^/]+)\/?$/);
  if (!match) return null;

  try {
    return decodeURIComponent(match[1]);
  } catch {
    return match[1];
  }
}

export default function NotFoundClient() {
  const { language } = useLanguage();
  const text = copy[language];
  const [resolved, setResolved] = useState(false);
  const [announcementId, setAnnouncementId] = useState<string | null>(null);

  useEffect(() => {
    setAnnouncementId(getAnnouncementId(window.location.pathname));
    setResolved(true);
  }, []);

  if (!resolved) {
    return <main className="min-h-screen bg-[#E4E6F6]" aria-busy="true" />;
  }

  if (announcementId) {
    return <MatchAnnouncementPage announcementId={announcementId} />;
  }

  return (
    <div className="min-h-screen bg-[#E4E6F6] text-[#222222]">
      <header className="border-b border-[#4138d0] bg-[#3026C1]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <LocalizedLink href="/" aria-label={text.home} className="inline-flex">
            <Image src={LogoAndName} alt={text.logo} priority className="h-9 w-auto md:h-10" />
          </LocalizedLink>
          <LanguageChooser compact />
        </div>
      </header>
      <main className="grid min-h-[calc(100vh-81px)] place-items-center px-5 py-12 text-center">
        <div className="w-full max-w-lg rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_rgba(31,36,48,0.13)] md:p-12">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#3026C1]">404</span>
          <h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#1F2430] md:text-4xl">
            {text.title}
          </h1>
          <p className="mt-4 text-[#5F6471]">{text.description}</p>
          <LocalizedLink
            href="/"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#89FC00] px-7 font-bold text-[#3026C1]"
          >
            {text.back}
          </LocalizedLink>
        </div>
      </main>
    </div>
  );
}
