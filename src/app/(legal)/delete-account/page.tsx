"use client";

import styles from "../legal.module.css";
import LocalizedLink from "../../localization/LocalizedLink";
import { useLanguage } from "../../localization/LanguageProvider";

export default function DeleteAccountPage() {
  const { language } = useLanguage();

  if (language === "en") {
    return (
      <article className={styles.prose}>
        <h1 className={styles.pageTitle}>Account and data deletion</h1>
        <p className={styles.lastUpdated}>Last updated: August 22, 2026</p>
        <p>SportSync allows you to delete your account directly in the mobile app. Deleting the account removes the associated personal data in accordance with the Privacy Policy, except for data we are required to retain due to legal obligations or legitimate interests, such as security and prevention of misuse.</p>
        <p>If you sent chat messages before deleting your account, they may not be removed immediately from direct-message conversations or other users&apos; Game chats. Regular chat records are deleted no later than <strong>3 months</strong> after being sent, while reported messages and related security records may be retained longer where necessary to process a report, protect rights, prevent misuse, or comply with legal obligations.</p>
        <p>For an account linked to Google or Apple sign-in, deletion also removes the linked provider identifier according to the periods in the Privacy Policy. Deleting your SportSync account does not delete your Google or Apple Account. Conversely, removing SportSync access in your Google or Apple Account settings does not by itself delete your SportSync account; use one of the methods below.</p>
        <p>The current SportSync deletion flow does not automatically revoke Sign in with Apple authorization. If you used Sign in with Apple, first delete your SportSync account using one of the methods below, then stop using Sign in with Apple for SportSync in your Apple Account settings.</p>
        <h2 className={styles.sectionTitle}>1. Delete your account in the app (recommended)</h2>
        <p>Open the <strong>profile icon</strong> in the bottom-right corner.</p>
        <p>On the profile page, select the <strong>gear icon</strong> (Settings) in the top-right corner.</p>
        <p>Select <strong>Delete account</strong> from the menu.</p>
        <p>Confirm the deletion when prompted.</p>
        <h2 className={styles.sectionTitle}>2. If you cannot access the app</h2>
        <p>If you cannot access your account, for example due to a lost device or sign-in problem, send us a request through the <LocalizedLink href="/contact">contact form</LocalizedLink> or email <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>.</p>
        <p>Include the account email address and, if possible, your first and last name.</p>
        <h2 className={styles.sectionTitle}>3. Processing time</h2>
        <p>We process requests within a reasonable period and no later than the deadlines prescribed by the GDPR, up to 30 days after receiving the request.</p>
      </article>
    );
  }

  return (
    <article className={styles.prose}>
      <h1 className={styles.pageTitle}>Brisanje računa i podataka</h1>
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 22. kolovoza 2026.</p>
      <p>SportSync omogućuje brisanje računa izravno unutar mobilne aplikacije. Brisanjem računa brišu se povezani osobni podaci u skladu s pravilima privatnosti, osim podataka koje smo dužni zadržati radi zakonskih obveza ili legitimnih interesa (npr. sigurnost i sprječavanje zlouporaba).</p>
      <p>Ako ste prije brisanja računa slali chat poruke, one se ne moraju trenutačno ukloniti iz DM razgovora ili chatova Termina drugih korisnika. Redovni chat zapisi brišu se najkasnije u roku od <strong>3 mjeseca</strong> od slanja, a prijavljene poruke i povezani sigurnosni zapisi mogu se zadržati dulje ako je to potrebno radi obrade prijave, zaštite prava, sprječavanja zlouporaba ili poštivanja zakonskih obveza.</p>
      <p>Za račun povezan s prijavom putem Googlea ili Applea brisanjem se, u rokovima iz Politike privatnosti, uklanja i povezani identifikator pružatelja. Brisanje SportSync računa ne briše vaš Google ili Apple račun. Obrnuto, uklanjanje pristupa SportSyncu u postavkama Google ili Apple računa samo po sebi ne briše SportSync račun; za to upotrijebite jedan od načina u nastavku.</p>
      <p>Trenutačni postupak brisanja SportSync računa ne opoziva automatski autorizaciju prijave putem Applea. Ako ste koristili prijavu putem Applea, najprije izbrišite SportSync račun na jedan od načina u nastavku, a zatim u postavkama Apple računa prekinite korištenje prijave putem Applea za SportSync.</p>
      <h2 className={styles.sectionTitle}>1. Brisanje računa u aplikaciji (preporučeno)</h2>
      <p>U donjem desnom kutu otvorite <strong>ikonu profila</strong>.</p>
      <p>Na profilnoj stranici, u gornjem desnom kutu odaberite <strong>kotačić</strong> (Postavke).</p>
      <p>U padajućem izborniku odaberite opciju <strong>Izbriši račun</strong>.</p>
      <p>Potvrdite brisanje kada se to zatraži.</p>
      <h2 className={styles.sectionTitle}>2. Ako ne možete ući u aplikaciju</h2>
      <p>Ako nemate pristup računu (npr. izgubljen uređaj ili problem s prijavom), pošaljite nam zahtjev putem <LocalizedLink href="/contact">kontaktnog obrasca</LocalizedLink> ili emailom na <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>.</p>
      <p>U poruci navedite email adresu računa i (ako je moguće) ime i prezime.</p>
      <h2 className={styles.sectionTitle}>3. Rokovi obrade</h2>
      <p>Zahtjeve obrađujemo u razumnom roku, najkasnije u rokovima propisanim GDPR‑om (do 30 dana od primitka zahtjeva).</p>
    </article>
  );
}
