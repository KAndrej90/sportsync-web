import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Politika kolačića",
  description: "Informacije o kolačićima na web stranici SportSync.",
};

export default function CookiesPage() {
  return (
    <article className={styles.prose}>
      <h1 className={styles.pageTitle}>Politika kolačića</h1>
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 3. lipnja 2026.</p>

      <p>
        Ova stranica objašnjava na koji način web‑stranica sportsync.hr koristi
        kolačiće (engl. <em>cookies</em>) i slične tehnologije.
      </p>

      <h2 className={styles.sectionTitle}>1. Što su kolačići</h2>
      <p>
        Kolačići su male tekstualne datoteke koje web‑poslužitelj sprema na vaš
        uređaj putem preglednika. Pri svakom sljedećem posjetu preglednik ih
        šalje natrag poslužitelju, što mu omogućuje pamćenje vaših preferencija
        ili stanja sesije.
      </p>

      <h2 className={styles.sectionTitle}>2. Kolačići koje koristimo</h2>
      <p>
        Web‑stranica sportsync.hr koristi sljedeće kategorije kolačića:
      </p>

      <p><strong>2.1. Tehnički (nužni) kolačići</strong></p>
      <p>
        Ovi kolačići su neophodni za ispravno funkcioniranje stranice. Ne
        prate vaše ponašanje u marketinške svrhe i ne zahtijevaju vašu
        privolu sukladno čl. 107. Zakona o elektroničkim komunikacijama
        (NN 76/2022).
      </p>

      <p><strong>2.2. Analitički kolačići (Google Analytics)</strong></p>
      <p>
        Koristimo Google Analytics (Google Ireland Limited, Gordon House,
        Barrow Street, Dublin 4, Irska) za prikupljanje anonimiziranih
        podataka o korištenju web‑stranice. Ovi kolačići postavljaju se
        <strong> isključivo uz vašu prethodnu privolu</strong> putem
        bannera za kolačiće koji se prikazuje pri prvom posjetu.
      </p>
      <p>Analitički kolačići koje koristimo:</p>
      <ul>
        <li>
          <strong>_ga</strong> – razlikuje jedinstvene posjetitelje; trajanje:
          2 godine.
        </li>
        <li>
          <strong>_ga_&lt;ID&gt;</strong> – održava stanje sesije; trajanje:
          2 godine.
        </li>
      </ul>
      <p>
        Podaci prikupljeni putem Google Analytics uključuju: stranice koje
        ste posjetili, trajanje posjeta, vrstu preglednika i uređaja te
        približnu geografsku lokaciju (na razini grada). IP adresa se
        anonimizira prije obrade.
      </p>
      <p>
        Više informacija o tome kako Google obrađuje podatke možete
        pronaći na:{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Privacy Policy
        </a>.
      </p>

      <p><strong>2.3. Marketinški kolačići</strong></p>
      <p>
        Stranica <strong>ne koristi</strong> marketinške kolačiće niti
        kolačiće za oglašavanje (npr. Meta Pixel ili ekvivalente).
      </p>

      <h2 className={styles.sectionTitle}>3. Mobilna aplikacija</h2>
      <p>
        Mobilna aplikacija SportSync (iOS i Android) ne koristi kolačiće.
        Autentikacijski token pohranjuje se lokalno na vašem uređaju
        isključivo radi održavanja prijavljene sesije i ne dijeli se s
        trećim stranama.
      </p>

      <h2 className={styles.sectionTitle}>4. Kako upravljati kolačićima</h2>
      <p>
        Analitičke kolačiće možete odbiti putem bannera za kolačiće koji se
        prikazuje pri prvom posjetu stranice. Svoju odluku možete promijeniti
        u bilo kojem trenutku brisanjem kolačića u postavkama preglednika –
        banner će se ponovno prikazati pri sljedećem posjetu.
      </p>
      <p>
        Kolačiće također možete izbrisati ili blokirati u postavkama svog
        preglednika. Imajte na umu da blokiranje tehničkih kolačića može
        utjecati na ispravno funkcioniranje stranice.
      </p>

      <h2 className={styles.sectionTitle}>5. Promjene ove politike</h2>
      <p>
        Ako uvedemo dodatne kategorije kolačića, ovu politiku ćemo ažurirati
        i po potrebi zatražiti vašu privolu prije postavljanja takvih
        kolačića.
      </p>
    </article>
  );
}
