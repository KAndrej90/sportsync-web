"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const features = [
  {
    title: "Pametno sparivanje",
    description:
      "Sportsync ti predlaže najbolje partnere i ekipe prema tvojoj lokaciji, razini igre i omiljenim sportovima.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-12 w-12 text-[#32B8CC]"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M12 2a7 7 0 0 0-7 7c0 3.87 3.13 7 7 7s7-3.13 7-7a7 7 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5a5 5 0 0 1-5 5Zm0 3c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Zm0 4H6.14c.73-1.38 3.26-2.5 5.86-2.5s5.13 1.12 5.86 2.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Instant organizacija",
    description:
      "Kreiraj termin u par dodira, podijeli s prijateljima i prati potvrde u stvarnom vremenu.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-12 w-12 text-[#89FC00]"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 17H5V9h14ZM5 7V5h14v2Z"
        />
        <path
          fill="currentColor"
          d="m10.59 15l-1.3-1.29l-1.41 1.42L10.59 17l5.33-5.29l-1.41-1.42Z"
        />
      </svg>
    ),
  },
  {
    title: "Živa energija zajednice",
    description:
      "Pridruži se grupama za nogomet, košarku, odbojku i druge sportove te upoznaj ljude koji dijele tvoj ritam.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-12 w-12 text-[#32B8CC]"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16 11a4 4 0 1 0-3.46-6h-1.08A4 4 0 1 0 8 11a4 4 0 1 0 3.46 6h1.08A4 4 0 1 0 16 11Zm0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2ZM8 5a2 2 0 1 1-2 2a2 2 0 0 1 2-2Zm0 14a2 2 0 1 1 2-2a2 2 0 0 1-2 2Zm8 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2Z"
        />
      </svg>
    ),
  },
];

const steps = [
  {
    title: "Kreiraj profil",
    description:
      "Postavi sportske preferencije i dozvoli Sportsyncu da pronađe prave suigrače umjesto tebe.",
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
      "Sportsync mi stalno sugerira nove termine za odbojku na pijesku. Upoznala sam super ekipu i sada igramo svaki tjedan.",
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

const storeLinks = [
  {
    label: "Preuzmi na Google Play",
    sublabel: "Android uređaji",
    href: "https://play.google.com/store",
    gradient: "from-[#32B8CC] to-[#1A7F90]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="m3 4.6v14.8c0 .88.95 1.43 1.72.98l10.4-6.1l2.84-1.67l-2.84-1.67l-10.4-6.1C3.95 3.17 3 3.72 3 4.6Zm14.24 4.35l2.45-2.45a1 1 0 0 0 0-1.41L18.91 4a1 1 0 0 0-1.58.26L15 7Zm0 5.1l-2.24 2.75l2.33 3.07A1 1 0 0 0 18.91 20l.78-.78a1 1 0 0 0 0-1.41Z"
        />
      </svg>
    ),
  },
  {
    label: "Preuzmi na App Storeu",
    sublabel: "iOS uređaji",
    href: "https://www.apple.com/app-store/",
    gradient: "from-[#89FC00] to-[#4CCB00]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.36 1.64a4.32 4.32 0 0 1-1.08 2.88a3.83 3.83 0 0 1-2.86 1.36a3.65 3.65 0 0 1 1.07-2.69A4.15 4.15 0 0 1 16.36 1.64ZM20.79 17.44a8.54 8.54 0 0 1-1.39 2.58a4.19 4.19 0 0 1-3.16 1.54a3.86 3.86 0 0 1-1.45-.31a4.12 4.12 0 0 0-1.38-.31a4 4 0 0 0-1.44.31a4 4 0 0 1-1.46.32a4.26 4.26 0 0 1-3.14-1.59a8.2 8.2 0 0 1-1.52-2.7a8.77 8.77 0 0 1-.45-2.91a5 5 0 0 1 1-3.24a3.62 3.62 0 0 1 2.9-1.5a4.29 4.29 0 0 1 1.65.37a4.55 4.55 0 0 0 1.52.36a4.07 4.07 0 0 0 1.4-.32a4.5 4.5 0 0 1 1.76-.35a3.47 3.47 0 0 1 2.93 1.53a4.76 4.76 0 0 1 .9 3.17a5.12 5.12 0 0 1-.25 2.55Z"
        />
      </svg>
    ),
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
      className="relative min-h-screen overflow-hidden bg-[#f3f7f9] text-[#292929]"
    >
      <div className="pointer-events-none absolute -left-32 top-[-120px] h-[380px] w-[380px] rounded-full bg-[#32B8CC]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 top-40 h-[420px] w-[420px] rounded-full bg-[#89FC00]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#32B8CC]/20 blur-3xl" />

      <header className="hero-animate relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10 md:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#32B8CC] text-xl font-semibold text-white shadow-lg shadow-[#32B8CC]/40">
            S
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-[#292929]">
              Sportsync
            </span>
            <span className="text-sm font-medium uppercase tracking-[0.32em] text-[#32B8CC]">
              Pokret koji spaja
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#292929]/80 lg:flex">
          <Link href="#feature" className="transition-colors hover:text-[#32B8CC]">
            Značajke
          </Link>
          <Link href="#kako" className="transition-colors hover:text-[#32B8CC]">
            Kako funkcionira
          </Link>
          <Link href="#sports" className="transition-colors hover:text-[#32B8CC]">
            Sportovi
          </Link>
          <Link href="#download" className="transition-colors hover:text-[#32B8CC]">
            Preuzmi
          </Link>
        </nav>
        <Link
          href="#download"
          className="hidden rounded-full bg-[#292929] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#32B8CC] lg:inline-flex"
        >
          Preuzmi aplikaciju
        </Link>
      </header>

      <main className="relative z-10">
        <section className="hero-animate mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-10 md:flex-row md:items-center md:px-10">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#32B8CC]/10 px-4 py-2 text-sm font-semibold text-[#32B8CC]">
              #IgrajZajedno
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-[#101010] sm:text-5xl lg:text-6xl">
              Pronađi svoj tim. <span className="text-[#32B8CC]">Sinkroniziraj</span> svoju igru.
            </h1>
            <p className="max-w-xl text-lg text-[#292929]/80">
              Sportsync okuplja sportske rekreativce diljem Hrvatske i pomaže im da lako dogovore termine, podijele strast i osjete energiju igre. Više traženja, manje otkazivanja – samo čista sportska vibra.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row" id="download">
              {storeLinks.map((store) => (
                <a
                  key={store.label}
                  href={store.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex flex-1 items-center justify-between gap-4 rounded-2xl bg-gradient-to-r ${store.gradient} px-6 py-4 text-white shadow-xl shadow-black/10 transition hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                      {store.icon}
                    </span>
                    <div className="text-left">
                      <span className="block text-base font-semibold">
                        {store.label}
                      </span>
                      <span className="text-xs uppercase tracking-[0.28em] text-white/80">
                        {store.sublabel}
                      </span>
                    </div>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white opacity-80 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M10.59 7.41L15.17 12l-4.58 4.59L12 18l6-6l-6-6z"
                    />
                  </svg>
                </a>
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/60 bg-white/80 p-6 text-center shadow-lg backdrop-blur"
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
            <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[3rem] border border-[#32B8CC]/20 bg-[#101010] px-6 pb-16 pt-14 text-white shadow-[0_40px_80px_-40px_rgba(14,50,64,0.6)]">
              <div className="absolute -left-6 top-12 h-12 w-12 rounded-full bg-[#32B8CC]/40 blur-xl" />
              <div className="absolute -right-4 bottom-10 h-16 w-16 rounded-full bg-[#89FC00]/40 blur-3xl" />
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Live utakmica
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
                      <span className="rounded-full bg-[#89FC00]/20 px-3 py-1 text-xs font-semibold text-[#89FC00]">
                        4 mjesta
                      </span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#32B8CC]/20 px-4 py-5">
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
            <span className="rounded-full bg-[#89FC00]/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-[#4CCB00]">
              Zašto Sportsync
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
                className="card-pop flex h-full flex-col gap-6 rounded-3xl border border-[#32B8CC]/15 bg-white/80 p-8 shadow-lg backdrop-blur"
              >
                <div className="fade-item inline-flex items-center justify-center rounded-2xl bg-[#32B8CC]/10 p-4">
                  {feature.icon}
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
              <span className="rounded-full bg-[#32B8CC]/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-[#32B8CC]">
                Korak po korak
              </span>
              <h2 className="text-3xl font-semibold text-[#101010] sm:text-4xl">
                Od ideje do igre u nekoliko minuta
              </h2>
              <p className="text-lg text-[#292929]/75">
                Bez beskonačnih poruka i nedolazaka. Sportsync prati dolaske, podsjeća tim, sinkronizira kalendar i šalje ti nove prijedloge dok ti planiraš sljedeći potez.
              </p>
            </div>
            <div className="rounded-3xl border border-[#292929]/10 bg-white/70 p-8 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#292929]/60">
                U svakom trenutku znaš:
              </p>
              <ul className="mt-6 space-y-4 text-base text-[#292929]/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#32B8CC]" />
                  Tko je potvrdio dolazak i koliko mjesta je još otvoreno.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#89FC00]" />
                  Koji su tereni i termini slobodni ovog tjedna.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#292929]" />
                  Kakva je statistika tvoje ekipe i novi izazovi u blizini.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="card-pop flex h-full flex-col gap-4 rounded-3xl border border-[#292929]/10 bg-white/80 p-6 shadow-lg backdrop-blur"
              >
                <span className="fade-item inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#89FC00]/20 text-2xl font-semibold text-[#4CCB00]">
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
                Bez obzira treniraš li ozbiljno ili igraš rekreativno, Sportsync ti daje pregled najpopularnijih sportova i zajednica u tvojoj okolini.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {sports.map((sport) => (
                  <div
                    key={sport}
                    className="card-pop flex h-full items-center gap-3 rounded-3xl border border-[#32B8CC]/10 bg-white/80 px-5 py-4 text-left text-[#292929] shadow-lg backdrop-blur"
                  >
                    <span className="h-10 w-10 rounded-2xl bg-[#32B8CC]/15" />
                    <p className="fade-item text-sm font-semibold">{sport}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative grid gap-6 rounded-[3rem] border border-[#32B8CC]/15 bg-[#101010] p-10 text-white shadow-[0_40px_80px_-40px_rgba(10,30,38,0.7)]">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#32B8CC]/20 via-transparent to-[#89FC00]/10" />
              <div className="relative space-y-6">
                <p className="text-sm uppercase tracking-[0.38em] text-white/60">
                  Energija zajednice
                </p>
                <h3 className="text-3xl font-semibold">
                  Svaki tjedan stotine novih termina i sportskih priča.
                </h3>
                <p className="text-base text-white/70">
                  Prati rezultate, šalji reakcije i dijeli svoje uspjehe. Sportsync čuva sve tvoje sportske trenutke na jednom mjestu.
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
                Pridruži se Sportsync pokretu i igraj s najboljima.
              </h2>
              <p className="max-w-xl text-base text-white/70">
                Osjeti kako je jednostavno ostati aktivan kad imaš zajednicu koja te podržava. Preuzmi aplikaciju i vidimo se na terenu!
              </p>
            </div>
            <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
              {storeLinks.map((store) => (
                <a
                  key={store.label}
                  href={store.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex flex-1 items-center justify-between gap-4 rounded-2xl bg-gradient-to-r ${store.gradient} px-6 py-4 text-white shadow-xl transition hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                      {store.icon}
                    </span>
                    <div className="text-left">
                      <span className="block text-base font-semibold">
                        {store.label}
                      </span>
                      <span className="text-xs uppercase tracking-[0.28em] text-white/80">
                        {store.sublabel}
                      </span>
                    </div>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white opacity-80 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M10.59 7.41L15.17 12l-4.58 4.59L12 18l6-6l-6-6z"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="fade-item mt-12 flex flex-col gap-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Sportsync. Sva prava pridržana.</p>
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
