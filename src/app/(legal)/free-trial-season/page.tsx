import type { Metadata } from "next";
import Image from "next/image";
import styles from "../legal.module.css";
import FreeTrialSeasonForm from "./FreeTrialSeasonForm";
import SeasonScreenshotTable from "../../assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.29.27.png";
import SeasonScreenshotResults from "../../assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.29.34.png";
import SeasonScreenshotPlayers from "../../assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.29.41.png";
import SeasonScreenshotTrophy from "../../assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.29.55.png";
import SeasonScreenshotAchievements from "../../assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.30.02.png";

export const metadata: Metadata = {
  title: "Free Trial Season",
  description: "Zatražite besplatnu probnu sezonu za SportSync termin.",
};

const seasonScreens = [
  {
    title: "Tablica",
    image: SeasonScreenshotTable,
  },
  {
    title: "Rezultati",
    image: SeasonScreenshotResults,
  },
  {
    title: "Igrači",
    image: SeasonScreenshotPlayers,
  },
  {
    title: "Postignuća",
    image: SeasonScreenshotTrophy,
  },
  {
    title: "Trofeji",
    image: SeasonScreenshotAchievements,
  },
];

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
          Tijekom probnog razdoblja dostupne su vam sve funkcionalnosti kao i u punoj sezoni te svi uneseni rezultati i podaci ostaju trajno sačuvani.
          <br/>
          Nakon što pošaljete zahtjev, javit ćemo vam se e-mailom s
          potvrdom i sljedećim koracima.
        </p>
      </div>

      <section
        className={styles.seasonShowcase}
        aria-labelledby="season-preview-title"
      >
        <div className={styles.seasonShowcaseContent}>
          <span className={styles.seasonEyebrow}>Cijela sezona u džepu</span>
          <h2 id="season-preview-title" className={styles.seasonTitle}>
            Tablica, rezultati, statistika i trofeji na jednom mjestu
          </h2>
        </div>

        <div
          className={styles.seasonScreens}
          aria-label="SportSync season prikazi"
        >
          {seasonScreens.map((screen) => (
            <figure key={screen.title} className={styles.seasonScreen}>
              <div className={styles.phoneFrame}>
                <Image
                  src={screen.image}
                  alt={`SportSync prikaz: ${screen.title}`}
                  className={styles.phoneImage}
                  quality={100}
                  sizes="(max-width: 639px) 58vw, (max-width: 1023px) 180px, 170px"
                />
              </div>
              <figcaption>{screen.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

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
