import type { Metadata } from "next";
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
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 23.01.2026.</p>

      <p>
        SportSync omogućuje brisanje računa izravno unutar mobilne aplikacije.
        Brisanjem računa brišu se povezani osobni podaci u skladu s pravilima
        privatnosti, osim podataka koje smo dužni zadržati radi zakonskih obveza
        ili legitimnih interesa (npr. sigurnost i sprječavanje zlouporaba).
      </p>

      <h2 className={styles.sectionTitle}>1. Brisanje računa u aplikaciji (preporučeno)</h2>
      <ol>
        <li>
          U donjem desnom kutu otvorite <strong>ikonu profila</strong>.
        </li>
        <li>
          Na profilnoj stranici, u gornjem desnom kutu odaberite <strong>kotačić</strong>
          (Postavke).
        </li>
        <li>
          U padajućem izborniku odaberite opciju <strong>Izbriši račun</strong>.
        </li>
        <li>
          Potvrdite brisanje kada se to zatraži.
        </li>
      </ol>

      <h2 className={styles.sectionTitle}>2. Ako ne možete ući u aplikaciju</h2>
      <p>
        Ako nemate pristup računu (npr. izgubljen uređaj ili problem s prijavom),
        pošaljite nam email na {" "}
        <a href="mailto:ante.kadic@sportsync.hr">ante.kadic@sportsync.hr</a>.
      </p>
      <ul>
        <li>
          U naslov upišite: <strong>&quot;Zahtjev za brisanje računa&quot;</strong>.
        </li>
        <li>
          U poruci navedite email adresu računa i (ako je moguće) ime i prezime.
        </li>
      </ul>

      <h2 className={styles.sectionTitle}>3. Rokovi obrade</h2>
      <p>
        Zahtjeve obrađujemo u razumnom roku, najkasnije u rokovima propisanim GDPR-om.
      </p>

      <div className={styles.notice}>
        Ovu stranicu možeš koristiti kao &quot;Data deletion instructions URL&quot; za Google
        Play/App Store listing.
      </div>
    </article>
  );
}
