"use client";

import styles from "../legal.module.css";
import { useLanguage } from "../../localization/LanguageProvider";

export default function CookiesPage() {
  const { language } = useLanguage();

  if (language === "en") {
    return (
      <article className={styles.prose}>
        <h1 className={styles.pageTitle}>Cookie Policy</h1>
        <p className={styles.lastUpdated}>Last updated: August 14, 2026</p>
        <p>
          The sportsync.hr website does not use cookies for analytics,
          advertising, or marketing, and does not use Google Analytics.
        </p>
        <h2 className={styles.sectionTitle}>Language preference</h2>
        <p>
          The website stores your selected language in your browser&apos;s local
          storage. This preference remains on your device, is used only to show
          the website in your chosen language, and is not used to track you.
        </p>
        <h2 className={styles.sectionTitle}>Future changes</h2>
        <p>
          If we introduce cookies or similar technologies that require consent,
          we will update this policy and request consent before using them.
        </p>
      </article>
    );
  }

  return (
    <article className={styles.prose}>
      <h1 className={styles.pageTitle}>Politika kolačića</h1>
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 14. kolovoza 2026.</p>
      <p>
        Web-stranica sportsync.hr ne koristi kolačiće za analitiku, oglašavanje
        ili marketing te ne koristi Google Analytics.
      </p>
      <h2 className={styles.sectionTitle}>Jezična postavka</h2>
      <p>
        Web-stranica sprema odabrani jezik u lokalnu pohranu vašeg preglednika.
        Ta postavka ostaje na vašem uređaju, koristi se samo za prikaz stranice
        na odabranom jeziku i ne koristi se za praćenje.
      </p>
      <h2 className={styles.sectionTitle}>Buduće promjene</h2>
      <p>
        Ako uvedemo kolačiće ili slične tehnologije za koje je potrebna privola,
        ažurirat ćemo ovu politiku i zatražiti privolu prije njihove uporabe.
      </p>
    </article>
  );
}
