"use client";

import styles from "../legal.module.css";
import ContactForm from "./ContactForm";
import { useLanguage } from "../../localization/LanguageProvider";

export default function ContactPage() {
  const { language } = useLanguage();
  const text = language === "hr"
    ? {
        tag: "Kontakt",
        title: "Javi nam se oko podrške, pitanja ili prijedloga",
        intro: "Ako si zapeo u aplikaciji, želiš prijaviti problem ili poslati ideju za novu funkcionalnost, koristi formu ispod ili piši direktno na",
        formTitle: "Pošalji poruku podršci",
        formIntro: "Odgovaramo na tehničke poteškoće, upite oko računa i prijedloge za poboljšanja SportSync iskustva.",
      }
    : {
        tag: "Contact",
        title: "Contact us for support, questions, or suggestions",
        intro: "If you are having trouble with the app, want to report a problem, or share an idea for a new feature, use the form below or email us directly at",
        formTitle: "Send a message to support",
        formIntro: "We respond to technical issues, account questions, and suggestions for improving the SportSync experience.",
      };

  return (
    <article className={styles.prose}>
      <div className={styles.hero}>
        <span className={styles.tag}>{text.tag}</span>
        <h1 className={styles.pageTitle}>{text.title}</h1>
        <p className={styles.lastUpdated}>
          {text.intro}{" "}
          <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>.
        </p>
      </div>

      <div className={styles.cardGrid}>
        <section className={styles.card} style={{ gridColumn: "1 / -1" }}>
          <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>
            {text.formTitle}
          </h2>
          <p className={styles.muted}>{text.formIntro}</p>
          <ContactForm />
        </section>
      </div>
    </article>
  );
}
