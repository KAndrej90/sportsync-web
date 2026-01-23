import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Uvjeti korištenja",
  description: "Uvjeti korištenja za SportSync.",
};

export default function TermsPage() {
  return (
    <article className={styles.prose}>
      <h1 className={styles.pageTitle}>Uvjeti korištenja</h1>
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 23.01.2026.</p>

      <p>
        Ovi Uvjeti korištenja uređuju korištenje SportSync web stranice i mobilne
        aplikacije.
      </p>

      <h2 className={styles.sectionTitle}>1. Tko smo</h2>
      <p>
        Uslugu pruža <strong>Codemem Consulting d.o.o.</strong>. Kontakt: {" "}
        <a href="mailto:ante.kadic@sportsync.hr">ante.kadic@sportsync.hr</a>.
      </p>

      <h2 className={styles.sectionTitle}>2. Korištenje usluge</h2>
      <ul>
        <li>Ne zloupotrebljavajte aplikaciju, uslugu ili sadržaj.</li>
        <li>Poštujte druge korisnike i pravila sportskih objekata.</li>
        <li>
          Zadržavamo pravo ograničiti ili ukinuti račun u slučaju kršenja uvjeta.
        </li>
      </ul>

      <h2 className={styles.sectionTitle}>3. Korisnički sadržaj</h2>
      <p>
        Odgovorni ste za sadržaj koji objavljujete (npr. opisi termina, poruke).
        Ne objavljujte nezakonit, uvredljiv ili tuđi zaštićeni sadržaj.
      </p>

      <h2 className={styles.sectionTitle}>4. Ograničenje odgovornosti</h2>
      <p>
        Usluga se pruža &quot;kakva jest&quot;. Ne možemo jamčiti neprekidan rad te ne
        odgovaramo za neizravne štete u najvećoj mjeri dopuštenoj zakonom.
      </p>

      <h2 className={styles.sectionTitle}>5. Privatnost</h2>
      <p>
        Obradu osobnih podataka detaljno opisuje {" "}
        <Link href="/privacy">Politika privatnosti</Link>.
      </p>

      <h2 className={styles.sectionTitle}>6. Promjene uvjeta</h2>
      <p>
        Uvjete možemo povremeno ažurirati. Najnovija verzija uvijek je dostupna na
        ovoj stranici.
      </p>

      <div className={styles.notice}>
        <strong>Napomena:</strong> Ovo je osnovni predložak i nije pravni savjet.
        Preporučeno je da odvjetnik pregleda konačnu verziju.
      </div>
    </article>
  );
}
