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
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 26. lipnja 2026.</p>

      <p>
        Ova Politika privatnosti opisuje kako <strong>Codemem Consulting d.o.o.</strong>,
        sa sjedištem u Obedišću, Općina Križ, Republika Hrvatska
        (u daljnjem tekstu: &ldquo;SportSync&rdquo;, &ldquo;mi&rdquo;, &ldquo;nas&rdquo;), prikuplja, obrađuje i
        čuva vaše osobne podatke kada koristite mobilnu aplikaciju SportSync i
        pridruženu web-stranicu (zajedno: &ldquo;Platforma&rdquo;).
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
        E-mail:{" "}
        <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>
        <br />
        Kontaktni obrazac:{" "}
        <Link href="/contact">contact</Link>
      </p>
      <p>
        Za sva pitanja vezana uz privatnost, obradu osobnih podataka ili
        ostvarivanje vaših prava možete nam se obratiti na{" "}
        <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>{" "}
        ili putem <Link href="/contact">kontaktnog obrasca</Link>.
      </p>

      {/* 2 */}
      <h2 className={styles.sectionTitle}>2. Koji osobni podaci se prikupljaju</h2>
      <p>
        Prikupljamo samo podatke koji su nužni za pružanje Platforme ili koji
        su izričito navedeni u nastavku.
      </p>

      <p><strong>2.1. Podaci koje vi izravno pružate</strong></p>
      <ul>
        <li>
          <strong>E-mail adresa</strong> – za kreiranje računa, prijavu i slanje
          linka za resetiranje lozinke.
        </li>
        <li>
          <strong>Broj mobilnog telefona</strong> – za verifikaciju identiteta
          putem jednokratnog SMS koda (OTP) pri registraciji i promjeni broja.
        </li>
        <li>
          <strong>Godina rođenja</strong> – za provjeru minimalne dobi od 16
          godina. Godina rođenja unosi se tijekom registracije i neophodna je
          za pristup Platformi.
        </li>
        <li>
          <strong>Ime i prezime</strong> – za identifikaciju unutar Platforme.
        </li>
        <li>
          <strong>Profilna fotografija</strong> – opcionalno; fotografija se
          prikazuje drugim korisnicima.
        </li>
        <li>
          <strong>Sportske preferencije i razina igre</strong> – za
          personalizaciju prikaza termina i ocjenjivanje prema sportu.
        </li>
        <li>
          <strong>Sigurnosne i komunikacijske postavke</strong> – podaci o
          blokiranim korisnicima, utišanim DM razgovorima i utišanim chatovima
          Termina te prijave korisnika ili pojedinačnih poruka koje nam
          podnosite.
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
          <strong>Podaci o Sezonama</strong> – pripadajući nogometni Termin,
          početak i završetak Sezone, administratori i sudionici Termina,
          utakmice, ekipe, rezultati, poredak i statistika. Aktivnoj i završenim
          Sezonama pristupaju sudionici pripadajućeg Termina; završene Sezone
          prikazuju se u načinu samo za čitanje.
        </li>
        <li>
          <strong>Podaci o kupnji</strong> – Apple transaction ID i original
          transaction ID odnosno Google order ID, identifikator proizvoda,
          trgovina i platforma kupnje, datum i vrijeme kupnje, status kupnje,
          povrata ili opoziva, interni identifikator SportSync korisnika te
          identifikator Termina uz koji je kupnja vezana.
        </li>
        <li>
          <strong>Ocjene</strong> – ocjene koje ste dali ili primili od
          korisnika s kojima ste zajedno odigrali termin, vezane uz konkretan
          sport.
        </li>
        <li>
          <strong>Chat podaci</strong> – sadržaj DM poruka i poruka u chatovima
          Termina, identitet pošiljatelja i primatelja odnosno članova chata,
          pripadajući Termin, vrijeme slanja te podaci povezani s blokiranjem,
          utišavanjem i prijavama unutar chata.
        </li>
        <li>
          <strong>Tehnički podaci</strong> – IP adresa, tip uređaja, verzija
          operativnog sustava i aplikacije, token za push obavijesti. Ovi podaci
          prikupljaju se automatski radi ispravnog rada Platforme, sigurnosti i
          otklanjanja grešaka.
        </li>
        <li>
          <strong>Analitički podaci web-stranice</strong> – uz vašu privolu,
          putem Google Analytics prikupljamo anonimizirane podatke o korištenju
          web-stranice: posjećene stranice, trajanje posjeta, vrsta preglednika
          i uređaja te približna geografska lokacija. IP adresa se anonimizira
          prije obrade.
        </li>
      </ul>

      <p>
        Chat poruke nisu end-to-end enkriptirane. SportSync može pristupiti i
        pročitati poruke kada je to nužno za isporuku funkcionalnosti chata,
        korisničku podršku, sigurnost računa, ručnu obradu prijava i
        sprječavanje zlouporaba.
      </p>

      <p><strong>2.3. Podaci koje ne prikupljamo</strong></p>
      <ul>
        <li>
          Ne prikupljamo niti pohranjujemo broj platne kartice, podatke o
          bankovnom računu, sigurnosni kod kartice ni druge vjerodajnice za
          plaćanje. Te podatke obrađuju Apple odnosno Google u skladu sa svojim
          pravilima i politikama privatnosti.
        </li>
        <li>Ne prikupljamo podatke o lokaciji uređaja u stvarnom vremenu.</li>
        <li>
          Ne prikupljamo podatke o zdravlju, biometrijskim značajkama niti
          druge posebne kategorije podataka iz čl. 9. GDPR-a.
        </li>
      </ul>

      {/* 3 */}
      <h2 className={styles.sectionTitle}>3. Zašto obrađujemo podatke i na kojoj osnovi</h2>
      <p>
        Vaše podatke obrađujemo samo kada za to imamo jasan razlog i
        odgovarajuću pravnu osnovu prema GDPR-u. U nastavku objašnjavamo za što
        koristimo pojedine podatke.
      </p>
      <p>
        Kada u ovoj Politici koristimo izraz <strong>&ldquo;izvršavanje ugovora&rdquo;</strong>,
        to ne znači da s nama potpisujete poseban papirnati ugovor. To znači da
        određene podatke moramo obraditi kako bismo vam mogli pružiti uslugu
        koju koristite putem SportSync aplikacije, u skladu s našim{" "}
        <Link href="/terms">Uvjetima korištenja</Link>. Primjerice, bez e-mail
        adrese nije moguće kreirati račun, bez podataka o Terminu nije moguće
        organizirati Termin, a bez podataka o kupnji nije moguće aktivirati
        kupljenu funkcionalnost.
      </p>

      <ul>
        <li>
          <strong>Registracija, prijava i upravljanje računom</strong> –
          koristimo e-mail adresu, broj mobitela, lozinku i povezane sigurnosne
          podatke kako bismo vam omogućili kreiranje računa, prijavu, reset
          lozinke i zaštitu računa. Pravna osnova je{" "}
          <em>izvršavanje ugovora</em>, a za sigurnosne mjere i naš{" "}
          <em>legitimni interes</em>.
        </li>
        <li>
          <strong>Provjera minimalne dobi</strong> – godinu rođenja koristimo
          kako bismo provjerili da Platformu koriste osobe koje ispunjavaju
          minimalni dobni uvjet od 16 godina. Pravna osnova je{" "}
          <em>izvršavanje ugovora</em> i naš <em>legitimni interes</em> da
          ograničenje Platforme provodimo dosljedno i zaštitimo maloljetnike od
          neprimjerenog korištenja.
        </li>
        <li>
          <strong>OTP verifikacija putem SMS-a</strong> – broj mobitela
          koristimo za dostavu jednokratnog SMS koda pri registraciji i promjeni
          broja. Pravna osnova je <em>izvršavanje ugovora</em> i naš{" "}
          <em>legitimni interes</em> zaštite sigurnosti računa.
        </li>
        <li>
          <strong>Reset lozinke putem e-maila</strong> – e-mail adresu koristimo
          za slanje linka za reset lozinke isključivo na vaš zahtjev. Pravna
          osnova je <em>izvršavanje ugovora</em>.
        </li>
        <li>
          <strong>Push obavijesti</strong> – token uređaja koristimo za slanje
          obavijesti o statusu Termina, zahtjevima za pridruživanje, novim chat
          porukama i sličnim događajima unutar Platforme. Pravna osnova je{" "}
          <em>izvršavanje ugovora</em>. Push obavijesti možete isključiti u
          postavkama uređaja.
        </li>
        <li>
          <strong>Termini, rezervacije i sudjelovanje</strong> – podatke o
          Terminima koristimo kako bismo omogućili kreiranje Termina, prijavu
          igrača, prihvaćanje ili odbijanje zahtjeva, otkazivanje Termina i
          prikaz sudionika. Pravna osnova je <em>izvršavanje ugovora</em>.
        </li>
        <li>
          <strong>DM chat i chatovi Termina</strong> – sadržaj poruka i podatke
          o sudionicima razgovora koristimo kako bismo omogućili komunikaciju
          među korisnicima unutar Platforme. Pravna osnova je{" "}
          <em>izvršavanje ugovora</em>.
        </li>
        <li>
          <strong>Blokiranje i utišavanje</strong> – vaše sigurnosne i
          komunikacijske postavke koristimo kako bismo primijenili blokiranje
          korisnika, utišavanje DM razgovora i utišavanje chatova Termina.
          Pravna osnova je <em>izvršavanje ugovora</em>.
        </li>
        <li>
          <strong>Prijava korisnika i poruka te ručna moderacija</strong> –
          prijave i povezane podatke koristimo radi zaštite korisnika,
          sprječavanja zlouporaba, provedbe Uvjeta korištenja te postavljanja,
          ostvarivanja ili obrane pravnih zahtjeva. Pravna osnova je naš{" "}
          <em>legitimni interes</em>.
        </li>
        <li>
          <strong>Prikaz profila i profilne fotografije</strong> – ime, prezime
          i profilnu fotografiju koristimo kako bi vas drugi korisnici mogli
          prepoznati u kontekstu Termina, pretraživanja i komunikacije unutar
          Platforme. Pravna osnova je <em>izvršavanje ugovora</em>.
        </li>
        <li>
          <strong>Vidljivost profila u pretraživanju</strong> – ime i prezime,
          profilna fotografija, odabrani sportovi i prosječna ocjena mogu biti
          vidljivi registriranim korisnicima u rezultatima pretraživanja i na
          pregledu Termina. Kontaktni podaci nikada nisu vidljivi drugim
          korisnicima. Pravna osnova je <em>izvršavanje ugovora</em>. Do
          uvođenja postavke privatnog profila zahtjev za uklanjanje iz
          pretraživanja možete poslati putem{" "}
          <Link href="/contact">kontaktnog obrasca</Link>.
        </li>
        <li>
          <strong>Ocjenjivanje korisnika</strong> – ocjene koristimo kako bi
          korisnici mogli steći bolji dojam o iskustvu igranja s drugim
          korisnicima i lakše odlučiti o sudjelovanju na Terminima. Pravna
          osnova je <em>izvršavanje ugovora</em> i naš <em>legitimni interes</em>.
        </li>
        <li>
          <strong>Vođenje i prikaz nogometnih Sezona</strong> – podatke o
          ekipama, utakmicama, rezultatima, poretku i statistici koristimo kako
          bismo omogućili kupljenu funkcionalnost svim sudionicima pripadajućeg
          nogometnog Termina. Pravna osnova je <em>izvršavanje ugovora</em>.
        </li>
        <li>
          <strong>Provjera i aktivacija kupnje</strong> – podatke o transakciji
          koristimo radi potvrde kupnje, aktivacije Jednogodišnje sezone,
          povezivanja kupnje s konkretnim Terminom, sinkronizacije pristupa
          između iOS i Android uređaja te postupanja u slučaju povrata ili
          opoziva. Pravna osnova je <em>izvršavanje ugovora</em>.
        </li>
        <li>
          <strong>Sprječavanje prijevara, rješavanje reklamacija i zaštita
            pravnih zahtjeva</strong> – transakcijske i povezane tehničke podatke
          koristimo kako bismo spriječili zlouporabe, riješili reklamacije,
          provjerili status kupnje i zaštitili svoja prava ili prava korisnika.
          Pravna osnova je naš <em>legitimni interes</em> i, kada je primjenjivo,
          ispunjavanje <em>zakonskih obveza</em>.
        </li>
        <li>
          <strong>Poboljšanje Platforme i otklanjanje grešaka</strong> –
          tehničke podatke koristimo za održavanje stabilnosti aplikacije,
          otkrivanje problema, sigurnost i poboljšanje korisničkog iskustva.
          Pravna osnova je naš <em>legitimni interes</em>. Gdje je moguće,
          podatke koristimo anonimno ili agregirano.
        </li>
        <li>
          <strong>Analitika web-stranice</strong> – analitičke kolačiće Google
          Analytics koristimo samo ako ste za to dali privolu putem bannera za
          kolačiće. Pravna osnova je <em>privola</em>, koju možete povući u bilo
          kojem trenutku brisanjem ili promjenom postavki kolačića u pregledniku.
        </li>
        <li>
          <strong>Poštivanje zakonskih obveza</strong> – određene podatke možemo
          obrađivati kada je to potrebno radi računovodstvenih evidencija,
          postupanja po zahtjevima nadležnih tijela ili drugih zakonskih
          obveza. Pravna osnova je <em>zakonska obveza</em>.
        </li>
      </ul>

      <p>
        Ne koristimo vaše podatke za automatizirano donošenje odluka niti za
        profiliranje koje bi imalo pravne ili slične značajne učinke na vas.
      </p>

      {/* 4 */}
      <h2 className={styles.sectionTitle}>4. Primatelji podataka i pružatelji usluga</h2>
      <p>
        Podatke dijelimo samo u opsegu potrebnom za rad Platforme, obradu
        kupnje, sigurnost i ispunjavanje zakonskih obveza. Uloga pojedinog
        primatelja ovisi o konkretnoj obradi: neki pružatelji djeluju kao naši
        izvršitelji obrade, dok Apple, Google ili drugi pružatelj za dio obrade
        može djelovati kao samostalni voditelj obrade prema svojim uvjetima i
        pravilima privatnosti.
      </p>
      <p>Kategorije primatelja uključuju:</p>
      <ul>
        <li>
          <strong>Pružatelji cloud infrastrukture i hostinga</strong> – pohrana
          podataka i isporuka aplikacije.
        </li>
        <li><strong>SMS gateway</strong> – dostava OTP kodova.</li>
        <li>
          <strong>Pružatelj usluge push obavijesti</strong> – dostava push
          obavijesti na vaš uređaj.
        </li>
        <li>
          <strong>Servis za slanje e-maila</strong> – isporuka e-maila za reset
          lozinke i drugih nužnih obavijesti.
        </li>
        <li><strong>Pohrana datoteka</strong> – pohrana profilnih fotografija.</li>
        <li>
          <strong>Apple</strong> – obrada kupnje na iOS-u, naplata, potvrda
          transakcije, izdavanje potvrde o kupnji i postupanje po zahtjevima za
          povrat prema Appleovim pravilima.
        </li>
        <li>
          <strong>Google</strong> – obrada kupnje na Androidu, naplata, potvrda
          transakcije, izdavanje potvrde o kupnji i postupanje po zahtjevima za
          povrat prema pravilima Google Playa.
        </li>
        <li>
          <strong>RevenueCat, Inc.</strong> – tehnička provjera i upravljanje
          statusom kupnje. RevenueCatu se dostavljaju interni identifikator
          korisnika i podaci o kupnji/računu trgovine potrebni za potvrdu
          transakcije, ali ne dostavljamo korisnikovo ime, e-mail adresu, broj
          mobitela ni podatke o platnoj kartici.
        </li>
        <li>
          <strong>Google Ireland Limited</strong> (Google Analytics) – analitika
          web-stranice, isključivo uz vašu privolu.
        </li>
      </ul>
      <p>
        Ne prodajemo, ne iznajmljujemo niti komercijalno dijelimo osobne
        podatke s trećim stranama za njihove vlastite marketinške svrhe.
      </p>
      <p>
        Chat poruke pohranjujemo unutar naše serverske infrastrukture. Ne
        koristimo zasebnog vanjskog pružatelja chat usluge, ali pružatelji
        hostinga mogu djelovati kao izvršitelji obrade u mjeri nužnoj za rad
        Platforme.
      </p>
      <p>
        Podatke možemo dostaviti nadležnim tijelima kada je to propisano
        zakonom, potrebno za postupanje po obvezujućem zahtjevu ili radi
        postavljanja, ostvarivanja ili obrane pravnih zahtjeva.
      </p>

      {/* 5 */}
      <h2 className={styles.sectionTitle}>5. Prijenos podataka izvan EU/EEA</h2>
      <p>
        Pojedini pružatelji, uključujući pružatelje cloud infrastrukture,
        Google Analytics, Apple, Google i RevenueCat, mogu obrađivati podatke
        izvan Europskog gospodarskog prostora (EGP), osobito u Sjedinjenim
        Američkim Državama. Kada smo mi odgovorni za takav prijenos, osiguravamo
        odgovarajući mehanizam zaštite, primjerice:
      </p>
      <ul>
        <li>
          odluku Europske komisije o primjerenoj razini zaštite, uključujući
          EU-U.S. Data Privacy Framework kada je primjenjiv, ili
        </li>
        <li>
          standardne ugovorne klauzule (SCC) Europske komisije i, prema
          potrebi, dodatne zaštitne mjere.
        </li>
      </ul>
      <p>
        Apple i Google za obrade koje provode kao samostalni voditelji primjenjuju
        vlastite mehanizme međunarodnog prijenosa opisane u njihovim pravilima
        privatnosti. Za dodatne informacije možete nam se obratiti putem{" "}
        <Link href="/contact">kontaktnog obrasca</Link>.
      </p>

      {/* 6 */}
      <h2 className={styles.sectionTitle}>6. Rokovi čuvanja podataka</h2>
      <ul>
        <li>
          <strong>Korisnički račun i profil</strong> – čuvaju se dok je račun
          aktivan. Nakon zatvaranja računa podaci se brišu ili anonimiziraju u
          roku od <strong>30 dana</strong>, osim podataka koje moramo ili smijemo
          dulje čuvati radi zakonskih obveza, prijevara, reklamacija ili pravnih
          zahtjeva.
        </li>
        <li>
          <strong>Podaci o aktivnoj i završenim Sezonama</strong> – čuvaju se
          dok postoji pripadajući Termin kako bi sudionici mogli pregledavati
          aktivnu Sezonu i arhivu završenih Sezona. Brisanjem Termina uklanjaju
          se podaci Sezona povezani s tim Terminom, osim transakcijskih zapisa
          koji se čuvaju prema zasebnim rokovima u nastavku.
        </li>
        <li>
          <strong>Transakcijski i računovodstveni podaci</strong> – podaci
          potrebni kao knjigovodstvena dokumentacija čuvaju se najmanje{" "}
          <strong>11 godina</strong>, računajući od zadnjeg dana poslovne godine
          na koju se odnose. Podaci potrebni za provjeru kupnje, povrata,
          sprječavanje prijevara, reklamacije i pravne zahtjeve mogu se čuvati
          tijekom tog razdoblja ili dulje ako je to nužno zbog postupka koji je
          u tijeku ili druge zakonske obveze.
        </li>
        <li>
          <strong>Ocjene</strong> – čuvaju se dok postoji račun ocijenjenog
          korisnika; nakon brisanja računa anonimiziraju se ili brišu.
        </li>
        <li>
          <strong>DM poruke i poruke u chatovima Termina</strong> – najdulje{" "}
          <strong>3 mjeseca</strong> od slanja, osim ako je dulje čuvanje
          potrebno radi prijave, sprječavanja zlouporaba ili pravnih obveza.
        </li>
        <li>
          <strong>Prijave, blokiranja, utišavanja i sigurnosni zapisi</strong> –
          dok je potrebno za provedbu postavki, obradu prijave, zaštitu prava i
          sprječavanje zlouporaba.
        </li>
        <li>
          <strong>Tehnički zapisi (logovi)</strong> – do{" "}
          <strong>12 mjeseci</strong>, nakon čega se brišu ili anonimiziraju,
          osim ako su potrebni za istragu incidenta ili pravni zahtjev.
        </li>
        <li>
          <strong>SMS OTP kodovi</strong> – ne pohranjuju se trajno i istječu
          unutar nekoliko minuta od slanja.
        </li>
      </ul>

      {/* 7 */}
      <h2 className={styles.sectionTitle}>7. Sigurnost podataka</h2>
      <p>
        Primjenjujemo odgovarajuće tehničke i organizacijske mjere zaštite,
        uključujući:
      </p>
      <ul>
        <li>TLS enkripciju pri svakom prijenosu podataka između aplikacije i poslužitelja.</li>
        <li>Hashiranje lozinki – lozinke se nikada ne pohranjuju u čitljivom obliku.</li>
        <li>Višestruku verifikaciju identiteta (OTP putem SMS-a) pri registraciji i osjetljivim promjenama.</li>
        <li>Kontrolu pristupa chat porukama – pristup sadržaju poruka imaju samo ovlaštene osobe kada je to nužno za podršku, sigurnost i ručnu obradu prijava.</li>
        <li>Kontrolu pristupa podacima – zaposlenici i suradnici imaju pristup samo podacima koji su im nužni za obavljanje posla.</li>
        <li>Redovite sigurnosne preglede koda i infrastrukture.</li>
        <li>Serversku provjeru statusa kupnje i povrata putem RevenueCata prije omogućavanja ili nastavka pristupa Sezoni.</li>
      </ul>
      <p>
        Unatoč primijenjenim mjerama, nijedan sustav nije potpuno siguran. U
        slučaju sigurnosnog incidenta koji bi mogao ugroziti vaše podatke,
        obavijestit ćemo vas i nadležno nadzorno tijelo (AZOP) u rokovima
        propisanim GDPR-om.
      </p>
      <p>
        Iako chat poruke štitimo tijekom prijenosa i pohrane primjenom
        odgovarajućih sigurnosnih mjera, one nisu end-to-end enkriptirane.
      </p>

      {/* 8 */} <h2 className={styles.sectionTitle}>8. Kolačići i slične tehnologije</h2> <p> Web-stranica sportsync.hr koristi tehničke kolačiće neophodne za njezino ispravno funkcioniranje te, uz vašu izričitu privolu, analitičke kolačiće (Google Analytics) za poboljšanje korisničkog iskustva. Analitički kolačići postavljaju se tek nakon što prihvatite banner za kolačiće pri prvom posjetu. Detalji su opisani u našoj{" "} <Link href="/cookies">Politici kolačića</Link>. </p> <p> Mobilna aplikacija ne koristi kolačiće, već lokalno pohranjuje autentikacijski token na vašem uređaju isključivo radi održavanja prijavljene sesije. </p> {/* 9 */} <h2 className={styles.sectionTitle}>9. Maloljetnici</h2> <p> Platforma je namijenjena osobama starijim od <strong>16 godina</strong>. Godinu rođenja prikupljamo pri registraciji isključivo radi provjere ispunjenja ovog uvjeta. Ne prikupljamo svjesno osobne podatke osoba mlađih od 16 godina. </p> <p> Ako posumnjate da je osoba mlađa od 16 godina registrirala račun ili ako ste roditelj/skrbnik i primijetili ste da vaše dijete koristi Platformu, molimo vas da nas odmah kontaktirate putem{" "} <Link href="/contact">kontaktnog obrasca</Link>. Takve ćemo račune zatvoriti i obrisati povezane osobne podatke, osim ako postoji zakonska obveza ili opravdan razlog za privremeno čuvanje određenih podataka. </p> {/* 10 */} <h2 className={styles.sectionTitle}>10. Vaša prava kao ispitanika</h2> <p> Sukladno GDPR-u, imate sljedeća prava u pogledu vaših osobnih podataka: </p> <ul> <li> <strong>Pravo na pristup</strong> – možete zatražiti potvrdu obrađujemo li vaše podatke i kopiju tih podataka. </li> <li> <strong>Pravo na ispravak</strong> – možete zahtijevati ispravak netočnih ili dopunu nepotpunih podataka. Mnoge podatke možete sami izmijeniti u postavkama profila. </li> <li> <strong>Pravo na brisanje (&ldquo;pravo na zaborav&rdquo;)</strong> – možete zatražiti brisanje računa i svih osobnih podataka. Detalje pogledajte na stranici{" "} <Link href="/delete-account">Brisanje računa</Link>. Imajte na umu da se ranije poslane chat poruke i transakcijski podaci koje moramo zadržati radi zakonskih obveza, reklamacija, prijevara ili pravnih zahtjeva ne moraju obrisati odmah; na njih se primjenjuju rokovi iz čl. 6 ove Politike. </li> <li> <strong>Pravo na ograničenje obrade</strong> – u određenim slučajevima možete zahtijevati da obustavimo obradu vaših podataka. </li> <li> <strong>Pravo na prigovor</strong> – možete se protiviti obradi temeljenoj na legitimnom interesu. Ako se protivite vidljivosti vašeg profila u pretraživanju, možete zatražiti uklanjanje iz tražilice putem{" "} <Link href="/contact">kontaktnog obrasca</Link> — obradit ćemo zahtjev u roku od <strong>5 radnih dana</strong>. </li> <li> <strong>Pravo na prenosivost podataka</strong> – možete zatražiti kopiju podataka u strojno čitljivom formatu, gdje je primjenjivo. </li> <li> <strong>Pravo na povlačenje privole</strong> – gdje se obrada temelji na privoli, možete je povući u bilo koje vrijeme bez utjecaja na zakonitost prethodne obrade. </li> </ul> <p> Zahtjeve za ostvarenje prava podnesite putem{" "} <Link href="/contact">kontaktnog obrasca</Link>. Odgovorit ćemo u roku od <strong>30 dana</strong> od primitka zahtjeva (uz mogućnost produženja za složene slučajeve, o čemu ćemo vas obavijestiti). </p> {/* 11 */} <h2 className={styles.sectionTitle}>11. Pritužba nadzornom tijelu</h2> <p> Ako smatrate da obrada vaših osobnih podataka krši GDPR ili primjenjive propise, imate pravo podnijeti pritužbu nadležnom nadzornom tijelu: </p> <p> <strong>Agencija za zaštitu osobnih podataka (AZOP)</strong> <br /> Ulica Metela Ožegovića 16, 10 000 Zagreb <br /> Web:{" "} <a href="https://azop.hr" target="_blank" rel="noopener noreferrer" > azop.hr </a> <br /> E-mail:{" "} <a href="mailto:azop@azop.hr">azop@azop.hr</a> </p> <p> Molimo vas da nas prije podnošenja pritužbe kontaktirate kako bismo pokušali riješiti vaš upit izravno. </p> {/* 12 */} <h2 className={styles.sectionTitle}>12. Automatizirano donošenje odluka i profiliranje</h2> <p> SportSync ne koristi automatizirane sustave koji bi donosili pravno obvezujuće odluke ili odluke koje imaju značajan utjecaj na vas bez ljudske intervencije. Preporuke termina i prikaz sadržaja temelje se na vašim postavljenim preferencijama, a ne na automatiziranom profiliranju koje bi imalo pravne ili slične značajne učinke. </p> {/* 13 */} <h2 className={styles.sectionTitle}>13. Kupnje unutar aplikacije</h2> <p> Za nogometne Termine Platforma omogućuje jednokratnu kupnju proizvoda &ldquo;Jednogodišnja sezona&rdquo;. Kupnju obrađuje Apple App Store na iOS-u odnosno Google Play na Androidu, a RevenueCat se koristi za tehničku provjeru statusa kupnje i povrata. </p> <p> SportSync ne prima podatke o platnoj kartici ni bankovnom računu. Primamo samo tehničke i transakcijske podatke navedene u čl. 2 ove Politike, koji su potrebni za vezivanje kupnje uz konkretni Termin, omogućavanje pristupa, sinkronizaciju između platformi te postupanje u slučaju povrata ili opoziva. </p> <p> Ako Apple ili Google odobri povrat odnosno opozove transakciju, RevenueCat nam može dostaviti promijenjeni status kupnje. Tada se uređivanje Sezone povezane s tom transakcijom prekida u skladu s Uvjetima korištenja. Zasebna, kasnija valjana kupnja za novu Sezonu nije pogođena opozivom prethodne transakcije. </p> {/* 14 */} <h2 className={styles.sectionTitle}>14. Izmjene Politike privatnosti</h2> <p> Ovu Politiku možemo povremeno ažurirati radi promjena Platforme, pružatelja usluga ili pravnih zahtjeva. Nova verzija bit će objavljena na ovoj stranici s ažuriranim datumom &ldquo;Zadnje ažuriranje&rdquo;. </p> <p> Kada je to potrebno prema primjenjivim propisima ili kada izmjena može značajno utjecati na vaše interese, obavijestit ćemo vas prije njezina stupanja na snagu. Izmjene koje opisuju novu, opcionalnu funkcionalnost mogu stupiti na snagu istodobno s objavom te funkcionalnosti. Ova Politika služi kao obavijest o obradi osobnih podataka; pravna osnova obrade ne temelji se samo na nastavku korištenja Platforme. </p> {/* 15 */} <h2 className={styles.sectionTitle}>15. Kontakt</h2> <p> Za sva pitanja, prigovore ili zahtjeve vezane uz obradu osobnih podataka obratite nam se putem{" "} <Link href="/contact">kontaktnog obrasca</Link> ili emailom na{" "} <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>. </p> </article>
  );
}
