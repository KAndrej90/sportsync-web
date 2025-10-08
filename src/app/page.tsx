"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  CalendarClock,
  CheckCircle2,
  Sparkles,
  UsersRound,
} from "lucide-react";
import LogoAndName from "./assets/logoAndName.svg";
import AppStoreBadgeLight from "./assets/Download_on_the_App_Store_Badge_HR_blk_082124.svg";
import AppStoreBadgeDark from "./assets/Download_on_the_App_Store_Badge_HR_wht_082124.svg";
import GooglePlayBadge from "./assets/GetItOnGooglePlay_Badge_Web_color_Croatian.svg";

type Feature = {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconClass: string;
};

const features: Feature[] = [
  {
    title: "Pametno sparivanje",
    description:
      "SportSync ti predlaže najbolje partnere i ekipe prema tvojoj lokaciji, razini igre i omiljenim sportovima.",
    Icon: UsersRound,
    iconClass: "text-[#3B28CC]",
  },
  {
    title: "Instant organizacija",
    description:
      "Kreiraj termin u par dodira, podijeli s prijateljima i prati potvrde u stvarnom vremenu.",
    Icon: CalendarClock,
    iconClass: "text-[#59b200]",
  },
  {
    title: "Živa energija zajednice",
    description:
      "Pridruži se grupama za nogomet, košarku, odbojku i druge sportove te upoznaj ljude koji dijele tvoj ritam.",
    Icon: Sparkles,
    iconClass: "text-[#3B28CC]",
  },
];

const steps = [
  {
    title: "Kreiraj profil",
    description:
      "Postavi sportske preferencije i dozvoli SportSyncu da pronađe prave suigrače umjesto tebe.",
  },
  {
    title: "Nađi termin",
    description:
      "Pregledaj otvorene susrete u tvojoj blizini ili otvori novi i pozovi ekipu.",
  },
  {
    title: "Igraj bez brige",
    description:
      "Potvrdi dolazak, sinkroniziraj kalendar i prepusti se igri bez stresa oko organizacije.",
  },
];

const testimonials = [
  {
    quote:
      "Prvi put sam za vikend skupio punu ekipu za mali nogomet u manje od sat vremena. Aplikacija je stvarno spas!",
    name: "Ivan, Zagreb",
    sport: "Mali nogomet",
  },
  {
    quote:
      "SportSync mi stalno sugerira nove termine za odbojku na pijesku. Upoznala sam super ekipu i sada igramo svaki tjedan.",
    name: "Maja, Split",
    sport: "Odbojka na pijesku",
  },
];

const stats = [
  { label: "Aktivnih sportaša", value: "12k+" },
  { label: "Organiziranih susreta mjesečno", value: "850+" },
  { label: "Gradova u Hrvatskoj", value: "38" },
];

const sports = [
  "Nogomet na mali i veliki gol",
  "Košarka na otvorenom i u dvorani",
  "Odbojka i odbojka na pijesku",
  "Tenis i padel dvoboji",
  "Trkačke i fitness grupe",
  "Planinarske ture i biciklizam",
];

type StoreLink = {
  href: string;
  badge: StaticImageData;
  alt: string;
};

const storeLinks: StoreLink[] = [
  {
    href: "https://play.google.com/store",
    badge: GooglePlayBadge,
    alt: "Preuzmi SportSync na Google Play trgovini",
  },
  {
    href: "https://www.apple.com/app-store/",
    badge: AppStoreBadgeLight,
    alt: "Preuzmi SportSync na App Storeu",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-animate",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.12,
        }
      );

      gsap.utils.toArray<HTMLElement>(".fade-section").forEach((section) => {
        const items = section.querySelectorAll(".fade-item");
        if (!items.length) return;

        gsap.fromTo(
          items,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.16,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".card-pop").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#e4e6f6] text-[#292929]"
    >
      <div className="pointer-events-none absolute -left-32 top-[-120px] h-[360px] w-[360px] rounded-full bg-[#3B28CC]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 top-28 h-[400px] w-[400px] rounded-full bg-[#89FC00]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#3B28CC]/15 blur-3xl" />

      <header className="hero-animate fixed inset-x-0 top-0 z-30 border-b border-[#141031] bg-gradient-to-r from-[#16112e]/98 via-[#1b1650]/95 to-[#141031]/98 shadow-[0_18px_45px_rgba(12,9,30,0.35)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 md:px-10">
          <div className="flex items-center gap-3">
            <Image
              src={LogoAndName}
              alt="SportSync logotip"
              priority
              className="h-11 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
            />
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/75 lg:flex">
            <Link href="#feature" className="transition-colors hover:text-white">
              Značajke
            </Link>
            <Link href="#kako" className="transition-colors hover:text-white">
              Kako funkcionira
            </Link>
            <Link href="#sports" className="transition-colors hover:text-white">
              Sportovi
            </Link>
            <Link href="#download" className="transition-colors hover:text-white">
              Preuzmi
            </Link>
          </nav>
          <Link
            href="#download"
            className="hidden rounded-full bg-gradient-to-r from-[#89FC00] to-[#54C600] px-6 py-2 text-sm font-semibold text-[#101010] shadow-lg shadow-[#89FC00]/25 transition hover:brightness-110 lg:inline-flex"
          >
            Preuzmi aplikaciju
          </Link>
        </div>
      </header>

      <main className="relative z-10 pt-32">
        <section className="hero-animate mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-10 md:flex-row md:items-center md:px-10">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#3B28CC]/10 px-4 py-2 text-sm font-semibold text-[#3B28CC]">
              #IgrajZajedno
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-[#101010] sm:text-5xl lg:text-6xl">
              Pronađi svoj tim. <span className="text-[#3B28CC]">Sinkroniziraj</span> svoju igru.
            </h1>
            <p className="max-w-xl text-lg text-[#292929]/80">
              SportSync okuplja sportske rekreativce diljem Hrvatske i pomaže im da lako dogovore termine, podijele strast i osjete energiju igre. Više traženja, manje otkazivanja – samo čista sportska vibra.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row" id="download">
              {storeLinks.map((store) => (
                <a
                  key={store.href}
                  href={store.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={store.alt}
                  className="group flex flex-1 items-center justify-center rounded-2xl border border-[#c9cced] bg-white/95 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Image
                    src={store.badge}
                    alt={store.alt}
                    className="h-12 w-auto"
                    priority
                  />
                </a>
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-[#d6d9f0] bg-white p-6 text-center shadow-lg"
                >
                  <p className="text-3xl font-bold text-[#292929]">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-widest text-[#292929]/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[3rem] border border-[#3B28CC]/25 bg-[#101010] px-6 pb-16 pt-14 text-white shadow-[0_40px_80px_-40px_rgba(35,19,120,0.6)]">
              <div className="absolute -left-6 top-12 h-12 w-12 rounded-full bg-[#3B28CC]/40 blur-xl" />
              <div className="absolute -right-4 bottom-10 h-16 w-16 rounded-full bg-[#89FC00]/40 blur-3xl" />
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Uživo susret
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    Nedjelja 18:00 · Arena Zagreb
                  </p>
                </div>
                <div className="space-y-4">
                  {["Nogomet", "Košarka", "Odbojka"].map((sport) => (
                    <div
                      key={sport}
                      className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-semibold">{sport}</p>
                        <p className="text-xs text-white/60">Preporučeno za tebe</p>
                      </div>
                      <span className="rounded-full bg-[#89FC00]/18 px-3 py-1 text-xs font-semibold text-[#1d4d00]">
                        4 mjesta
                      </span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#3B28CC]/25 px-4 py-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                    Puls zajednice
                  </p>
                  <p className="mt-3 text-4xl font-bold">+267</p>
                  <p className="text-xs text-white/70">nova člana ovog tjedna</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="feature"
          className="fade-section mx-auto w-full max-w-6xl px-6 py-20 md:px-10"
        >
          <div className="fade-item mx-auto max-w-2xl text-center">
            <span className="rounded-full bg-[#89FC00]/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-[#2c6700]">
              Zašto SportSync
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-[#101010] sm:text-4xl">
              Sportska zajednica koja diše kao ti
            </h2>
            <p className="mt-4 text-lg text-[#292929]/75">
              Kombiniramo tehnologiju i strast prema sportu kako bismo ti dali platformu na kojoj svaki trening i utakmica postaju jednostavni za dogovor.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-pop flex h-full flex-col gap-6 rounded-3xl border border-[#c9cced] bg-white p-8 shadow-lg"
              >
                <div className="fade-item inline-flex items-center justify-center rounded-2xl bg-[#3B28CC]/10 p-4">
                  <feature.Icon
                    className={`h-12 w-12 ${feature.iconClass}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="fade-item space-y-3">
                  <h3 className="text-xl font-semibold text-[#101010]">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#292929]/75">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="kako"
          className="fade-section mx-auto w-full max-w-6xl px-6 py-20 md:px-10"
        >
          <div className="fade-item grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <span className="rounded-full bg-[#3B28CC]/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-[#3B28CC]">
                Korak po korak
              </span>
              <h2 className="text-3xl font-semibold text-[#101010] sm:text-4xl">
                Od ideje do igre u nekoliko minuta
              </h2>
              <p className="text-lg text-[#292929]/75">
                Bez beskonačnih poruka i nedolazaka. SportSync prati dolaske, podsjeća tim, sinkronizira kalendar i šalje ti nove prijedloge dok ti planiraš sljedeći potez.
              </p>
            </div>
            <div className="rounded-3xl border border-[#cbcde4] bg-white p-8 shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#292929]/60">
                U svakom trenutku znaš:
              </p>
              <ul className="mt-6 space-y-4 text-base text-[#292929]/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 text-[#3B28CC]"
                    aria-hidden="true"
                  />
                  Tko je potvrdio dolazak i koliko mjesta je još otvoreno.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 text-[#54C600]"
                    aria-hidden="true"
                  />
                  Koji su tereni i termini slobodni ovog tjedna.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 text-[#292929]"
                    aria-hidden="true"
                  />
                  Kakva je statistika tvoje ekipe i novi izazovi u blizini.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="card-pop flex h-full flex-col gap-4 rounded-3xl border border-[#cbcde4] bg-white p-6 shadow-lg"
              >
                <span className="fade-item inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#89FC00]/20 text-2xl font-semibold text-[#2c6700]">
                  0{index + 1}
                </span>
                <div className="fade-item space-y-3">
                  <h3 className="text-xl font-semibold text-[#101010]">
                    {step.title}
                  </h3>
                  <p className="text-base text-[#292929]/75">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="sports"
          className="fade-section mx-auto w-full max-w-6xl px-6 py-20 md:px-10"
        >
          <div className="fade-item grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              <span className="rounded-full bg-[#292929]/90 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-white">
                Izaberi ritam
              </span>
              <h2 className="text-3xl font-semibold text-[#101010] sm:text-4xl">
                Sve što ti treba za sportsku avanturu
              </h2>
              <p className="text-lg text-[#292929]/75">
                Bez obzira treniraš li ozbiljno ili igraš rekreativno, SportSync ti daje pregled najpopularnijih sportova i zajednica u tvojoj okolini.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {sports.map((sport) => (
                  <div
                    key={sport}
                    className="card-pop flex h-full items-center gap-3 rounded-3xl border border-[#c9cced] bg-white px-5 py-4 text-left text-[#292929] shadow-lg"
                  >
                    <span className="h-10 w-10 rounded-2xl bg-[#3B28CC]/15" />
                    <p className="fade-item text-sm font-semibold">{sport}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative grid gap-6 rounded-[3rem] border border-[#3B28CC]/20 bg-[#101010] p-10 text-white shadow-[0_40px_80px_-40px_rgba(28,18,102,0.7)]">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#3B28CC]/25 via-transparent to-[#89FC00]/15" />
              <div className="relative space-y-6">
                <p className="text-sm uppercase tracking-[0.38em] text-white/60">
                  Energija zajednice
                </p>
                <h3 className="text-3xl font-semibold">
                  Svaki tjedan stotine novih termina i sportskih priča.
                </h3>
                <p className="text-base text-white/70">
                  Prati rezultate, šalji reakcije i dijeli svoje uspjehe. SportSync čuva sve tvoje sportske trenutke na jednom mjestu.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.name}
                      className="card-pop relative rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
                    >
                      <p className="text-sm text-white/80">“{testimonial.quote}”</p>
                      <div className="mt-4 text-xs uppercase tracking-[0.28em] text-[#89FC00]">
                        {testimonial.sport}
                      </div>
                      <p className="mt-2 text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="fade-section relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
        <div className="rounded-[3rem] bg-[#292929] px-10 py-16 text-white shadow-2xl">
          <div className="fade-item flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                Budućnost sporta
              </span>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Pridruži se SportSync pokretu i igraj s najboljima.
              </h2>
              <p className="max-w-xl text-base text-white/70">
                Osjeti kako je jednostavno ostati aktivan kad imaš zajednicu koja te podržava. Preuzmi aplikaciju i vidimo se na terenu!
              </p>
            </div>
            <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
              {storeLinks.map((store) => (
                <a
                  key={store.href}
                  href={store.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={store.alt}
                  className="group flex flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/95 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Image
                    src={store.href.includes("apple") ? AppStoreBadgeDark : store.badge}
                    alt={store.alt}
                    className="h-12 w-auto"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="fade-item mt-12 flex flex-col gap-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} SportSync. Sva prava pridržana.</p>
            <div className="flex gap-6">
              <Link href="mailto:hello@sportsync.hr" className="transition hover:text-white">
                Kontakt
              </Link>
              <Link href="#" className="transition hover:text-white">
                Politika privatnosti
              </Link>
              <Link href="#" className="transition hover:text-white">
                Uvjeti korištenja
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
