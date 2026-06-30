"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoAndName from "./assets/logoAndName.svg";
import AppStoreBadge from "./assets/Download_on_the_App_Store_Badge_HR_blk_082124.svg";
import GooglePlayBadge from "./assets/GetItOnGooglePlay_Badge_Web_color_Croatian.svg";
import HeroImage from "./assets/hero.svg";
import SportImageOne from "./assets/11 1.png";
import SportImageTwo from "./assets/12 1.png";
import SportImageThree from "./assets/13 1.png";
import SportImageFour from "./assets/14 1.png";
import HandballImage from "./assets/handball-pexels.jpg";
import WaterPoloImage from "./assets/waterpolo-pexels.jpg";
import SeasonScreenshotTable from "./assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.29.27.png";
import SeasonScreenshotResults from "./assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.29.34.png";
import SeasonScreenshotPlayers from "./assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.29.41.png";
import SeasonScreenshotTrophy from "./assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.29.55.png";
import SeasonScreenshotAchievements from "./assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.30.02.png";
import AttendanceIllustration from "./assets/howitworks/attendance-illustration.png";
import CreateTermIllustration from "./assets/howitworks/create-term-illustration.png";
import FindPlayersIllustration from "./assets/howitworks/find-players-illustration.png";
import RatingIllustration from "./assets/howitworks/rating-illustration.png";

const navLinks = [
  { href: "#sezone", label: "Sezone", isNew: true },
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

const seasonScreens = [
  {
    title: "Tablica",
    image: SeasonScreenshotTable,
  },
  {
    title: "Rezultati",
    image: SeasonScreenshotResults,
  },
  {
    title: "Igrači",
    image: SeasonScreenshotPlayers,
  },
  {
    title: "Postignuća",
    image: SeasonScreenshotTrophy,
  },
  {
    title: "Trofeji",
    image: SeasonScreenshotAchievements,
  },
];

const seasonScreenPositions = [
  "lg:translate-y-12",
  "lg:translate-y-5",
  "lg:z-10",
  "lg:translate-y-5",
  "lg:translate-y-12",
];

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#89FC00] px-4 py-2 text-xs font-semibold uppercase tracking-[0.03em] text-[#3026C1] shadow-[0_10px_25px_rgba(137,252,0,0.25)]">
      {children}
    </span>
  );
}

function JourneyIllustration({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-[280px] sm:w-[330px] ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-x-10 bottom-[12%] h-1/2 rounded-full bg-[#3026C1]/12 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-[3rem] shadow-[0_28px_65px_rgba(48,38,193,0.08)]">
        {children}
      </div>
    </div>
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

      gsap.utils.toArray<HTMLElement>(".journey-step").forEach((step) => {
        gsap.fromTo(
          step,
          { y: 56, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 82%",
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

          <Link
            href="#sezone"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs font-medium text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:hidden"
          >
            Sezone
            <span className="rounded-full bg-[#89FC00] px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-[#3026C1]">
              Novo
            </span>
          </Link>

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

      <main>
        <section className="overflow-hidden bg-[#E4E6F6]">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
            <div className="hero-animate">
              <h1 className="max-w-[12ch] text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#1f2430] sm:text-5xl lg:text-[3.9rem]">
                Organiziraj svoj termin.
                <br />
                <span className="text-[#3026C1]">Sinkroniziraj</span> svoju
                igru.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#2f3443] md:text-lg">
                SportSync ti pomaže voditi stalne sportske termine, pratiti
                dolaske svoje ekipe i po potrebi pronaći dodatne igrače kad se
                otvori slobodno mjesto. Također podržavamo mogućnost sezona,
                gdje možeš pratiti rezultate utakmica, strijelce, asistente i
                MVP. <strong>Manje dogovaranja, više igre.</strong>
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
              <Image
                src={HeroImage}
                alt="SportSync mobilna aplikacija"
                priority
                className="relative w-[460px] max-w-[92vw] md:w-[660px] lg:max-w-none lg:translate-x-8"
              />
            </div>
          </div>
        </section>

        <section
          id="sezone"
          className="fade-section overflow-hidden bg-[#E4E6F6] px-5 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10"
        >
          <div className="mx-auto max-w-6xl">
            <div className="fade-item mx-auto max-w-3xl text-center">
              <SectionTag>Sezone</SectionTag>
              <h2 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#1f2430] sm:text-5xl lg:text-[3.5rem]">
                Svaki termin sada piše veću priču.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#4a4f5e] md:text-lg">
                Poveži utakmice u sezonu, prati tablicu i rezultate te otkrij
                tko predvodi ekipu. Statistika, postignuća i trofeji ostaju
                sačuvani na jednom mjestu.
              </p>
            </div>

            <div className="fade-item relative mt-12 overflow-hidden rounded-[2.5rem] bg-[#3026C1] pb-8 pt-9 shadow-[0_30px_70px_rgba(48,38,193,0.2)] md:mt-14 md:pb-12 md:pt-11 lg:rounded-[3rem] lg:px-8 lg:pb-20">
              <div
                aria-hidden="true"
                className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[52px] border-white/[0.06]"
              />
              <div
                aria-hidden="true"
                className="absolute -right-20 top-12 h-60 w-60 rounded-full bg-[#89FC00]/15 blur-3xl"
              />

              <div className="relative flex flex-col items-center px-6 text-center text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#89FC00]">
                  Cijela sezona u džepu
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  Od prvog kola do zadnjeg trofeja
                </h3>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold sm:text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#89FC00] px-4 py-2 text-[#2017a7] shadow-[0_10px_24px_rgba(137,252,0,0.18)]">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-[#3026C1]"
                    />
                    Trenutačno samo za nogomet
                  </span>
                  <span className="rounded-full border border-dashed border-white/30 bg-white/[0.07] px-4 py-2 text-white/75">
                    Ostali sportovi dolaze uskoro
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-medium text-white/80 sm:text-sm">
                  {["Tablica", "Rezultati", "Statistika", "Postignuća"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="relative mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[12vw] pb-6 pt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-[20vw] lg:mt-12 lg:grid lg:grid-cols-5 lg:items-start lg:gap-3 lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-3">
                <span className="absolute left-0 top-9 z-20 -rotate-6 rounded-r-full bg-[#89FC00] py-2 pl-6 pr-8 text-xs font-extrabold uppercase tracking-[0.2em] text-[#3026C1] shadow-[0_12px_28px_rgba(10,6,62,0.28)] sm:pl-8 lg:-left-8 lg:top-12 lg:pl-10 lg:pr-10">
                  Novo
                </span>
                {seasonScreens.map((screen, index) => (
                  <figure
                    key={screen.title}
                    className={`group w-[68vw] max-w-[260px] shrink-0 snap-center lg:w-auto lg:max-w-none ${seasonScreenPositions[index]}`}
                  >
                    <div className="overflow-hidden rounded-[2rem] border-[5px] border-[#16123f] bg-[#16123f] shadow-[0_24px_45px_rgba(10,6,62,0.38)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_30px_55px_rgba(10,6,62,0.5)] lg:rounded-[1.55rem] lg:border-[4px]">
                      <Image
                        src={screen.image}
                        alt={`SportSync prikaz: ${screen.title}`}
                        className="h-auto w-full"
                        quality={100}
                        sizes="(max-width: 1023px) 68vw, 210px"
                      />
                    </div>
                    <figcaption className="mt-4 text-center text-sm font-semibold text-white lg:text-xs">
                      <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                        {screen.title}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <p className="relative mt-1 text-center text-xs text-white/55 lg:hidden">
                Povuci za pregled svih mogućnosti
              </p>
            </div>
          </div>
        </section>

        <section
          id="kako-funkcionira"
          className="fade-section overflow-hidden bg-[radial-gradient(circle_at_top,_#f4f5ff_0%,_#eef1ff_45%,_#e8ecff_100%)] px-5 py-16 md:px-8 md:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="fade-item mx-auto max-w-3xl text-center">
              <div>
                <SectionTag>Korak po korak</SectionTag>
                <h2 className="mx-auto mt-7 max-w-[12ch] text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-[#1f2430] sm:text-5xl lg:text-[3.5rem]">
                  Od svog termina do pune ekipe i ocjene nakon igre.
                </h2>
              </div>
              <div className="mt-6">
                <p className="mx-auto max-w-2xl text-base leading-8 text-[#4a4f5e] md:text-lg">
                  SportSync nije samo za pronalazak igrača kad netko otkaže.
                  Prvo vodiš svoj stalni termin, pratiš tko dolazi, po potrebi
                  popunjavaš slobodna mjesta i nakon utakmice ocjenjuješ
                  iskustvo s igračima.
                </p>
              </div>
            </div>

            <div className="relative mt-16 md:mt-20">
              <div
                aria-hidden="true"
                className="absolute bottom-10 left-1/2 top-10 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#3026C1]/0 via-[#3026C1]/18 to-[#3026C1]/0 lg:block"
              />

              <ol className="space-y-16 md:space-y-20 lg:space-y-24">
                <li className="journey-step grid gap-8 lg:grid-cols-[1fr_88px_1fr] lg:items-center">
                  <div className="lg:pr-10">
                    <span className="inline-flex rounded-full bg-[#3026C1] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white lg:hidden">
                      01
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3026C1] lg:mt-0">
                      01 · Kreiraj svoj stalni termin
                    </p>
                    <h3 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#1f2430] sm:text-[2.3rem]">
                      Prvo postavi termin za ekipu s kojom igraš redovno.
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[#505565]">
                      Odaberi sport, lokaciju i vrijeme, pa od jednog dogovora
                      napravi termin koji se može ponavljati svaki tjedan. Tako
                      sve kreće od tvoje ekipe.
                    </p>
                  </div>

                  <div className="hidden lg:flex lg:justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#3026C1]/14 bg-white text-lg font-semibold text-[#3026C1] shadow-[0_18px_35px_rgba(48,38,193,0.12)]">
                      01
                    </span>
                  </div>

                  <div className="relative mx-auto w-full max-w-xl">
                    <JourneyIllustration className="lg:ml-auto lg:mr-0">
                      <Image
                        src={CreateTermIllustration}
                        alt="Ilustracija ekipe koja kreira stalni termin za različite sportove"
                        className="h-auto w-full"
                        quality={100}
                        sizes="(max-width: 768px) 280px, 330px"
                      />
                    </JourneyIllustration>
                  </div>
                </li>

                <li className="journey-step grid gap-8 lg:grid-cols-[1fr_88px_1fr] lg:items-center">
                  <div className="relative order-2 mx-auto w-full max-w-xl lg:order-1">
                    <JourneyIllustration className="lg:ml-0 lg:mr-auto">
                      <Image
                        src={AttendanceIllustration}
                        alt="Ilustracija igrača različitih sportova koji potvrđuju dolazak"
                        className="h-auto w-full"
                        quality={100}
                        sizes="(max-width: 768px) 280px, 330px"
                      />
                    </JourneyIllustration>
                  </div>

                  <div className="hidden lg:order-2 lg:flex lg:justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#3026C1]/14 bg-white text-lg font-semibold text-[#3026C1] shadow-[0_18px_35px_rgba(48,38,193,0.12)]">
                      02
                    </span>
                  </div>

                  <div className="order-1 lg:order-3 lg:pl-10">
                    <span className="inline-flex rounded-full bg-[#3026C1] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white lg:hidden">
                      02
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3026C1] lg:mt-0">
                      02 · Prati tko dolazi
                    </p>
                    <h3 className="mt-3 max-w-[13ch] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#1f2430] sm:text-[2.3rem]">
                      U svakom trenutku vidiš jeste li se skupili za igru.
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[#505565]">
                      Igrači potvrđuju dolazak direktno u aplikaciji, a ti bez
                      dodatnog dopisivanja vidiš tko dolazi, tko ne dolazi i
                      koliko vas još nedostaje do pune utakmice.
                    </p>
                  </div>
                </li>

                <li className="journey-step grid gap-8 lg:grid-cols-[1fr_88px_1fr] lg:items-center">
                  <div className="lg:pr-10">
                    <span className="inline-flex rounded-full bg-[#3026C1] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white lg:hidden">
                      03
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3026C1] lg:mt-0">
                      03 · Popuni slobodna mjesta
                    </p>
                    <h3 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#1f2430] sm:text-[2.3rem]">
                      Ako vas nema dovoljno, tek tada tražiš dodatne igrače.
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[#505565]">
                      Proširi poziv među svojim prijateljima. Ako još fali
                      igrača, objavi slobodna mjesta i otvori termin drugim
                      korisnicima aplikacije koji žele uskočiti.
                    </p>
                  </div>

                  <div className="hidden lg:flex lg:justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#3026C1]/14 bg-white text-lg font-semibold text-[#3026C1] shadow-[0_18px_35px_rgba(48,38,193,0.12)]">
                      03
                    </span>
                  </div>

                  <div className="relative mx-auto w-full max-w-xl">
                    <JourneyIllustration className="lg:ml-auto lg:mr-0">
                      <Image
                        src={FindPlayersIllustration}
                        alt="Ilustracija pronalaska igrača različitih sportova za slobodna mjesta"
                        className="h-auto w-full"
                        quality={100}
                        sizes="(max-width: 768px) 280px, 330px"
                      />
                    </JourneyIllustration>
                  </div>
                </li>

                <li className="journey-step grid gap-8 lg:grid-cols-[1fr_88px_1fr] lg:items-center">
                  <div className="relative order-2 mx-auto w-full max-w-xl lg:order-1">
                    <JourneyIllustration className="lg:ml-0 lg:mr-auto">
                      <Image
                        src={RatingIllustration}
                        alt="Ilustracija igrača različitih sportova koji se ocjenjuju nakon termina"
                        className="h-auto w-full"
                        quality={100}
                        sizes="(max-width: 768px) 280px, 330px"
                      />
                    </JourneyIllustration>
                  </div>

                  <div className="hidden lg:order-2 lg:flex lg:justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#3026C1]/14 bg-white text-lg font-semibold text-[#3026C1] shadow-[0_18px_35px_rgba(48,38,193,0.12)]">
                      04
                    </span>
                  </div>

                  <div className="order-1 lg:order-3 lg:pl-10">
                    <span className="inline-flex rounded-full bg-[#3026C1] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white lg:hidden">
                      04
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3026C1] lg:mt-0">
                      04 · Završite termin ocjenom
                    </p>
                    <h3 className="mt-3 max-w-[13ch] text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#1f2430] sm:text-[2.3rem]">
                      Nakon igre ostavi dojam o igraču s kojim si igrao.
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[#505565]">
                      Ocjene pomažu da zajednica bude pouzdanija, a ekipama daju
                      bolji osjećaj koga žele ponovno pozvati na idući termin.
                    </p>
                  </div>
                </li>
              </ol>
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
                Za termine koje igraš svaki tjedan
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4a4f5e] md:text-base">
                Bez obzira treniraš li ozbiljno ili igraš rekreativno, SportSync
                ti daje prostor za organizaciju omiljenog sporta, tvoje ekipe i
                novih igrača kada ih zatreba.
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
                  Vodi svoj termin lakše i igraj s punom ekipom.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                  Postavi stalni termin, okupi svoje igrače i pronađi zamjenu
                  kad ti zatreba. Preuzmi aplikaciju i vidimo se na terenu!
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
                    href="https://www.facebook.com/profile.php?id=61589590073833"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="SportSync Facebook"
                    className="transition hover:text-white"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/sportsync_hr/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="SportSync Instagram"
                    className="transition hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/sport-sync"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="SportSync LinkedIn"
                    className="transition hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
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
