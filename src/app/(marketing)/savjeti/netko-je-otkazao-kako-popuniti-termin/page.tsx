import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Megaphone,
  Share2,
  ShieldCheck,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
import LogoAndName from "../../../assets/logoAndName.svg";
import FindPlayersIllustration from "../../../assets/howitworks/find-players-illustration.webp";

const path = "/savjeti/netko-je-otkazao-kako-popuniti-termin";
const canonicalUrl = `https://sportsync.hr${path}`;
const title = "Netko je otkazao u zadnji čas – kako popuniti termin?";
const description =
  "Praktičan plan za organizatore rekreativnih termina: što napraviti kada igrač otkaže, kako napisati dobru objavu i brzo pronaći zamjenu.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "article",
    url: path,
    title: `${title} | SportSync`,
    description,
    publishedTime: "2026-08-21T08:00:00+02:00",
    authors: ["SportSync"],
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SportSync vodič za pronalazak zamjenskog igrača",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | SportSync`,
    description,
    images: ["/og.png"],
  },
};

const quickPlan = [
  "Provjeri koliko igrača stvarno nedostaje.",
  "U napomenu dodaj samo ono što se ne vidi na terminu.",
  "Objavi slobodno mjesto pa po potrebi podijeli gotov banner.",
  "Postavi rok za potvrdu i ažuriraj status čim se mjesto popuni.",
];

const noteChecklist = [
  "očekivanu razinu i tempo igre",
  "poziciju ili ulogu koja nedostaje, ako je važna",
  "rok do kojeg treba potvrditi dolazak",
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: "https://sportsync.hr/og.png",
  datePublished: "2026-08-21",
  dateModified: "2026-08-21",
  inLanguage: "hr-HR",
  mainEntityOfPage: canonicalUrl,
  author: {
    "@type": "Organization",
    name: "SportSync",
    url: "https://sportsync.hr/",
  },
  publisher: {
    "@type": "Organization",
    name: "SportSync",
    logo: {
      "@type": "ImageObject",
      url: "https://sportsync.hr/icon-512.png",
    },
  },
  about: [
    "organizacija sportskih termina",
    "pronalazak igrača",
    "rekreativni sport",
  ],
};

function StepNumber({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3026C1] text-sm font-bold text-white shadow-[0_8px_20px_rgba(48,38,193,0.2)]">
      {children}
    </span>
  );
}

export default function LastMinuteCancellationArticle() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F5FB] text-[#222222]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      <header className="border-b border-white/10 bg-[#3026C1]">
        <div className="mx-auto flex max-w-6xl items-center px-5 py-5 md:px-8">
          <Link href="/" aria-label="SportSync početna" className="shrink-0">
            <Image
              src={LogoAndName}
              alt="SportSync"
              priority
              className="h-9 w-auto md:h-10"
            />
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#3026C1] px-5 pb-16 pt-8 text-white md:px-8 md:pb-24 md:pt-10">
          <div
            aria-hidden="true"
            className="absolute -right-28 top-14 h-80 w-80 rounded-full bg-[#89FC00]/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-white/8 blur-3xl"
          />

          <div className="relative mx-auto max-w-6xl">
            <nav aria-label="Putanja" className="text-sm text-white/65">
              <Link href="/" className="transition-colors hover:text-white">
                Početna
              </Link>
              <span aria-hidden="true"> / </span>
              <span>Savjeti</span>
            </nav>

            <div className="mt-10 grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-[#89FC00] px-4 py-2 font-bold uppercase tracking-[0.08em] text-[#3026C1]">
                    Organizacija termina
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white/70">
                    <Clock3 size={16} aria-hidden="true" />
                    5 min čitanja
                  </span>
                </div>

                <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl">
                  Netko je otkazao u zadnji čas – kako popuniti termin?
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
                  Jedno otkazivanje ne mora srušiti cijelu utakmicu. Dobar redoslijed
                  poteza, jasna objava i realan rok za potvrdu najbrži su put do
                  zamjenskog igrača.
                </p>

                <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
                  <span>SportSync redakcija</span>
                  <span aria-hidden="true">•</span>
                  <time dateTime="2026-08-21">21. kolovoza 2026.</time>
                </div>
              </div>

              <div className="relative mx-auto min-w-0 w-full max-w-md">
                <div
                  aria-hidden="true"
                  className="absolute inset-8 rounded-full bg-[#89FC00]/20 blur-3xl"
                />
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#E4E6F6] p-5 shadow-[0_30px_80px_rgba(13,10,77,0.35)]">
                  <Image
                    src={FindPlayersIllustration}
                    alt="Sportaši koji traže dodatnog igrača za termin"
                    priority
                    sizes="(max-width: 1024px) 90vw, 430px"
                    className="h-auto w-full rounded-[1.75rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <article className="min-w-0">
            <section className="rounded-[2rem] border border-[#3026C1]/10 bg-white p-6 shadow-[0_18px_50px_rgba(48,38,193,0.08)] md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#89FC00] text-[#3026C1]">
                  <Clock3 size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3026C1]">
                    Brzi pregled
                  </p>
                  <h2 className="text-xl font-semibold tracking-[-0.02em]">
                    Plan za prvih 10 minuta
                  </h2>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {quickPlan.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl bg-[#F5F5FB] p-4 text-[15px] leading-6 text-[#474B58]"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#3026C1]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-14 space-y-16 text-[17px] leading-8 text-[#454A58]">
              <section id="provjeri-stanje" className="scroll-mt-8">
                <div className="flex items-start gap-4">
                  <StepNumber>1</StepNumber>
                  <div>
                    <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#1F2430]">
                      Najprije provjeri stvarno stanje
                    </h2>
                    <p className="mt-5">
                      Nemoj odmah poslati poruku u pet grupa. Provjeri je li otkazivanje
                      konačno, koliko je igrača potvrdilo dolazak i treba li vam zaista
                      jedna zamjena ili se zbog izostanka mijenja cijeli format igre.
                    </p>
                    <p className="mt-4">
                      Ako inače igrate 5 na 5, a sada vas je devet, traži jednu osobu.
                      Ako su još dva dolaska nesigurna, prvo zatraži jasnu potvrdu od tih
                      igrača. Tako nećeš pozvati više ljudi nego što imate mjesta.
                    </p>
                  </div>
                </div>
              </section>

              <section id="dobra-objava" className="scroll-mt-8">
                <div className="flex items-start gap-4">
                  <StepNumber>2</StepNumber>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#1F2430]">
                      Napomenu iskoristi za ono što se ne vidi na objavi
                    </h2>
                    <p className="mt-5">
                      SportSync na samoj objavi već prikazuje broj igrača koji nedostaje,
                      vrijeme termina, lokaciju i cijenu. Te podatke nema potrebe ponovno
                      pisati u napomeni. Iskoristi taj prostor za informacije koje igraču
                      pomažu procijeniti odgovara li baš toj ekipi.
                    </p>

                    <div className="mt-7 rounded-[1.75rem] bg-[#3026C1] p-6 text-white md:p-8">
                      <div className="flex items-center gap-3 text-[#89FC00]">
                        <Megaphone size={22} aria-hidden="true" />
                        <p className="text-sm font-bold uppercase tracking-[0.12em]">
                          Predložak napomene
                        </p>
                      </div>
                      <blockquote className="mt-5 text-lg leading-8 text-white/90">
                        “Rekreativna, ali uigrana ekipa; srednja razina i nešto brži
                        tempo. Tražimo golmana ili igrača koji može pokriti obranu. Molimo
                        potvrdu do 18:30.”
                      </blockquote>
                    </div>

                    <p className="mt-7 font-semibold text-[#1F2430]">
                      U napomeni je korisno navesti:
                    </p>
                    <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {noteChecklist.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#89FC00] text-[#3026C1]">
                            <Check size={13} strokeWidth={3} aria-hidden="true" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section id="siri-poziv" className="scroll-mt-8">
                <div className="flex items-start gap-4">
                  <StepNumber>3</StepNumber>
                  <div>
                    <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#1F2430]">
                      Objavi jednom, zatim podijeli gdje treba
                    </h2>
                    <p className="mt-5">
                      Umjesto da prvo sastavljaš zasebnu poruku za svaku Facebook grupu,
                      objavi slobodno mjesto unutar postojećeg termina u SportSyncu. Tako
                      su aktualan broj slobodnih mjesta, detalji termina i prijave igrača
                      vezani uz jednu objavu, a ne razbacani po različitim razgovorima.
                    </p>

                    <ol className="mt-7 grid gap-4 sm:grid-cols-3">
                      {[
                        {
                          icon: UserRoundPlus,
                          label: "Prvi korak",
                          title: "Objavi slobodno mjesto",
                          text: "Objava ostaje povezana s terminom, a prijave pratiš na jednom mjestu.",
                        },
                        {
                          icon: Share2,
                          label: "Drugi korak",
                          title: "Podijeli izvan aplikacije",
                          text: "SportSync priprema gotov banner s QR kodom koji vodi do prijave.",
                        },
                        {
                          icon: UsersRound,
                          label: "Treći korak",
                          title: "Pošalji ga svojoj ekipi",
                          text: "Banner podijeli prijateljima, u grupnim razgovorima ili Facebook grupama.",
                        },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <li
                            key={item.label}
                            className="rounded-[1.5rem] border border-[#3026C1]/10 bg-white p-5 shadow-[0_12px_32px_rgba(48,38,193,0.06)]"
                          >
                            <Icon size={24} className="text-[#3026C1]" aria-hidden="true" />
                            <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#3026C1]">
                              {item.label}
                            </p>
                            <h3 className="mt-1 font-semibold leading-6 text-[#1F2430]">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#646978]">{item.text}</p>
                          </li>
                        );
                      })}
                    </ol>

                    <p className="mt-7">
                      Nakon objave odaberi <strong className="text-[#1F2430]">Podijeli
                      objavu izvan aplikacije</strong>. Dobit ćeš pripremljen vizual koji
                      možeš poslati prijateljima ili objaviti u Facebook grupi. QR kod na
                      banneru vodi zainteresiranu osobu izravno do prijave, pa ne moraš u
                      porukama ponovno objašnjavati gdje, kada i koliko se igra.
                    </p>

                    <div className="mt-7 flex gap-4 rounded-[1.5rem] border border-[#3026C1]/12 bg-[#E4E6F6] p-5 md:p-6">
                      <ShieldCheck
                        size={24}
                        className="mt-0.5 shrink-0 text-[#3026C1]"
                        aria-hidden="true"
                      />
                      <p className="text-[15px] leading-7 text-[#3E4350]">
                        Vanjski kanali i dalje su korisni — samo više ne moraju biti mjesto
                        na kojem vodiš popis zainteresiranih. Oni služe da ljudi vide
                        poziv, a konačna prijava i aktualan status ostaju uz termin.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="potvrda" className="scroll-mt-8">
                <div className="flex items-start gap-4">
                  <StepNumber>4</StepNumber>
                  <div>
                    <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#1F2430]">
                      Potvrdi mjesto i odmah zatvori potragu
                    </h2>
                    <p className="mt-5">
                      Prvom igraču koji odgovara pošalji jasnu potvrdu, lokaciju i sve
                      detalje dolaska. Ostalima koji su se javili zahvali i reci da je
                      mjesto popunjeno. Tako nitko neće krenuti prema terenu misleći da je
                      još uvijek na popisu.
                    </p>
                    <p className="mt-4">
                      Kada prihvatiš prijavu, SportSync automatski dodaje igrača na popis
                      za utakmicu, pa broj sudionika ne moraš ručno ažurirati. Ako je do
                      početka ostalo malo vremena, možeš zadržati jednu zainteresiranu
                      osobu kao pričuvu, ali samo ako joj to otvoreno kažeš.
                    </p>
                  </div>
                </div>
              </section>

              <section id="ako-nema-zamjene" className="scroll-mt-8">
                <div className="flex items-start gap-4">
                  <StepNumber>5</StepNumber>
                  <div>
                    <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#1F2430]">
                      Ako nema zamjene, donesi odluku na vrijeme
                    </h2>
                    <p className="mt-5">
                      Ponekad se zamjena jednostavno neće pronaći. Tada provjeri možete li
                      prilagoditi format: igrati s manjim ekipama, rotirati jednog igrača
                      ili skratiti teren. To ima smisla samo ako je igra i dalje sigurna i
                      zabavna za sve.
                    </p>
                    <p className="mt-4">
                      Ako termin više nema smisla, obavijesti ekipu što ranije. Pravodobno
                      otkazivanje poštenije je od toga da ljudi dođu na teren bez dovoljno
                      igrača ili tek tamo saznaju da se format potpuno promijenio.
                    </p>

                    <div className="mt-7 flex gap-4 rounded-[1.5rem] border border-[#3026C1]/12 bg-[#E4E6F6] p-5 md:p-6">
                      <Lightbulb
                        size={24}
                        className="mt-0.5 shrink-0 text-[#3026C1]"
                        aria-hidden="true"
                      />
                      <p className="text-[15px] leading-7 text-[#3E4350]">
                        <strong className="text-[#1F2430]">Za sljedeći put:</strong> vodi
                        mali popis pouzdanih zamjena koje odgovaraju razini i lokaciji.
                        Nakon nekoliko termina hitna potraga postaje puno jednostavnija.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className="mt-16 overflow-hidden rounded-[2.25rem] bg-[#3026C1] p-7 text-white shadow-[0_24px_60px_rgba(48,38,193,0.2)] md:p-10">
              <div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#89FC00]">
                    Najjednostavniji redoslijed
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em]">
                    Objava u aplikaciji, banner za dijeljenje
                  </h2>
                  <p className="mt-4 max-w-2xl leading-7 text-white/75">
                    Prvo objavi slobodno mjesto unutar SportSynca. Ako želiš proširiti poziv,
                    odaberi „Podijeli objavu izvan aplikacije” i pošalji pripremljeni
                    banner kanalom koji tvoja ekipa već koristi.
                  </p>
                </div>
                <ol className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    "Objavi slobodno mjesto",
                    "Izradi banner za dijeljenje",
                    "Prijave primi putem QR koda",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 text-sm font-semibold text-white"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#89FC00] text-xs font-bold text-[#3026C1]">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          </article>

          <aside className="hidden lg:sticky lg:top-8 lg:block">
            <div className="rounded-[1.5rem] border border-[#3026C1]/10 bg-white p-5 shadow-[0_14px_35px_rgba(48,38,193,0.07)]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3026C1]">
                U ovom vodiču
              </p>
              <nav aria-label="Sadržaj članka" className="mt-4">
                <ol className="space-y-1 text-sm leading-6 text-[#555B6B]">
                  {[
                    ["#provjeri-stanje", "Provjeri stvarno stanje"],
                    ["#dobra-objava", "Napiši korisnu napomenu"],
                    ["#siri-poziv", "Objavi pa podijeli"],
                    ["#potvrda", "Potvrdi i zatvori potragu"],
                    ["#ako-nema-zamjene", "Ako nema zamjene"],
                  ].map(([href, label], index) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="flex gap-2 rounded-xl px-3 py-2 transition-colors hover:bg-[#E4E6F6] hover:text-[#3026C1]"
                      >
                        <span className="font-semibold text-[#3026C1]">{index + 1}.</span>
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            <div className="mt-5 rounded-[1.5rem] bg-[#E4E6F6] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3026C1]">
                Povezani vodič
              </p>
              <h2 className="mt-3 font-semibold leading-6 text-[#1F2430]">
                Kako pronaći dodatne igrače uz SportSync
              </h2>
              <Link
                href="/pronadi-igrace"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#3026C1]"
              >
                Saznaj više <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-[#3026C1]/10 bg-white px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[#646978] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SportSync. Sva prava pridržana.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/contact" className="hover:text-[#3026C1]">
              Kontakt
            </Link>
            <Link href="/privacy" className="hover:text-[#3026C1]">
              Privatnost
            </Link>
            <Link href="/terms" className="hover:text-[#3026C1]">
              Uvjeti korištenja
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
