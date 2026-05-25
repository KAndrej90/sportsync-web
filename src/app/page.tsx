"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Instagram, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoAndName from "./assets/logoAndName.svg";
import AppStoreBadge from "./assets/Download_on_the_App_Store_Badge_HR_blk_082124.svg";
import GooglePlayBadge from "./assets/GetItOnGooglePlay_Badge_Web_color_Croatian.svg";
import FeatureIconOne from "./assets/Frame 131.svg";
import FeatureIconTwo from "./assets/Frame 131 (1).svg";
import FeatureIconThree from "./assets/Frame 131 (2).svg";
import StepIconOne from "./assets/Frame 131 (3).svg";
import StepIconTwo from "./assets/Frame 131 (4).svg";
import StepIconThree from "./assets/state-layer.svg";
import HeroPhone from "./assets/mobiteeel 1.svg";
import SportImageOne from "./assets/11 1.png";
import SportImageTwo from "./assets/12 1.png";
import SportImageThree from "./assets/13 1.png";
import SportImageFour from "./assets/14 1.png";
import HandballImage from "./assets/handball-pexels.jpg";
import WaterPoloImage from "./assets/waterpolo-pexels.jpg";

const navLinks = [
  { href: "#znacajke", label: "Značajke" },
  { href: "#kako-funkcionira", label: "Kako funkcionira" },
  { href: "#sportovi", label: "Sportovi" },
  { href: "/contact", label: "Kontakt" },
];

const storeLinks = [
  {
    href: "https://play.google.com/store/apps/details?id=com.andrejk90.SPORTSYNC",
    label: "Preuzmi SportSync na Google Play trgovini",
    badge: GooglePlayBadge,
  },
  {
    href: "https://apps.apple.com/hr/app/sportsync/id6758768052?l=hr",
    label: "Preuzmi SportSync na App Storeu",
    badge: AppStoreBadge,
  },
];

const features = [
  {
    title: "Organiziraj u sekundi",
    description:
      "Kreiraj termin u par dodira, podijeli s prijateljima i prati potvrde u stvarnom vremenu.",
    icon: FeatureIconOne,
  },
  {
    title: "Ocijeni igrače",
    description:
      "Izgradi povjerenje kroz recenzije i ocjene te pronađi pouzdane partnere za igru.",
    icon: FeatureIconTwo,
  },
  {
    title: "Dogovori u jednom chatu",
    description:
      "Razmjenjuj privatne poruke 1:1 i dogovaraj detalje unutar chata svakog termina bez prebacivanja na druge aplikacije.",
    icon: FeatureIconThree,
  },
];

const steps = [
  {
    title: "Kreiraj profil",
    description:
      "Postavi sportske preferencije i dozvoli SportSyncu da pronađe prave suigrače umjesto tebe.",
    icon: StepIconOne,
  },
  {
    title: "Nađi termin",
    description:
      "Pregledaj otvorene susrete u tvojoj blizini ili otvori novi i pozovi ekipu.",
    icon: StepIconTwo,
  },
  {
    title: "Igraj bez brige",
    description:
      "Potvrdi dolazak, sinkroniziraj kalendar i prepusti se igri bez stresa oko organizacije.",
    icon: StepIconThree,
  },
  {
    title: "Ocijeni suigrače",
    description:
      "Nakon igre ostavi ocjenu i komentar kako bi zajednica lakše pronašla pouzdane partnere za sljedeći termin.",
    icon: null,
  },
];

const sports = [
  {
    title: "Nogomet na\nmali i veliki gol",
    image: SportImageOne,
  },
  {
    title: "Košarka na otvorenom\ni u dvorani",
    image: SportImageTwo,
  },
  {
    title: "Odbojka i odbojka\nna pijesku",
    image: SportImageThree,
  },
  {
    title: "Tenis, padel,\nsquash i badminton",
    image: SportImageFour,
  },
  {
    title: "Rukomet",
    image: HandballImage,
  },
  {
    title: "Vaterpolo",
    image: WaterPoloImage,
  },
];

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#89FC00] px-4 py-2 text-xs font-semibold uppercase tracking-[0.03em] text-[#3026C1] shadow-[0_10px_25px_rgba(137,252,0,0.25)]">
      {children}
    </span>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-animate",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
        },
      );

      gsap.utils.toArray<HTMLElement>(".fade-section").forEach((section) => {
        const items = section.querySelectorAll(".fade-item");
        if (!items.length) return;

        gsap.fromTo(
          items,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#E4E6F6] text-[#222222]"
    >
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
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://apps.apple.com/hr/app/sportsync/id6758768052?l=hr"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#89FC00] px-6 py-3 text-sm font-semibold text-[#3026C1] transition hover:brightness-95 lg:inline-flex"
          >
            Preuzmi aplikaciju
          </a>
        </div>
      </header>

      <main>
        <section className="overflow-hidden bg-[#E4E6F6]">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
            <div className="hero-animate">
              <h1 className="max-w-[12ch] text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#1f2430] sm:text-5xl lg:text-[3.9rem]">
                Pronađi svoj tim.
                <br />
                <span className="text-[#3026C1]">Sinkroniziraj</span> svoju
                igru.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#2f3443] md:text-lg">
                SportSync okuplja sportske rekreativce diljem Hrvatske i pomaže
                im da lako dogovore termine, podijele strast i osjete energiju
                igre. Više traženja, manje otkazivanja.{" "}
                <strong>Samo čista sportska vibra.</strong>
              </p>

              <div
                id="preuzmi"
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
              >
                {storeLinks.map((store) => (
                  <a
                    key={store.href}
                    href={store.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={store.label}
                    className="transition hover:-translate-y-0.5"
                  >
                    <Image
                      src={store.badge}
                      alt={store.label}
                      className="h-[54px] w-auto"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-animate relative flex justify-center lg:justify-end">
              <div className="absolute top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-[#3026C1]/30 blur-3xl md:h-100 md:w-100" />
              <Image
                src={HeroPhone}
                alt="SportSync mobilna aplikacija"
                className="relative w-full max-w-[330px] drop-shadow-[0_28px_45px_rgba(48,38,193,0.28)] md:max-w-[490px]"
              />
            </div>
          </div>
        </section>

        <section
          id="znacajke"
          className="fade-section overflow-hidden bg-[#3026C1] px-5 py-16 text-white md:px-8 md:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="fade-item text-center">
              <SectionTag>Zašto SportSync?</SectionTag>
              <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Sportska zajednica koja diše kao i ti
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                Kombiniramo tehnologiju i strast prema sportu kako bismo ti dali
                platformu na kojoj svaki trening i utakmica postaju jednostavni
                za dogovor.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="fade-item rounded-[1.75rem] bg-white px-7 py-8 text-center text-[#222222] shadow-[0_24px_40px_rgba(13,8,67,0.18)]"
                >
                  <Image
                    src={feature.icon}
                    alt=""
                    aria-hidden="true"
                    className="mx-auto h-[78px] w-[78px]"
                  />
                  <h3 className="mt-5 text-2xl font-medium tracking-[-0.02em]">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#4a4f5e]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="kako-funkcionira"
          className="fade-section relative overflow-hidden bg-[#3026C1] px-5 py-16 text-white md:px-8 md:py-24"
        >
          <div className="absolute inset-x-0 bottom-0 top-[28%]">
            <Image
              src={SportImageTwo}
              alt=""
              aria-hidden="true"
              fill
              className="object-cover opacity-35 blur-[1px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#3026C1] via-[#3026C1]/55 to-[#3026C1]/20" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="fade-item text-center">
              <SectionTag>Korak po korak</SectionTag>
              <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Od ideje do igre u nekoliko minuta
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/80 md:text-base">
                Bez prebacivanja između više aplikacija i bez nepotrebnih
                nedolazaka. SportSync prati dolaske, omogućuje komunikaciju
                sudionika, sinkronizira kalendar i šalje ti nove prijedloge dok
                ti planiraš sljedeći potez.
              </p>
            </div>

            <div className="relative mt-16 grid gap-5 md:grid-cols-2 md:gap-6">
              {steps.map((step) => (
                <article
                  key={step.title}
                  className="fade-item rounded-[1.6rem] bg-white px-5 py-5 text-[#222222] shadow-[0_24px_40px_rgba(13,8,67,0.18)] md:min-h-[180px] md:px-6"
                >
                  <div className="flex items-start gap-4">
                    {step.icon ? (
                      <Image
                        src={step.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-16 w-16 shrink-0"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#DDF7A9]"
                      >
                        <Star className="h-8 w-8 fill-[#3026C1] text-[#3026C1]" />
                      </span>
                    )}
                    <div className="min-w-0">
                      <h3 className="text-3xl font-medium tracking-[-0.03em] md:text-[1.85rem]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#4a4f5e]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="sportovi"
          className="fade-section bg-[#E4E6F6] px-5 py-16 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="fade-item">
              <SectionTag>Izaberi ritam</SectionTag>
              <h2 className="mt-8 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[#1f2430] sm:text-4xl">
                Sve što ti treba za sportsku avanturu
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4a4f5e] md:text-base">
                Bez obzira treniraš li ozbiljno ili igraš rekreativno, SportSync
                ti daje pregled najpopularnijih sportova i zajednica u tvojoj
                okolini.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sports.map((sport) => (
                <article
                  key={sport.title}
                  className="fade-item group relative overflow-hidden rounded-[1.25rem] shadow-[0_18px_30px_rgba(48,38,193,0.12)]"
                >
                  <Image
                    src={sport.image}
                    alt={sport.title.replaceAll("\n", " ")}
                    className="h-[165px] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[#3026C1]/42" />
                  <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                    <h3 className="whitespace-pre-line text-2xl font-semibold leading-tight tracking-[-0.02em] text-white">
                      {sport.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="fade-section bg-[#2b2b2d] px-5 py-16 text-white md:px-8 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="fade-item max-w-2xl">
                <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/75">
                  Budućnost sporta
                </span>
                <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
                  Pridruži se SportSync pokretu i igraj s najboljima.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                  Osjeti kako je jednostavno ostati aktivan kad imaš zajednicu
                  koja te podržava. Preuzmi aplikaciju i vidimo se na terenu!
                </p>
              </div>

              <div className="fade-item flex flex-col gap-4 sm:flex-row lg:pt-8">
                {storeLinks.map((store) => (
                  <a
                    key={store.href}
                    href={store.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={store.label}
                    className="flex min-h-[112px] min-w-[152px] items-center justify-center rounded-[1.4rem] bg-white px-7 py-6 shadow-[0_20px_35px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5"
                  >
                    <Image
                      src={store.badge}
                      alt={store.label}
                      className="h-[42px] w-auto"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-8 text-white/65 lg:flex-row lg:items-end lg:justify-between">
              <div className="fade-item max-w-xl text-base leading-8">
                <p className="m-0">© 2026 SportSync. Sva prava pridržana.</p>
                <p className="m-0">
                  Codemem Consulting d.o.o. · Obedišće, Općina Križ, Hrvatska ·
                  OIB: 26881262647
                </p>
              </div>

              <div className="fade-item flex flex-col gap-6 lg:items-end">
                <nav className="flex flex-wrap gap-x-8 gap-y-3 text-base">
                  <Link href="/contact" className="transition hover:text-white">
                    Kontakt
                  </Link>
                  <Link href="/privacy" className="transition hover:text-white">
                    Politika privatnosti
                  </Link>
                  <Link href="/terms" className="transition hover:text-white">
                    Uvjeti korištenja
                  </Link>
                  <Link
                    href="/delete-account"
                    className="transition hover:text-white"
                  >
                    Brisanje podataka
                  </Link>
                </nav>

                <div className="flex items-center gap-5">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="SportSync Facebook"
                    className="transition hover:text-white"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="SportSync Instagram"
                    className="transition hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
