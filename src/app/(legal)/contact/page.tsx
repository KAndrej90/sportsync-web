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
      <div className={styles.hero}>
        <span className={styles.tag}>Kontakt</span>
        <h1 className={styles.pageTitle}>Javi nam se oko podrške, pitanja ili prijedloga</h1>
        <p className={styles.lastUpdated}>
          Ako si zapeo u aplikaciji, želiš prijaviti problem ili poslati ideju za
          novu funkcionalnost, koristi formu ispod ili piši direktno na{" "}
          <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>.
        </p>
      </div>

      <div className={styles.cardGrid}>
        <section className={styles.card} style={{ gridColumn: "1 / -1" }}>
          <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>
            Pošalji poruku podršci
          </h2>
          <p className={styles.muted}>
            Odgovaramo na tehničke poteškoće, upite oko računa i prijedloge za
            poboljšanja SportSync iskustva.
          </p>
          <ContactForm />
        </section>
      </div>
    </article>
  );
}
