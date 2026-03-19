import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description: "Politika privatnosti za SportSync (Codemem Consulting d.o.o.).",
};

export default function PrivacyPage() {
  return (
    <article className={styles.prose}>
      <h1 className={styles.pageTitle}>Politika privatnosti</h1>
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 14. ožujka 2026.</p>

      <p>
        Ova Politika privatnosti opisuje kako <strong>Codemem Consulting d.o.o.</strong>,
        sa sjedištem u Obedišću, Općina Križ, Republika Hrvatska
        (u daljnjem tekstu: &ldquo;SportSync&rdquo;, &ldquo;mi&rdquo;, &ldquo;nas&rdquo;), prikuplja, obrađuje i
        čuva vaše osobne podatke kada koristite mobilnu aplikaciju SportSync i
        pridruženu web‑stranicu (zajedno: &ldquo;Platforma&rdquo;).
      </p>
      <p>
        Obrada osobnih podataka provodi se u skladu s Uredbom (EU) 2016/679
        Europskog parlamenta i Vijeća (GDPR) i Zakonom o provedbi Opće uredbe o
        zaštiti podataka (NN 42/2018). Preporučujemo da pažljivo pročitate ovaj
        dokument i naše{" "}
        <Link href="/terms">Uvjete korištenja</Link>.
      </p>

      {/* 1 */}
      <h2 className={styles.sectionTitle}>1. Voditelj obrade</h2>
      <p>
        <strong>Codemem Consulting d.o.o.</strong>
        <br />
        Selska ulica 35, Obedišće, Općina Križ, Republika Hrvatska
        <br />
        OIB: 26881262647
        <br />
        E‑mail:{" "}
        <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>
        <br />
        Kontaktni obrazac:{" "}
        <Link href="/contact">contact</Link>
      </p>
      <p>
        SportSync trenutačno nema imenovanog službenika za zaštitu podataka
        (DPO) jer to nije obvezno prema GDPR‑u za našu veličinu i vrstu obrade.
        Za sva pitanja vezana uz privatnost obratite se na gore navedene
        kontakte.
      </p>

      {/* 2 */}
      <h2 className={styles.sectionTitle}>2. Koji osobni podaci se prikupljaju</h2>
      <p>
        Prikupljamo samo podatke koji su nužni za pružanje Platforme ili koji
        su izričito navedeni u nastavku:
      </p>

      <p><strong>2.1. Podaci koje vi izravno pružate</strong></p>
      <ul>
        <li>
          <strong>E‑mail adresa</strong> – za kreiranje računa, prijavu i slanje
          linka za resetiranje lozinke.
        </li>
        <li>
          <strong>Broj mobilnog telefona</strong> – za verifikaciju identiteta
          putem jednokratnog SMS koda (OTP) pri registraciji i promjeni broja.
        </li>
        <li>
          <strong>Godina rođenja</strong> – za provjeru minimalne dobi (16
          godina). Godina rođenja unosi se tijekom registracije i neophodna je
          za pristup Platformi.
        </li>
        <li>
          <strong>Ime i prezime</strong> – za identifikaciju
          unutar Platforme.
        </li>
        <li>
          <strong>Profilna fotografija</strong> – opcionalno; fotografija se
          prikazuje drugim korisnicima.
        </li>
        <li>
          <strong>Sportske preferencije i razina igre</strong> – za
          personalizaciju prikaza termina i ocjenjivanje prema sportu.
        </li>
      </ul>

      <p><strong>2.2. Podaci koji nastaju korištenjem Platforme</strong></p>
      <ul>
        <li>
          <strong>Podaci o terminima</strong> – termini koje ste kreirali
          (Organizator) ili na koje ste se prijavili (Igrač), uključujući
          datum, lokaciju i sport.
        </li>
        <li>
          <strong>Ocjene</strong> – ocjene koje ste dali ili primili od
          korisnika s kojima ste zajedno odigrali termin, vezane uz konkretan
          sport.
        </li>
        <li>
          <strong>Tehnički podaci</strong> – IP adresa, tip uređaja, verzija
          operativnog sustava i aplikacije, token za push obavijesti. Ovi podaci
          prikupljaju se automatski radi ispravnog rada Platforme i sigurnosti.
        </li>
      </ul>

      <p><strong>2.3. Podaci koje NE prikupljamo</strong></p>
      <ul>
        <li>Ne prikupljamo podatke o platnoj kartici niti bilo koje financijske
          podatke (Platforma je trenutačno besplatna).</li>
        <li>Ne prikupljamo podatke o lokaciji uređaja u stvarnom vremenu.</li>
        <li>Ne prikupljamo podatke o zdravlju, biometrijskim značajkama niti
          druge posebne kategorije podataka iz čl. 9. GDPR‑a.</li>
      </ul>

      {/* 3 */}
      <h2 className={styles.sectionTitle}>3. Svrhe obrade i pravne osnove</h2>
      <p>
        Svaki skup podataka obrađujemo isključivo za određenu svrhu i na
        temelju odgovarajuće pravne osnove:
      </p>
      <ul>
        <li>
          <strong>Registracija i autentikacija</strong> (e‑mail, broj mobitela,
          lozinka) – <em>izvršavanje ugovora</em> (čl. 6. st. 1.
          t. b) GDPR‑a). Bez ovih podataka nije moguće kreirati račun.
        </li>
        <li>
          <strong>Provjera minimalne dobi</strong> (godina rođenja) – unosi se
          tijekom registracije; pravna osnova:{" "}
          <em>zakonska obveza</em> (čl. 6. st. 1. t. c) GDPR‑a, u vezi s čl. 8.
          GDPR‑a). Prihvaćanjem Uvjeta pri registraciji korisnik potvrđuje da
          ima najmanje 16 godina.
        </li>
        <li>
          <strong>OTP verifikacija putem SMS‑a</strong> (broj mobitela) – pri
          registraciji i promjeni broja – <em>izvršavanje ugovora i legitimni
          interes</em> zaštite sigurnosti računa.
        </li>
        <li>
          <strong>Reset lozinke putem e‑maila</strong> – <em>izvršavanje
          ugovora</em>; e‑mail se šalje isključivo na vaš zahtjev.
        </li>
        <li>
          <strong>Push obavijesti</strong> (token uređaja) – za informiranje o
          statusu termina (potvrda rezervacije, otkazivanje, novi igrači i sl.) –
          <em>izvršavanje ugovora</em>. Možete isključiti push obavijesti u
          postavkama uređaja.
        </li>
        <li>
          <strong>Prikaz profila i profilne fotografije</strong> – <em>izvršavanje
          ugovora</em>; drugi korisnici vide vaše ime i fotografiju u kontekstu
          termina.
        </li>
        <li>
          <strong>Vidljivost profila u pretraživanju</strong> – ime i prezime,
          profilna fotografija, odabrani sportovi i prosječna ocjena vidljivi su
          svim registriranim korisnicima u rezultatima tražilice. Javni profil
          temeljno je obilježje usluge i neophodan je za povezivanje igrača.
          Pravna osnova: <em>izvršavanje ugovora</em> (čl. 6. st. 1. t. b)
          GDPR‑a). Kontaktni podaci (e‑mail, broj mobitela, godina rođenja)
          nikada nisu vidljivi drugim korisnicima. Do uvođenja postavke
          privatnog profila u aplikaciji, korisnik koji želi biti uklonjen iz
          pretraživanja može to zatražiti putem{" "}
          <Link href="/contact">kontaktnog obrasca</Link>.
        </li>
        <li>
          <strong>Ocjenjivanje</strong> – <em>izvršavanje ugovora i legitimni
          interes</em>; ocjene pomažu korisnicima u donošenju odluka o
          sudjelovanju na terminima.
        </li>
        <li>
          <strong>Poboljšanje Platforme i otklanjanje grešaka</strong> (tehnički
          podaci) – <em>legitimni interes</em> (čl. 6. st. 1. t. f) GDPR‑a);
          koristimo ih samo anonimno ili agregirano gdje je moguće.
        </li>
        <li>
          <strong>Poštivanje zakonskih obveza</strong> (npr. računovodstveni
          zapisi, zahtjevi nadležnih tijela) – <em>zakonska obveza</em> (čl. 6.
          st. 1. t. c) GDPR‑a).
        </li>
      </ul>
      <p>
        Ne koristimo vaše podatke za automatizirano donošenje odluka niti za
        profiliranje koje bi imalo pravne ili slične značajne učinke na vas.
      </p>

      {/* 4 */}
      <h2 className={styles.sectionTitle}>4. Primatelji podataka i izvršitelji obrade</h2>
      <p>
        Vaše podatke dijelimo isključivo s pouzdanim trećim stranama koje su
        neophodne za pružanje Platforme. Sa svakim pružateljem zaključujemo
        ugovor o obradi podataka (DPA) koji osigurava odgovarajuću razinu
        zaštite sukladno GDPR‑u.
      </p>
      <p>Kategorije primatelja uključuju:</p>
      <ul>
        <li>
          <strong>Pružatelji cloud infrastrukture i hostinga</strong> – pohrana
          podataka i isporuka aplikacije.
        </li>
        <li>
          <strong>SMS gateway</strong> – dostava OTP kodova pri registraciji i
          promjeni broja mobitela.
        </li>
        <li>
          <strong>Pružatelj usluge push obavijesti</strong> – dostava push
          obavijesti na vaš uređaj.
        </li>
        <li>
          <strong>Servis za slanje e‑maila</strong> – isporuka e‑maila za reset
          lozinke.
        </li>
        <li>
          <strong>Pohrana datoteka</strong> – pohrana profilnih fotografija.
        </li>
      </ul>
      <p>
        Ne prodajemo, ne iznajmljujemo niti na drugi način komercijalno
        dijelimo vaše osobne podatke s trećim stranama za njihove vlastite
        marketinške svrhe.
      </p>
      <p>
        Možemo dijeliti podatke s nadležnim tijelima ako to zahtijeva zakon ili
        sudski nalog.
      </p>

      {/* 5 */}
      <h2 className={styles.sectionTitle}>5. Prijenos podataka izvan EU/EEA</h2>
      <p>
        Neki od naših pružatelja infrastrukture mogu obrađivati podatke izvan
        Europskog gospodarskog prostora (EGP). U takvim slučajevima prijenos
        provodimo isključivo na temelju odgovarajućih zaštitnih mjera:
      </p>
      <ul>
        <li>
          Odluke Europske komisije o primjerenoj razini zaštite, ili
        </li>
        <li>
          Standardnih ugovornih klauzula (SCC) odobrenih od strane Europske
          komisije.
        </li>
      </ul>
      <p>
        Za popis konkretnih pružatelja i zemalja obrade možete podnijeti zahtjev
        putem <Link href="/contact">kontaktnog obrasca</Link>.
      </p>

      {/* 6 */}
      <h2 className={styles.sectionTitle}>6. Rokovi čuvanja podataka</h2>
      <ul>
        <li>
          <strong>Korisnički račun i profil</strong> (e‑mail, broj mobitela,
          godina rođenja, ime, fotografija, sportske preferencije) – čuvaju se
          dok je račun aktivan. Nakon zatvaranja računa podaci se brišu ili
          anonimiziraju u roku od <strong>30 dana</strong>, osim ako zakon ne
          nalaže dulje čuvanje.
        </li>
        <li>
          <strong>Ocjene</strong> – čuvaju se dok postoji račun ocijenjenog
          korisnika; nakon brisanja računa anonimiziraju se ili brišu.
        </li>
        <li>
          <strong>Tehnički zapisi (logovi)</strong> – do <strong>12 mjeseci</strong>{" "}
          od nastanka, a potom se trajno brišu ili anonimiziraju.
        </li>
        <li>
          <strong>SMS OTP kodovi</strong> – jednokratni kodovi ne pohranjuju se
          trajno; istječu unutar nekoliko minuta od slanja.
        </li>
        <li>
          <strong>Podaci za zakonske obveze</strong> (npr. računovodstvo) –
          sukladno primjenjivim propisima, u pravilu do <strong>7 godina</strong>.
        </li>
        <li>
          <strong>Marketing</strong> – do opoziva privole
          ili odjave.
        </li>
      </ul>

      {/* 7 */}
      <h2 className={styles.sectionTitle}>7. Sigurnost podataka</h2>
      <p>
        Primjenjujemo odgovarajuće tehničke i organizacijske mjere zaštite, uključujući:
      </p>
      <ul>
        <li>TLS enkripciju pri svakom prijenosu podataka između aplikacije i poslužitelja.</li>
        <li>Hashiranje lozinki – lozinke se nikada ne pohranjuju u čitljivom obliku.</li>
        <li>Višestruku verifikaciju identiteta (OTP putem SMS‑a) pri registraciji i osjetljivim promjenama.</li>
        <li>Kontrolu pristupa podacima – zaposlenici i suradnici imaju pristup samo podacima koji su im nužni za obavljanje posla.</li>
        <li>Redovite sigurnosne preglede koda i infrastrukture.</li>
      </ul>
      <p>
        Unatoč primijenjenim mjerama, nijedan sustav nije potpuno siguran. U
        slučaju sigurnosnog incidenta koji bi mogao ugroziti vaše podatke,
        obavijestit ćemo vas i nadležno nadzorno tijelo (AZOP) u rokovima
        propisanim GDPR‑om.
      </p>

      {/* 8 */}
      <h2 className={styles.sectionTitle}>8. Kolačići i slične tehnologije</h2>
      <p>
        Web‑stranica sportsync.hr koristi samo tehničke kolačiće neophodne za
        njezino ispravno funkcioniranje i ne koristi kolačiće za praćenje
        posjetitelja niti analitiku trećih strana. Detalji su opisani u našoj{" "}
        <Link href="/cookies">Politici kolačića</Link>.
      </p>
      <p>
        Mobilna aplikacija ne koristi kolačiće, već lokalno pohranjuje
        autentikacijski token na vašem uređaju isključivo radi održavanja
        prijavljene sesije.
      </p>

      {/* 9 */}
      <h2 className={styles.sectionTitle}>9. Maloljetnici</h2>
      <p>
        Platforma je namijenjena osobama starijim od <strong>16 godina</strong>.
        Godinu rođenja prikupljamo pri registraciji isključivo radi provjere
        ispunjenja ovog uvjeta. Ne prikupljamo svjesno osobne podatke osoba
        mlađih od 16 godina.
      </p>
      <p>
        Ako posumnjate da je osoba mlađa od 16 godina registrirala račun ili
        ako ste roditelj/skrbnik i primijetili ste da vaše dijete koristi
        Platformu, molimo vas da nas odmah kontaktirate putem{" "}
        <Link href="/contact">kontaktnog obrasca</Link>. Takve ćemo račune
        odmah zatvoriti i obrisati sve povezane osobne podatke.
      </p>

      {/* 10 */}
      <h2 className={styles.sectionTitle}>10. Vaša prava kao ispitanika</h2>
      <p>
        Sukladno GDPR‑u, imate sljedeća prava u pogledu vaših osobnih podataka:
      </p>
      <ul>
        <li>
          <strong>Pravo na pristup</strong> – možete zatražiti potvrdu obrađujemo
          li vaše podatke i kopiju tih podataka.
        </li>
        <li>
          <strong>Pravo na ispravak</strong> – možete zahtijevati ispravak
          netočnih ili dopunu nepotpunih podataka. Mnoge podatke možete sami
          izmijeniti u postavkama profila.
        </li>
        <li>
          <strong>Pravo na brisanje (&ldquo;pravo na zaborav&rdquo;)</strong> – možete
          zatražiti brisanje računa i svih osobnih podataka. Detalje pogledajte
          na stranici{" "}
          <Link href="/delete-account">Brisanje računa</Link>.
        </li>
        <li>
          <strong>Pravo na ograničenje obrade</strong> – u određenim slučajevima
          možete zahtijevati da obustavimo obradu vaših podataka.
        </li>
        <li>
          <strong>Pravo na prigovor</strong> – možete se protiviti obradi
          temeljenoj na legitimnom interesu. Ako se protivite vidljivosti
          vašeg profila u pretraživanju (koja se temelji na izvršavanju ugovora),
          možete zatražiti uklanjanje iz tražilice putem{" "}
          <Link href="/contact">kontaktnog obrasca</Link> — obradit ćemo zahtjev
          u roku od <strong>5 radnih dana</strong>.
        </li>
        <li>
          <strong>Pravo na prenosivost podataka</strong> – možete zatražiti
          kopiju podataka u strojno čitljivom formatu, gdje je primjenjivo.
        </li>
        <li>
          <strong>Pravo na povlačenje privole</strong> – gdje se obrada temelji
          na privoli, možete je povući u bilo koje vrijeme bez utjecaja na
          zakonitost prethodne obrade.
        </li>
      </ul>
      <p>
        Zahtjeve za ostvarenje prava podnesite putem{" "}
        <Link href="/contact">kontaktnog obrasca</Link>.
        Odgovorit ćemo u roku od <strong>30 dana</strong> od primitka zahtjeva
        (uz mogućnost produženja za složene slučajeve, o čemu ćemo vas
        obavijestiti).
      </p>

      {/* 11 */}
      <h2 className={styles.sectionTitle}>11. Pritužba nadzornom tijelu</h2>
      <p>
        Ako smatrate da obrada vaših osobnih podataka krši GDPR ili primjenjive
        propise, imate pravo podnijeti pritužbu nadležnom nadzornom tijelu:
      </p>
      <p>
        <strong>Agencija za zaštitu osobnih podataka (AZOP)</strong>
        <br />
        Ulica Metela Ožegovića 16, 10 000 Zagreb
        <br />
        Web:{" "}
        <a
          href="https://azop.hr"
          target="_blank"
          rel="noopener noreferrer"
        >
          azop.hr
        </a>
        <br />
        E‑mail:{" "}
        <a href="mailto:azop@azop.hr">azop@azop.hr</a>
      </p>
      <p>
        Molimo vas da nas prije podnošenja pritužbe kontaktirate kako bismo
        pokušali riješiti vaš upit izravno.
      </p>

      {/* 12 */}
      <h2 className={styles.sectionTitle}>12. Automatizirano donošenje odluka i profiliranje</h2>
      <p>
        SportSync ne koristi automatizirane sustave koji bi donosili pravno
        obvezujuće odluke ili odluke koje imaju značajan utjecaj na vas bez
        ljudske intervencije. Preporuke termina i prikaz sadržaja temelje se na
        vašim postavljenim preferencijama, a ne na automatiziranom profiliranju.
      </p>

      {/* 13 */}
      <h2 className={styles.sectionTitle}>13. Budući plaćeni sadržaj</h2>
      <p>
        Platforma je trenutačno besplatna. Kada u budućnosti budu uvedeni
        pretplatni planovi, ova Politika privatnosti bit će ažurirana s
        informacijama o obradi podataka vezanih uz plaćanje (npr. kontakt s
        pružateljem platnih usluga). Podaci o platnoj kartici nikada neće biti
        pohranjeni na poslužiteljima SportSync‑a.
      </p>

      {/* 14 */}
      <h2 className={styles.sectionTitle}>14. Izmjene Politike privatnosti</h2>
      <p>
        Ovu Politiku privatnosti možemo povremeno ažurirati kako bi odražavala
        promjene u načinu rada Platforme ili zakonodavnim zahtjevima. O
        značajnim izmjenama obavijestit ćemo vas putem push obavijesti i/ili
        e‑maila najkasnije <strong>15 dana</strong> prije stupanja izmjena na
        snagu. Nova verzija bit će objavljena na ovoj stranici s ažuriranim
        datumom &ldquo;Zadnje ažuriranje&rdquo;.
      </p>
      <p>
        Nastavak korištenja Platforme nakon stupanja izmjena na snagu smatra
        se prihvaćanjem ažurirane Politike privatnosti.
      </p>

      {/* 15 */}
      <h2 className={styles.sectionTitle}>15. Kontakt</h2>
      <p>
        Za sva pitanja, prigovore ili zahtjeve vezane uz obradu osobnih podataka
        obratite nam se putem{" "}
        <Link href="/contact">kontaktnog obrasca</Link> ili emailom na{" "}
        <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>.
      </p>
    </article>
  );
}
