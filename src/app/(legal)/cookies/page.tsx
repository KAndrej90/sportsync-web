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
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 23.01.2026.</p>

      <p>
        Ova web stranica je prvenstveno informativna. Trenutno ne koristimo
        marketinške ili analitičke kolačiće trećih strana (npr. Google Analytics)
        bez vaše privole.
      </p>

      <h2 className={styles.sectionTitle}>1. Što su kolačići</h2>
      <p>
        Kolačići su male tekstualne datoteke koje preglednik sprema na vaš uređaj
        radi poboljšanja korisničkog iskustva.
      </p>

      <h2 className={styles.sectionTitle}>2. Nužni kolačići</h2>
      <p>
        Nužni kolačići mogu biti potrebni za osnovne funkcionalnosti (npr.
        sigurnost, preferencije). Ako ih koristimo, oni ne zahtijevaju privolu.
      </p>

      <h2 className={styles.sectionTitle}>3. Kako upravljati kolačićima</h2>
      <p>
        Kolačiće možete izbrisati ili blokirati u postavkama svog preglednika.
        Imajte na umu da blokiranje može utjecati na funkcionalnost.
      </p>
    </article>
  );
}

