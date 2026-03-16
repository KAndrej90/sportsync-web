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
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 14. ožujka 2026.</p>

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
        Web‑stranica sportsync.hr koristi isključivo <strong>tehničke
        (nužne) kolačiće</strong> koji su neophodni za ispravno
        funkcioniranje stranice. Ti kolačići ne prate vaše ponašanje u
        marketinške svrhe i ne zahtijevaju vašu privolu sukladno čl. 107.
        Zakona o elektroničkim komunikacijama (NN 76/2022).
      </p>
      <p>
        Stranica <strong>ne koristi</strong> analitičke, marketinške niti
        kolačiće trećih strana (npr. Google Analytics, Meta Pixel ili
        ekvivalente). Fontovi koji se koriste na stranici poslužuju se
        lokalno s naših poslužitelja i ne generiraju zahtjeve prema vanjskim
        domenama.
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
        Kolačiće možete izbrisati ili blokirati u postavkama svog preglednika.
        Imajte na umu da blokiranje tehničkih kolačića može utjecati na
        ispravno funkcioniranje stranice.
      </p>

      <h2 className={styles.sectionTitle}>5. Promjene ove politike</h2>
      <p>
        Ako u budućnosti uvedemo bilo kakve analitičke ili marketinške kolačiće,
        ovu politiku ćemo ažurirati i po potrebi zatražiti vašu privolu
        prije postavljanja takvih kolačića.
      </p>
    </article>
  );
}
