import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Brisanje računa i podataka",
  description:
    "Upute za brisanje SportSync računa i podataka (data deletion).",
};

export default function DeleteAccountPage() {
  return (
    <article className={styles.prose}>
      <h1 className={styles.pageTitle}>Brisanje računa i podataka</h1>
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 8. travnja 2026.</p>

      <p>
        SportSync omogućuje brisanje računa izravno unutar mobilne aplikacije.
        Brisanjem računa brišu se povezani osobni podaci u skladu s pravilima
        privatnosti, osim podataka koje smo dužni zadržati radi zakonskih obveza
        ili legitimnih interesa (npr. sigurnost i sprječavanje zlouporaba).
      </p>
      <p>
        Ako ste prije brisanja računa slali chat poruke, one se ne moraju
        trenutačno ukloniti iz DM razgovora ili chatova Termina drugih korisnika.
        Redovni chat zapisi brišu se najkasnije u roku od <strong>3 mjeseca</strong>
        od slanja, a prijavljene poruke i povezani sigurnosni zapisi mogu se
        zadržati dulje ako je to potrebno radi obrade prijave, zaštite prava,
        sprječavanja zlouporaba ili poštivanja zakonskih obveza.
      </p>

      <h2 className={styles.sectionTitle}>1. Brisanje računa u aplikaciji (preporučeno)</h2>
      <p>U donjem desnom kutu otvorite <strong>ikonu profila</strong>.</p>
      <p>Na profilnoj stranici, u gornjem desnom kutu odaberite <strong>kotačić</strong> (Postavke).</p>
      <p>U padajućem izborniku odaberite opciju <strong>Izbriši račun</strong>.</p>
      <p>Potvrdite brisanje kada se to zatraži.</p>

      <h2 className={styles.sectionTitle}>2. Ako ne možete ući u aplikaciju</h2>
      <p>
        Ako nemate pristup računu (npr. izgubljen uređaj ili problem s prijavom),
        pošaljite nam zahtjev putem{" "}
        <Link href="/contact">kontaktnog obrasca</Link> ili emailom na{" "}
        <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>.
      </p>
      <p>U poruci navedite email adresu računa i (ako je moguće) ime i prezime.</p>

      <h2 className={styles.sectionTitle}>3. Rokovi obrade</h2>
      <p>
        Zahtjeve obrađujemo u razumnom roku, najkasnije u rokovima propisanim
        GDPR‑om (do 30 dana od primitka zahtjeva).
      </p>
    </article>
  );
}
