import type { Metadata } from "next";
import styles from "../legal.module.css";
import ContactForm from "./ContactForm";

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
        <section className={styles.card} style={{ gridColumn: "1 / -1" }}>
          <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>
            Pošalji poruku podršci
          </h2>
          <p className={styles.muted}>
            Koristi formular ispod za prijavu problema ili općih upita.
          </p>
          <p className={styles.muted}>
            Ako želiš, možeš nam se javiti i direktno na{" "}
            <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>.
          </p>
          <ContactForm />
        </section>
      </div>
    </article>
  );
}
