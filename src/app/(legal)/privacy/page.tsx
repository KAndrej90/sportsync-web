import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description:
    "Politika privatnosti za SportSync (Codemem Consulting d.o.o.).",
};

export default function PrivacyPage() {
  return (
    <article className={styles.prose}>
      <h1 className={styles.pageTitle}>Politika privatnosti</h1>
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 23.01.2026.</p>

      <p>
        Ova Politika privatnosti opisuje kako SportSync obrađuje osobne podatke
        korisnika web stranice i mobilne aplikacije.
      </p>

      <h2 className={styles.sectionTitle}>1. Voditelj obrade</h2>
      <p>
        Voditelj obrade osobnih podataka je <strong>Codemem Consulting d.o.o.</strong>
        (&quot;mi&quot;), Hrvatska. Kontakt:{" "}
        <a href="mailto:ante.kadic@sportsync.hr">ante.kadic@sportsync.hr</a>.
      </p>

      <h2 className={styles.sectionTitle}>2. Koje podatke obrađujemo</h2>
      <ul>
        <li>
          Podaci o korisničkom računu (npr. email, korisničko ime, autentikacijski
          tokeni).
        </li>
        <li>
          Podaci profila i preferencija (sportovi, razina igre, grad/lokacija).
        </li>
        <li>
          Podaci o korištenju aplikacije (npr. kreirani termini, prijave na
          susrete).
        </li>
        <li>
          Tehnički podaci (IP adresa, podaci o uređaju/pregledniku – u mjeri u
          kojoj su nužni za rad usluge i sigurnost).
        </li>
      </ul>

      <h2 className={styles.sectionTitle}>3. Svrhe i pravne osnove</h2>
      <ul>
        <li>
          Pružanje usluge i funkcionalnosti (izvršavanje ugovora / poduzimanje
          radnji prije sklapanja ugovora).
        </li>
        <li>
          Sigurnost sustava, sprječavanje zlouporaba i rješavanje problema
          (legitimni interes).
        </li>
        <li>
          Komunikacija s korisnicima i podrška (legitimni interes / ugovor).
        </li>
        <li>
          Marketinške poruke – samo ako ste dali privolu (privola).
        </li>
      </ul>

      <h2 className={styles.sectionTitle}>4. Primatelji i izvršitelji obrade</h2>
      <p>
        Vaše podatke možemo dijeliti s pouzdanim pružateljima usluga (npr. hosting,
        infrastruktura, email), isključivo u mjeri potrebnoj za pružanje usluge.
      </p>

      <h2 className={styles.sectionTitle}>5. Prijenos izvan EU/EEA</h2>
      <p>
        Ako koristimo pružatelje usluga izvan EU/EEA, osiguravamo odgovarajuće
        zaštitne mjere (npr. standardne ugovorne klauzule), kada je primjenjivo.
      </p>

      <h2 className={styles.sectionTitle}>6. Razdoblje čuvanja</h2>
      <p>
        Podatke čuvamo onoliko dugo koliko je potrebno za svrhe obrade, ili dok ne
        zatražite brisanje, osim ako zakon zahtijeva dulje čuvanje.
      </p>

      <h2 className={styles.sectionTitle}>7. Vaša prava</h2>
      <ul>
        <li>Pravo na pristup, ispravak i brisanje.</li>
        <li>Pravo na ograničenje obrade i prigovor.</li>
        <li>Pravo na prenosivost podataka (gdje je primjenjivo).</li>
        <li>Pravo povući privolu u bilo kojem trenutku (ako je primjenjivo).</li>
      </ul>
      <p>
        Za ostvarenje prava javite se na {" "}
        <a href="mailto:ante.kadic@sportsync.hr">ante.kadic@sportsync.hr</a>.
      </p>

      <h2 className={styles.sectionTitle}>8. Pritužbe</h2>
      <p>
        Ako smatrate da obrada nije u skladu s propisima, možete podnijeti pritužbu
        AZOP-u (Agencija za zaštitu osobnih podataka).
      </p>

      <div className={styles.notice}>
        <strong>Napomena:</strong> Ovo je osnovni predložak. Prije javne objave
        preporučeno je uskladiti tekst s točnim podacima o tvrtki (adresa, OIB),
        stvarnim kategorijama podataka i svim integracijama (analytics, push,
        crash reporting, payment, itd.).
      </div>
    </article>
  );
}
