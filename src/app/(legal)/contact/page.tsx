import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt i podrška za SportSync.",
};

export default function ContactPage() {
  return (
    <article className={styles.prose}>
      <h1 className={styles.pageTitle}>Kontakt</h1>
      <p className={styles.lastUpdated}>
        Za podršku, prijavu problema ili prijedloge novih funkcionalnosti.
      </p>

      <div className={styles.cardGrid}>
        <section className={styles.card}>
          <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>
            Email podrška
          </h2>
          <p className={styles.muted}>
            Najbrži način da riješimo problem je da nam pošalješ što više detalja.
          </p>
          <p>
            <a href="mailto:ante.kadic@sportsync.hr">ante.kadic@sportsync.hr</a>
          </p>
        </section>

        <section className={styles.card}>
          <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>
            Brzi linkovi
          </h2>
          <ul className={styles.small}>
            <li>
              <Link href="/privacy">Politika privatnosti</Link>
            </li>
            <li>
              <Link href="/delete-account">Brisanje računa i podataka</Link>
            </li>
            <li>
              <Link href="/terms">Uvjeti korištenja</Link>
            </li>
          </ul>
          <p className={`${styles.muted} ${styles.small}`}>
            Ako ne možeš ući u aplikaciju, brisanje računa možeš zatražiti i preko
            emaila na istoj adresi.
          </p>
        </section>
      </div>

      <h2 className={styles.sectionTitle}>Što uključiti u poruku</h2>
      <ul>
        <li>
          Kratak opis: što se dogodilo i što si očekivao/la da će se dogoditi.
        </li>
        <li>
          Uređaj i OS (npr. iPhone 14 / iOS 17 ili Samsung S23 / Android 14).
        </li>
        <li>
          Verzija aplikacije (ako znaš) i vrijeme kada se problem dogodio.
        </li>
        <li>
          Screenshot/snimka zaslona (ako je moguće).
        </li>
      </ul>

      <div className={styles.notice}>
        <strong>Tip:</strong> Ako prijavljuješ bug, napiši i korake kako ga
        ponoviti (1, 2, 3...). To nam najviše pomaže.
      </div>
    </article>
  );
}
