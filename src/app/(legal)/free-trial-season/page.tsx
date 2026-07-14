import type { Metadata } from "next";
import styles from "../legal.module.css";
import FreeTrialSeasonForm from "./FreeTrialSeasonForm";

export const metadata: Metadata = {
  title: "Free Trial Season",
  description: "Zatražite besplatnu probnu sezonu za SportSync termin.",
};

export default function FreeTrialSeasonPage() {
  return (
    <article className={styles.prose}>
      <div className={styles.hero}>
        <span className={styles.tag}>Free Trial Season</span>
        <h1 className={styles.pageTitle}>
          Zatražite besplatnu probnu sezonu za svoj termin
        </h1>
        <p className={styles.lastUpdated}>
          Probna sezona traje 3 mjeseca, ne zahtijeva unos podataka za plaćanje i ne obvezuje vas na nastavak pune sezone. 
          <br/>
          Tijekom probnog razdoblja dostupne su vam sve funkcionalnosti kao i u punoj sezoni: 
          unos rezultata te vođenje statistike strijelaca, asistenata i MVP igrača. 
          Svi uneseni rezultati i podaci ostaju trajno sačuvani.
          <br/>
          Nakon što pošaljete zahtjev, javit ćemo vam se e-mailom s
          potvrdom i sljedećim koracima.
        </p>
      </div>

      <div className={styles.cardGrid}>
        <section className={styles.card} style={{ gridColumn: "1 / -1" }}>
          <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>
            Podaci za aktivaciju probne sezone
          </h2>
          <p className={styles.muted}>
            Unesite kontakt podatke, naziv termina za koji želite pokrenuti
            sezonu i najmanje dva tima koja će sudjelovati.
          </p>
          <FreeTrialSeasonForm />
        </section>
      </div>
    </article>
  );
}
