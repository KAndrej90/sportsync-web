"use client";

import Image from "next/image";
import styles from "../legal.module.css";
import FreeTrialSeasonForm from "./FreeTrialSeasonForm";
import { useLanguage } from "../../localization/LanguageProvider";
import SeasonScreenshotTable from "../../assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.29.27.png";
import SeasonScreenshotResults from "../../assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.29.34.png";
import SeasonScreenshotPlayers from "../../assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.29.41.png";
import SeasonScreenshotTrophy from "../../assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.29.55.png";
import SeasonScreenshotAchievements from "../../assets/sezone/Simulator Screenshot - iPhone 17 Pro Max - 2026-06-29 at 11.30.02.png";

const images = [SeasonScreenshotTable, SeasonScreenshotResults, SeasonScreenshotPlayers, SeasonScreenshotTrophy, SeasonScreenshotAchievements];

export default function FreeTrialSeasonContent() {
  const { language } = useLanguage();
  const text = language === "hr"
    ? {
        title: "Zatražite besplatnu probnu sezonu za svoj termin",
        paragraphs: [
          "Probna sezona traje 3 mjeseca, ne zahtijeva unos podataka za plaćanje i ne obvezuje vas na nastavak pune sezone.",
          "Tijekom probnog razdoblja dostupne su vam sve funkcionalnosti kao i u punoj sezoni te svi uneseni rezultati i podaci ostaju trajno sačuvani.",
          "Nakon što pošaljete zahtjev, javit ćemo vam se e-mailom s potvrdom i sljedećim koracima.",
        ],
        eyebrow: "Cijela sezona u džepu", showcaseTitle: "Tablica, rezultati, statistika i trofeji na jednom mjestu",
        screens: ["Tablica", "Rezultati", "Igrači", "Postignuća", "Trofeji"], previews: "SportSync season prikazi", imageAlt: "SportSync prikaz",
        formTitle: "Podaci za aktivaciju probne sezone", formIntro: "Unesite kontakt podatke, naziv termina za koji želite pokrenuti sezonu i najmanje dva tima koja će sudjelovati.",
      }
    : {
        title: "Request a free trial season for your event",
        paragraphs: [
          "The trial season lasts for 3 months, does not require payment details, and does not commit you to continuing with a full season.",
          "During the trial, all features available in a full season are included, and every result and record you enter remains permanently saved.",
          "After you submit the request, we will email you with confirmation and the next steps.",
        ],
        eyebrow: "Your entire season in your pocket", showcaseTitle: "Standings, results, statistics, and trophies in one place",
        screens: ["Standings", "Results", "Players", "Achievements", "Trophies"], previews: "SportSync season previews", imageAlt: "SportSync view",
        formTitle: "Information for activating your trial season", formIntro: "Enter your contact details, the name of the event for which you want to start a season, and at least two participating teams.",
      };

  return (
    <article className={styles.prose}>
      <div className={styles.hero}>
        <span className={styles.tag}>Free Trial Season</span>
        <h1 className={styles.pageTitle}>{text.title}</h1>
        <p className={styles.lastUpdated}>{text.paragraphs.map((paragraph, index) => <span key={paragraph}>{paragraph}{index < text.paragraphs.length - 1 ? <><br /><br /></> : null}</span>)}</p>
      </div>
      <section className={styles.seasonShowcase} aria-labelledby="season-preview-title">
        <div className={styles.seasonShowcaseContent}>
          <span className={styles.seasonEyebrow}>{text.eyebrow}</span>
          <h2 id="season-preview-title" className={styles.seasonTitle}>{text.showcaseTitle}</h2>
        </div>
        <div className={styles.seasonScreens} aria-label={text.previews}>
          {text.screens.map((title, index) => (
            <figure key={title} className={styles.seasonScreen}>
              <div className={styles.phoneFrame}><Image src={images[index]} alt={`${text.imageAlt}: ${title}`} className={styles.phoneImage} quality={100} sizes="(max-width: 639px) 58vw, (max-width: 1023px) 180px, 170px" /></div>
              <figcaption>{title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <div className={styles.cardGrid}>
        <section className={styles.card} style={{ gridColumn: "1 / -1" }}>
          <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>{text.formTitle}</h2>
          <p className={styles.muted}>{text.formIntro}</p>
          <FreeTrialSeasonForm />
        </section>
      </div>
    </article>
  );
}
