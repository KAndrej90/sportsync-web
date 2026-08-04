"use client";

import styles from "../legal.module.css";
import { useLanguage } from "../../localization/LanguageProvider";

export default function CookiesPage() {
  const { language } = useLanguage();

  if (language === "en") {
    return (
      <article className={styles.prose}>
        <h1 className={styles.pageTitle}>Cookie Policy</h1>
        <p className={styles.lastUpdated}>Last updated: June 3, 2026</p>
        <p>This page explains how the sportsync.hr website uses cookies and similar technologies.</p>
        <h2 className={styles.sectionTitle}>1. What cookies are</h2>
        <p>Cookies are small text files that a web server stores on your device through your browser. On each subsequent visit, the browser sends them back to the server, allowing it to remember your preferences or session state.</p>
        <h2 className={styles.sectionTitle}>2. Cookies we use</h2>
        <p>The sportsync.hr website uses the following categories of cookies:</p>
        <p><strong>2.1. Technical (strictly necessary) cookies</strong></p>
        <p>These cookies are necessary for the website to function correctly. They do not track your behavior for marketing purposes and do not require your consent under Article 107 of the Croatian Electronic Communications Act (Official Gazette 76/2022).</p>
        <p><strong>2.2. Analytics cookies (Google Analytics)</strong></p>
        <p>We use Google Analytics (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland) to collect anonymized information about use of the website. These cookies are set <strong>only with your prior consent</strong> through the cookie banner shown on your first visit.</p>
        <p>Analytics cookies we use:</p>
        <ul>
          <li><strong>_ga</strong> – distinguishes unique visitors; duration: 2 years.</li>
          <li><strong>_ga_&lt;ID&gt;</strong> – maintains session state; duration: 2 years.</li>
        </ul>
        <p>Data collected through Google Analytics includes pages visited, visit duration, browser and device type, and approximate geographical location at city level. The IP address is anonymized before processing.</p>
        <p>More information about how Google processes data is available in the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</p>
        <p><strong>2.3. Marketing cookies</strong></p>
        <p>The website <strong>does not use</strong> marketing or advertising cookies, such as Meta Pixel or equivalents.</p>
        <h2 className={styles.sectionTitle}>3. Mobile application</h2>
        <p>The SportSync mobile application for iOS and Android does not use cookies. The authentication token is stored locally on your device solely to maintain your signed-in session and is not shared with third parties.</p>
        <h2 className={styles.sectionTitle}>4. How to manage cookies</h2>
        <p>You can reject analytics cookies through the cookie banner shown on your first visit. You can change your decision at any time by deleting cookies in your browser settings; the banner will be displayed again on your next visit.</p>
        <p>You can also delete or block cookies in your browser settings. Please note that blocking technical cookies may affect the correct functioning of the website.</p>
        <h2 className={styles.sectionTitle}>5. Changes to this policy</h2>
        <p>If we introduce additional categories of cookies, we will update this policy and, where necessary, request your consent before setting those cookies.</p>
      </article>
    );
  }

  return (
    <article className={styles.prose}>
      <h1 className={styles.pageTitle}>Politika kolačića</h1>
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 3. lipnja 2026.</p>
      <p>Ova stranica objašnjava na koji način web‑stranica sportsync.hr koristi kolačiće (engl. <em>cookies</em>) i slične tehnologije.</p>
      <h2 className={styles.sectionTitle}>1. Što su kolačići</h2>
      <p>Kolačići su male tekstualne datoteke koje web‑poslužitelj sprema na vaš uređaj putem preglednika. Pri svakom sljedećem posjetu preglednik ih šalje natrag poslužitelju, što mu omogućuje pamćenje vaših preferencija ili stanja sesije.</p>
      <h2 className={styles.sectionTitle}>2. Kolačići koje koristimo</h2>
      <p>Web‑stranica sportsync.hr koristi sljedeće kategorije kolačića:</p>
      <p><strong>2.1. Tehnički (nužni) kolačići</strong></p>
      <p>Ovi kolačići su neophodni za ispravno funkcioniranje stranice. Ne prate vaše ponašanje u marketinške svrhe i ne zahtijevaju vašu privolu sukladno čl. 107. Zakona o elektroničkim komunikacijama (NN 76/2022).</p>
      <p><strong>2.2. Analitički kolačići (Google Analytics)</strong></p>
      <p>Koristimo Google Analytics (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irska) za prikupljanje anonimiziranih podataka o korištenju web‑stranice. Ovi kolačići postavljaju se <strong>isključivo uz vašu prethodnu privolu</strong> putem bannera za kolačiće koji se prikazuje pri prvom posjetu.</p>
      <p>Analitički kolačići koje koristimo:</p>
      <ul>
        <li><strong>_ga</strong> – razlikuje jedinstvene posjetitelje; trajanje: 2 godine.</li>
        <li><strong>_ga_&lt;ID&gt;</strong> – održava stanje sesije; trajanje: 2 godine.</li>
      </ul>
      <p>Podaci prikupljeni putem Google Analytics uključuju: stranice koje ste posjetili, trajanje posjeta, vrstu preglednika i uređaja te približnu geografsku lokaciju (na razini grada). IP adresa se anonimizira prije obrade.</p>
      <p>Više informacija o tome kako Google obrađuje podatke možete pronaći na: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</p>
      <p><strong>2.3. Marketinški kolačići</strong></p>
      <p>Stranica <strong>ne koristi</strong> marketinške kolačiće niti kolačiće za oglašavanje (npr. Meta Pixel ili ekvivalente).</p>
      <h2 className={styles.sectionTitle}>3. Mobilna aplikacija</h2>
      <p>Mobilna aplikacija SportSync (iOS i Android) ne koristi kolačiće. Autentikacijski token pohranjuje se lokalno na vašem uređaju isključivo radi održavanja prijavljene sesije i ne dijeli se s trećim stranama.</p>
      <h2 className={styles.sectionTitle}>4. Kako upravljati kolačićima</h2>
      <p>Analitičke kolačiće možete odbiti putem bannera za kolačiće koji se prikazuje pri prvom posjetu stranice. Svoju odluku možete promijeniti u bilo kojem trenutku brisanjem kolačića u postavkama preglednika – banner će se ponovno prikazati pri sljedećem posjetu.</p>
      <p>Kolačiće također možete izbrisati ili blokirati u postavkama svog preglednika. Imajte na umu da blokiranje tehničkih kolačića može utjecati na ispravno funkcioniranje stranice.</p>
      <h2 className={styles.sectionTitle}>5. Promjene ove politike</h2>
      <p>Ako uvedemo dodatne kategorije kolačića, ovu politiku ćemo ažurirati i po potrebi zatražiti vašu privolu prije postavljanja takvih kolačića.</p>
    </article>
  );
}
