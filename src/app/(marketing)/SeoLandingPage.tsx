import Image from "next/image";
import Link from "next/link";
import LogoAndName from "../assets/logoAndName.svg";

type Section = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoLandingPageProps = {
  path: string;
  eyebrow: string;
  title: string;
  lead: string;
  sections: Section[];
  related: Array<{ href: string; label: string }>;
};

const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=com.andrejk90.SPORTSYNC";
const appStoreUrl = "https://apps.apple.com/hr/app/sportsync/id6758768052?l=hr";

export default function SeoLandingPage({
  path,
  eyebrow,
  title,
  lead,
  sections,
  related,
}: SeoLandingPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: lead,
    url: `https://sportsync.hr${path}`,
    inLanguage: "hr-HR",
    isPartOf: {
      "@type": "WebSite",
      name: "SportSync",
      url: "https://sportsync.hr/",
    },
    about: {
      "@type": "SoftwareApplication",
      name: "SportSync",
      applicationCategory: "SportsApplication",
      operatingSystem: "Android, iOS",
    },
  };

  return (
    <div className="min-h-screen bg-[#E4E6F6] text-[#222222]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-[#4138d0] bg-[#3026C1]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" aria-label="SportSync početna">
            <Image
              src={LogoAndName}
              alt="SportSync"
              priority
              className="h-9 w-auto md:h-10"
            />
          </Link>
          <Link
            href="/#preuzmi"
            className="rounded-full bg-[#89FC00] px-5 py-2.5 text-sm font-semibold text-[#3026C1]"
          >
            Preuzmi aplikaciju
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-[#3026C1] px-5 py-16 text-white md:px-8 md:py-24">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Putanja" className="text-sm text-white/65">
              <Link href="/" className="hover:text-white">Početna</Link>
              <span aria-hidden="true"> / </span>
              <span>{eyebrow}</span>
            </nav>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#89FC00]">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
              {lead}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#89FC00] px-6 py-3 font-semibold text-[#3026C1]"
              >
                Google Play
              </a>
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                App Store
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-b border-[#3026C1]/10 py-9 first:pt-0 last:border-0"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#1f2430] md:text-3xl">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-base leading-8 text-[#4a4f5e] md:text-lg">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl bg-white px-5 py-4 font-medium text-[#3026C1] shadow-[0_10px_25px_rgba(48,38,193,0.07)]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <aside className="mt-10 rounded-[2rem] bg-white p-7 shadow-[0_18px_40px_rgba(48,38,193,0.09)] md:p-10">
            <h2 className="text-2xl font-semibold text-[#1f2430]">Saznaj više o SportSyncu</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-[#3026C1]/20 px-4 py-2 font-medium text-[#3026C1] hover:bg-[#3026C1] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
