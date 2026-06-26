import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Uvjeti korištenja",
  description: "Uvjeti korištenja za SportSync.",
};

export default function TermsPage() {
  return (
    <article className={styles.prose}>
      <h1 className={styles.pageTitle}>Uvjeti korištenja</h1>
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 26. lipnja 2026.</p>

      <p>
        Ovi Uvjeti korištenja (&ldquo;Uvjeti&rdquo;) pravno obvezujući su ugovor između vas i
        društva <strong>Codemem Consulting d.o.o.</strong>, sa sjedištem u
        Obedišću, Općina Križ, Republika Hrvatska (OIB: 26881262647),
        (u daljnjem tekstu: &ldquo;SportSync&rdquo;, &ldquo;mi&rdquo;, &ldquo;nas&rdquo;, &ldquo;naše&rdquo;) te uređuju vaš
        pristup i korištenje mobilne aplikacije SportSync i pridružene
        web‑stranice (zajedno: &ldquo;Platforma&rdquo;). Molimo pažljivo pročitajte ove
        Uvjete prije korištenja Platforme.
      </p>

      {/* 1 */}
      <h2 className={styles.sectionTitle}>1. Prihvaćanje uvjeta</h2>
      <p>
        Registracijom, preuzimanjem ili korištenjem Platforme potvrđujete da ste
        pročitali, razumjeli i prihvatili ove Uvjete u cijelosti, uključujući
        našu <Link href="/privacy">Politiku privatnosti</Link> i{" "}
        <Link href="/cookies">Politiku kolačića</Link>, koji su sastavni dio ovih
        Uvjeta. Ako se ne slažete s bilo kojim dijelom Uvjeta, ne smijete
        pristupati niti koristiti Platformu.
      </p>
      <p>
        Ako koristite Platformu u ime pravne osobe, jamčite da imate ovlast
        prihvatiti ove Uvjete u njezino ime.
      </p>
      <p>
        Kupnja dodatne funkcionalnosti unutar aplikacije podliježe i uvjetima
        Apple App Storea odnosno Google Playa koji se prikazuju tijekom kupnje.
      </p>

      {/* 2 */}
      <h2 className={styles.sectionTitle}>2. Definicije</h2>
      <p>
        <strong>&ldquo;Platforma&rdquo;</strong> – mobilna aplikacija SportSync i
        web‑stranica sportsync.hr, uključujući pridružene usluge i funkcionalnosti.
      </p>
      <p><strong>&ldquo;Korisnik&rdquo;</strong> – registrirana fizička osoba.</p>
      <p>
        <strong>&ldquo;Igrač&rdquo;</strong> – Korisnik koji rezervira, traži ili se
        pridružuje sportskim terminima.
      </p>
      <p>
        <strong>&ldquo;Organizator&rdquo; ili &ldquo;administrator Termina&rdquo;</strong> –
        Korisnik s administratorskim ovlastima za pojedini Termin.
      </p>
      <p>
        <strong>&ldquo;Termin&rdquo;</strong> – sportska aktivnost kreirana na
        Platformi, s definiranim sportom i organizacijskim podacima.
      </p>
      <p>
        <strong>&ldquo;Sezona&rdquo;</strong> – funkcionalnost dostupna za nogometni
        Termin koja omogućuje unos ekipa, utakmica, rezultata, poretka i
        statistike tijekom razdoblja od najviše jedne godine.
      </p>
      <p>
        <strong>&ldquo;Jednogodišnja sezona&rdquo;</strong> – jednokratni digitalni
        proizvod kupljen unutar aplikacije kojim se za konkretni nogometni
        Termin omogućuje pokretanje jedne nove Sezone.
      </p>
      <p>
        <strong>&ldquo;Korisnički sadržaj&rdquo;</strong> – informacije, fotografije,
        poruke i drugi materijali koje Korisnik učitava ili objavljuje.
      </p>
      <p>
        <strong>&ldquo;Ocjena&rdquo;</strong> – ocjena i/ili komentar koji jedan
        Korisnik ostavlja drugom nakon zajednički odigranog Termina.
      </p>
      <p>
        <strong>&ldquo;Chat&rdquo;</strong> – privatni DM razgovori i grupni chat
        pojedinog Termina.
      </p>
      {/* 3 */}
      <h2 className={styles.sectionTitle}>3. Podobnost i minimalna dob</h2>
      <p>
        Korištenje Platforme dopušteno je isključivo osobama koje su navršile
        <strong> 16 godina</strong>. Godina rođenja unosi se tijekom
        registracije radi provedbe ovog ograničenja. Prihvaćanjem Uvjeta
        potvrđujete da ispunjavate uvjet minimalne dobi.
      </p>
      <p>
        Korisnik između 16 i 18 godina smije obaviti kupnju samo ako za to ima
        potrebnu poslovnu sposobnost ili suglasnost roditelja odnosno zakonskog
        zastupnika kada je ona potrebna prema primjenjivom pravu. Odobravanje i
        ograničavanje kupnji provodi se kroz mehanizme Applea i Googlea; SportSync
        ne provodi dodatnu roditeljsku provjeru.
      </p>
      <p>
        Zadržavamo pravo suspendirati ili zatvoriti račun za koji osnovano
        sumnjamo da ga koristi osoba mlađa od 16 godina te postupiti s povezanim
        podacima u skladu s Politikom privatnosti.
      </p>
      {/* 4 */}
      <h2 className={styles.sectionTitle}>4. Registracija i korisnički račun</h2>
      <p>
        Korištenje Platforme zahtijeva obveznu registraciju. Za kreiranje
        računa potrebno je navesti važeću e‑mail adresu, broj mobilnog
        telefona (koji se verificira jednokratnom SMS lozinkom – OTP) i
        godinu rođenja.
      </p>
      <p>
        Potvrda identiteta pri registraciji provodi se putem OTP koda
        dostavljenog SMS‑om. Isti postupak primjenjuje se kod promjene
        registriranog broja mobitela.
      </p>
      <p>
        Odgovorni ste za točnost svih podataka koje navodite te za ažuriranje
        tih podataka u slučaju promjene. Obvezni ste čuvati povjerljivost
        vjerodajnica (lozinka, OTP kodovi) i niste ih ovlašteni dijeliti s
        trećim osobama.
      </p>
      <p>
        Svaka fizička osoba smije imati samo jedan aktivni korisnički račun.
        Nije dopušteno kreirati račun u ime druge osobe bez njezina izričitog
        odobrenja.
      </p>
      <p>
        U slučaju neovlaštenog pristupa vašem računu dužni ste nas odmah
        obavijestiti putem{" "}
        <Link href="/contact">kontaktnog obrasca</Link>.
        Ne odgovaramo za štetu nastalu neovlaštenim korištenjem računa dok nas
        ne obavijestite o takvom pristupu.
      </p>

      {/* 5 */}
      <h2 className={styles.sectionTitle}>5. Uloge korisnika</h2>
      <p>Platforma razlikuje dvije osnovne uloge:</p>
      <p>
        <strong>Igrač</strong> – može pregledavati dostupne Termine, slati
        zahtjev za pridruživanje Terminu te upravljati vlastitim rezervacijama
        i profilom.
      </p>
      <p>
        <strong>Organizator (administrator Termina)</strong> – uz sve
        mogućnosti Igrača, može kreirati nove Termine, postavljati uvjete
        sudjelovanja, prihvaćati ili odbijati zahtjeve Igrača, otkazivati
        Termine te, za nogometni Termin, kupiti, pokrenuti, uređivati i završiti
        Sezonu. Ako Termin ima više administratora, svaki od njih ima navedene
        ovlasti.
      </p>
      <p>
        SportSync zadržava pravo uvesti dodatne uloge ili mijenjati ovlasti
        postojećih uloga uz prethodnu obavijest korisnicima.
      </p>

      {/* 6 */}
      <h2 className={styles.sectionTitle}>6. Rezervacije i otkazivanje termina</h2>
      <p>
        Igrač može zatražiti rezervaciju mjesta na dostupnom Terminu koji je
        kreirao Organizator. Rezervacija postaje potvrđena prihvaćanjem
        zahtjeva od strane Organizatora.
      </p>
      <p>
        Igrač može otkazati potvrđenu rezervaciju bez novčane kazne u bilo
        koje vrijeme putem Platforme. Preporučujemo pravovremeno otkazivanje
        kako bi Organizator mogao pozvati drugog igrača.
      </p>
      <p>
        Organizator može otkazati cijeli Termin u bilo koje vrijeme. U slučaju
        otkazivanja Termina, svi prijavljeni Igrači primaju push obavijest o
        otkazivanju.
      </p>
      <p>
        SportSync ne jamči dostupnost sportskih objekata niti posreduje u
        rezervaciji kapaciteta sportskih objekata – dogovor o korištenju
        objekta isključiva je odgovornost Organizatora.
      </p>

      {/* 7 */}
      <h2 className={styles.sectionTitle}>7. Ocjenjivanje korisnika</h2>
      <p>
        Korisnici mogu ocjenjivati jedni druge isključivo u kontekstu
        konkretnog sporta za koji su zajedno sudjelovali na istom Terminu.
        Ocjena se može ostaviti samo nakon što je Termin označen završenim.
      </p>
      <p>
        Nije dopušteno ostavljati lažne, uvredljive, diskriminatorne ili
        zlonamjerne ocjene. Ocjene moraju biti temeljene na stvarnom iskustvu
        iz zajedničkog Termina.
      </p>
      <p>
        SportSync zadržava pravo ukloniti ocjenu koja krši ove Uvjete ili
        važeće zakonske propise, bez prethodne najave autoru ocjene.
      </p>
      <p>
        Korisnik koji smatra da je ocjena netočna ili zlonamjerna može
        podnijeti prigovor putem{" "}
        <Link href="/contact">kontaktnog obrasca</Link>.
      </p>

      {/* 8 */}
      <h2 className={styles.sectionTitle}>8. Korisnički sadržaj</h2>
      <p>
        Korisnici mogu na Platformu učitati profilnu fotografiju te objavljivati
        poruke u DM chatu i chatu Termina. Objavom takvog sadržaja potvrđujete
        sljedeće:
      </p>
      <p>
        Imate sva potrebna prava (autorska i prava na sliku) za objavu
        fotografije te slanjem poruka ili drugih sadržaja ne kršite prava trećih
        osoba.
      </p>
      <p>
        Fotografija, poruke i drugi Korisnički sadržaj ne sadrže nezakonit,
        uvredljiv, seksualno eksplicitan, mrzilački, prijeteći, spam ili na
        drugi način neprikladan sadržaj.
      </p>
      <p>
        Objavom fotografije ili slanjem poruke dajete SportSync‑u neisključivu,
        besplatnu, globalnu licencu za pohranu, prikaz, prijenos i tehničku
        prilagodbu takvog sadržaja isključivo u svrhu pružanja, sigurnosti,
        moderacije i poboljšanja Platforme, i to za vrijeme potrebno za
        izvršavanje tih svrha.
      </p>
      <p>
        SportSync zadržava pravo ukloniti svaki Korisnički sadržaj koji krši ove
        Uvjete ili je nezakonit, bez prethodne obavijesti.
      </p>

      {/* 9 */}
      <h2 className={styles.sectionTitle}>9. Vidljivost profila i pretraživanje korisnika</h2>
      <p>
        SportSync je platforma društvenog karaktera namijenjena povezivanju
        sportskih rekreativaca. Javna vidljivost profila temeljno je obilježje
        usluge i neophodna pretpostavka za njezino funkcioniranje — bez nje
        korisnici ne bi mogli pronalaziti igrače, popunjavati termine niti biti
        pronađeni od strane organizatora.
      </p>
      <p>
        Registracijom i korištenjem Platforme prihvaćate sljedeće uvjete vidljivosti:
      </p>
      <p>
        <strong>Javni profil</strong> – vaše ime i prezime, profilna
        fotografija (ako je učitana), odabrani sportovi i prosječna ocjena
        vidljivi su svim registriranim korisnicima Platforme u rezultatima
        pretraživanja i na pregledu termina.
      </p>
      <p>
        <strong>Kontaktni podaci nisu javni</strong> – e‑mail adresa, broj
        mobilnog telefona i godina rođenja nikada nisu vidljivi drugim
        korisnicima.
      </p>
      <p>
        <strong>DM komunikacija između korisnika</strong> – svaki registrirani
        korisnik može pokrenuti DM chat s drugim registriranim korisnikom.
        Pokretanje DM razgovora ne otkriva vaše kontaktne podatke drugom
        korisniku; vidljivi ostaju samo podaci koji su javno prikazani unutar
        Platforme.
      </p>
      <p>
        <strong>Buduća postavka privatnosti</strong> – SportSync planira uvesti
        mogućnost postavljanja profila u &ldquo;privatni&rdquo; način rada, čime bi
        korisnik bio isključen iz rezultata pretraživanja. O uvođenju ove
        funkcionalnosti korisnici će biti obaviješteni.
      </p>
      <p>
        <strong>Zahtjev za uklanjanje iz tražilice</strong> – do uvođenja
        postavke privatnosti, korisnik koji želi biti uklonjen iz rezultata
        pretraživanja može podnijeti zahtjev putem{" "}
        <Link href="/contact">kontaktnog obrasca</Link>.
        Zahtjev ćemo obraditi u roku od <strong>5 radnih dana</strong>.
      </p>
      <p>
        Pravna osnova za obradu podataka u svrhu vidljivosti profila je
        izvršavanje ugovora (čl. 6. st. 1. t. b) GDPR‑a), s obzirom na to da
        je javni profil integralni dio usluge koju ste prihvatili registracijom.
        Detalji su opisani u <Link href="/privacy">Politici privatnosti</Link>,
        čl. 3.
      </p>

      {/* 10 */}
      <h2 className={styles.sectionTitle}>10. Obavijesti (notifikacije)</h2>
      <p>Platforma šalje sljedeće vrste obavijesti:</p>
      <p>
        <strong>Push obavijesti</strong> – za događaje vezane uz Termine
        (potvrda rezervacije, otkazivanje Termina, novi zahtjev igrača,
        popunjavanje Termina i sl.) te za nove chat poruke. Push obavijesti
        mogu sadržavati i pregled teksta poruke, ovisno o postavkama vašeg
        uređaja. Možete upravljati push obavijestima u postavkama uređaja.
      </p>
      <p>
        <strong>E‑mail obavijesti</strong> – šalju se isključivo u svrhu
        resetiranja lozinke.
      </p>
      <p>
        <strong>SMS obavijesti</strong> – jednokratni OTP kodovi koji se šalju
        pri registraciji te pri promjeni registriranog broja mobilnog telefona.
      </p>
      <p>
        Isključivanjem push obavijesti na uređaju možete propustiti važne
        informacije o vašim Terminima. Za tehničke obavijesti (OTP) nije moguće
        isključiti dostavu jer su neophodne za sigurnost računa.
      </p>

      {/* 11 */}
      <h2 className={styles.sectionTitle}>11. Chat, blokiranje i prijave</h2>
      <p>
        Platforma omogućuje dvije vrste chata: <strong>DM chat</strong> između
        dva registrirana korisnika i <strong>chat Termina</strong> koji je
        dostupan isključivo članovima tog Termina. Organizator nema posebna
        moderatorska prava za brisanje poruka u chatu Termina.
      </p>
      <p>
        Chat poruke nisu end-to-end enkriptirane. SportSync može pristupiti i
        pročitati poruke kada je to nužno za pružanje funkcionalnosti chata,
        korisničku podršku, sigurnost računa, ručnu obradu prijava i sprječavanje
        zlouporaba.
      </p>
      <p>
        Korisnici mogu blokirati i prijaviti druge korisnike, prijaviti
        pojedinačne poruke te utišati DM razgovore i chatove Termina. Svaku
        prijavu pregledava SportSync ručno.
      </p>
      <p>
        Poslane poruke nije moguće naknadno urediti ni obrisati putem
        Platforme. Chat Termina ostaje dostupan dok Termin postoji; ako se Termin
        izbriše, briše se i pripadajući chat. DM poruke i poruke u chatu Termina
        čuvaju se najdulje <strong>3 mjeseca</strong>, osim ako ih je potrebno
        dulje zadržati radi prijave, zaštite prava, sprječavanja zlouporaba ili
        poštivanja zakonskih obveza, kako je detaljnije opisano u{" "}
        <Link href="/privacy">Politici privatnosti</Link>.
      </p>

      {/* 12 */}
      <h2 className={styles.sectionTitle}>12. Nogometne Sezone</h2>
      <p>
        Funkcionalnost Sezone trenutačno je dostupna samo za Termine čiji je
        sport nogomet. Za ostale sportove nije moguće kupiti niti pokrenuti
        Sezonu.
      </p>
      <p>
        Jednu novu Sezonu može kupiti i pokrenuti samo administrator konkretnog
        Termina. Nakon uspješne potvrde kupnje administrator unosi podatke za
        početak Sezone, uključujući naziv Sezone te nazive i broj ekipa.
      </p>
      <p>
        Sezona traje najdulje jednu godinu od dana uspješne kupnje. Administrator
        je može završiti i ranije. Tijekom aktivne Sezone administratori mogu
        unositi i uređivati podatke, a svi sudionici pripadajućeg Termina mogu
        pregledavati Sezonu, rezultate i statistiku.
      </p>
      <p>
        Završena Sezona ostaje dostupna sudionicima Termina u načinu samo za
        čitanje. Za nastavak unosa novih utakmica, rezultata i statistike nakon
        završetka ili isteka Sezone potrebno je kupiti novu Jednogodišnju sezonu.
        Nova Sezona započinje zasebno, od prve nove utakmice, dok prethodne
        Sezone ostaju u arhivi.
      </p>
      <p>
        Kupnja i Sezona vezane su uz konkretni Termin. Ne mogu se prenijeti na
        drugi Termin, drugi korisnički račun ili drugu osobu. Prijenos ili dodjela
        administratorske uloge drugom Korisniku omogućuje tom administratoru
        upravljanje postojećom Sezonom, ali ne prenosi samu kupnju izvan Termina.
      </p>
      <p>
        Brisanjem Termina prestaje pristup aktivnoj i arhiviranim Sezonama tog
        Termina. Samo brisanje Termina, napuštanje Termina ili promjena
        administratora ne stvara automatsko pravo na povrat cijene, ne dovodeći
        u pitanje prava koja Korisniku pripadaju prema prisilnim propisima ili
        pravilima trgovine kroz koju je kupnja izvršena.
      </p>

      {/* 13 */}
      <h2 className={styles.sectionTitle}>13. Kupnja, cijena i povrati</h2>
      <p>
        &ldquo;Jednogodišnja sezona&rdquo; jednokratni je proizvod, a ne pretplata.
        Kupnja se ne obnavlja automatski. Dostupnost proizvoda, konačna cijena, valuta
        i uključeni porezi prikazuju se u Apple App Storeu ili Google Playu neposredno
        prije potvrde kupnje.
      </p>
      <p>
        Na iOS‑u kupnju i naplatu obrađuje Apple putem In‑App Purchasea, a na
        Androidu Google putem Google Play Billinga. Apple odnosno Google izdaje
        potvrdu o kupnji i obrađuje podatke o načinu plaćanja. SportSync ne prima
        niti pohranjuje broj kartice, podatke o bankovnom računu ili druge
        vjerodajnice za plaćanje.
      </p>
      <p>
        RevenueCat se koristi za tehničku potvrdu transakcije i sinkronizaciju
        statusa kupnje. Dok kupnja nije uspješno potvrđena, uključujući slučaj
        kada je u statusu čekanja, Sezona se ne može pokrenuti. Neuspjela ili
        prekinuta kupnja ne aktivira proizvod.
      </p>
      <p>
        Valjana kupnja vezana uz Termin dostupna je na iOS i Android uređajima
        nakon prijave na odgovarajući SportSync račun. Ne postoji zaseban prijenos
        kupljenog proizvoda na drugi Termin ili drugog korisnika.
      </p>
      <p>
        Zahtjev za povrat podnosi se Appleu za kupnje na iOS‑u odnosno Googleu
        za kupnje na Androidu, prema pravilima odgovarajuće trgovine i
        primjenjivim prisilnim propisima. Za pomoć u vezi s dvostrukom naplatom,
        pogrešnom aktivacijom ili tehničkim problemom možete se obratiti
        SportSync podršci putem <Link href="/contact">kontaktnog obrasca </Link>
        ili na <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>.
      </p>
      <p>
        Ako Apple ili Google odobri povrat, opozove kupnju ili utvrdi chargeback,
        SportSync nakon zaprimljene potvrde putem RevenueCata prekida Sezonu
        povezanu s tom transakcijom i onemogućuje njezino daljnje uređivanje.
        Opoziv jedne transakcije ne utječe na zasebnu, kasniju valjanu kupnju
        za novu Sezonu.
      </p>
      <p>
        Ništa u ovim Uvjetima ne ograničava prava potrošača koja se prema primjenjivim
        prisilnim propisima ne mogu isključiti ili ograničiti ugovorom.
      </p>
      {/* 14 */}
      <h2 className={styles.sectionTitle}>14. Zabranjena ponašanja</h2>
      <p>Zabranjeno je koristiti Platformu za:</p>
      <p>
        Pružanje lažnih podataka pri registraciji ili korištenju bilo koje
        funkcionalnosti Platforme.
      </p>
      <p>
        Kreiranje lažnih Termina ili namjerno ometanje Organizatora i
        Igrača.
      </p>
      <p>
        Slanje nezakonitih, prijetećih, uznemirujućih, diskriminatornih,
        obmanjujućih ili spam poruka putem DM chata ili chata Termina.
      </p>
      <p>
        Uznemiravanje, zastrašivanje, diskriminaciju ili uvredu drugih
        korisnika na temelju rase, spola, dobi, vjere, seksualne orijentacije,
        invaliditeta ili drugog zaštićenog obilježja.
      </p>
      <p>
        Zaobilaženje funkcionalnosti blokiranja, zlouporabu sustava prijava ili
        ponovljeno kontaktiranje korisnika protivno njihovoj jasno izraženoj
        volji.
      </p>
      <p>
        Neovlašteni pristup infrastrukturi Platforme, pokušaje hakiranja,
        distribuiranje zlonamjernog softvera ili bilo kakvo ometanje rada
        Platforme.
      </p>
      <p>
        Komercijalno oglašavanje ili spam bez prethodnog pisanog odobrenja
        SportSync‑a.
      </p>
      <p>
        Svaku drugu aktivnost koja je nezakonita prema pravu Republike
        Hrvatske ili kojom se nanosi šteta SportSync‑u, korisnicima ili
        trećim osobama.
      </p>

      {/* 15 */}
      <h2 className={styles.sectionTitle}>15. Intelektualno vlasništvo</h2>
      <p>
        Sva prava intelektualnog vlasništva na Platformi – uključujući dizajn,
        izvorni kod, grafičke elemente, logotipe, baze podataka i tekstove – u
        isključivom su vlasništvu SportSync‑a ili su licencirana od trećih strana.
        Ništa u ovim Uvjetima ne prenosi na Korisnika nikakva prava intelektualnog
        vlasništva.
      </p>
      <p>
        Korisnicima se dodjeljuje ograničena, neprenosiva, neisključiva, opoziva
        licenca za korištenje Platforme isključivo za osobne, nekomerci­jalne svrhe
        u skladu s ovim Uvjetima. Svako neovlašteno reproduciranje, distribucija,
        javno prikazivanje ili preinaka sadržaja Platforme strogo je zabranjeno.
      </p>

      {/* 16 */}
      <h2 className={styles.sectionTitle}>16. Zaštita osobnih podataka</h2>
      <p>
        Prikupljanje i obrada osobnih podataka uređeni su našom{" "}
        <Link href="/privacy">Politikom privatnosti</Link>, koja je sastavni dio
        ovih Uvjeta. Podaci se obrađuju u skladu s GDPR‑om i hrvatskim propisima
        o zaštiti osobnih podataka.
      </p>
      <p>
        U vezi s kupnjom obrađujemo tehničke transakcijske podatke, uključujući
        identifikatore transakcije ili narudžbe, proizvod, platformu, vrijeme i
        status kupnje, povrata ili opoziva te interne identifikatore Korisnika i
        Termina. Ne primamo podatke o platnoj kartici ni bankovnom računu.
        Detalji o primateljima, svrhama, pravnim osnovama i rokovima čuvanja
        nalaze se u Politici privatnosti.
      </p>
      {/* 17 */}
      <h2 className={styles.sectionTitle}>17. Ograničenje odgovornosti</h2>
      <p>
        Platforma se pruža &ldquo;kakva jest&rdquo; i &ldquo;kako je dostupna&rdquo;, u granicama
        dopuštenima primjenjivim pravom. Ova odredba ne ograničava zakonska
        prava potrošača u vezi s usklađenošću i funkcioniranjem plaćenog
        digitalnog sadržaja ili digitalne usluge.
      </p>
      <p>
        U mjeri dopuštenoj primjenjivim zakonom, SportSync neće biti odgovoran
        za izravne, neizravne, slučajne, posebne ili posljedične štete nastale
        korištenjem ili nemogućnošću korištenja Platforme.
      </p>
      <p>
        SportSync ne odgovara za štete nastale zbog netočnih informacija koje su
        unijeli korisnici.
      </p>
      <p>
        SportSync ne odgovara za sadržaj poruka, stavove ili ponašanje korisnika
        u DM chatu ili chatu Termina, osim u mjeri u kojoj je drugačije propisano
        obveznim pravom. Činjenica da SportSync omogućuje prijavu ili ručnu
        moderaciju ne znači obvezu prethodnog nadzora svake poruke.
      </p>
      <p>
        SportSync ne odgovara za ozljede ili materijalnu štetu nastalu za vrijeme
        ili uslijed sudjelovanja u sportskim terminima organiziranim putem
        Platforme – SportSync je isključivo tehnološki posrednik i ne snosi
        odgovornost za fizičke sportske aktivnosti.
      </p>
      <p>
        SportSync ne odgovara za privremenu nedostupnost Platforme zbog
        održavanja, tehničkih smetnji ili okolnosti izvan naše kontrole
        (viša sila).
      </p>
      <p>
        Ništa u ovom članku ne isključuje odgovornost SportSync‑a za štetu
        nastalu namjerom ili grubom nepažnjom, niti prava potrošača koja su
        zaštićena prisilnim propisima.
      </p>

      {/* 18 */}
      <h2 className={styles.sectionTitle}>18. Suspenzija i zatvaranje računa</h2>
      <p>
        SportSync može privremeno suspendirati ili trajno zatvoriti korisnički
        račun u slučaju kršenja ovih Uvjeta, sumnje na prijevarno ponašanje,
        zlouporabe chata, osnovanih prijava drugih korisnika, na zahtjev
        nadležnih tijela ili iz razloga zaštite integriteta Platforme.
      </p>
      <p>
        O suspenziji ili zatvaranju računa korisnik će biti obaviješten
        e‑mailom, osim ako bi obavijest narušila istragu ili ako je zakonom
        drukčije određeno.
      </p>
      <p>
        Korisnik može zatvoriti vlastiti račun u bilo koje vrijeme u
        postavkama aplikacije ili podnošenjem zahtjeva na{" "}
        <Link href="/contact">kontaktnom obrascu</Link>. Nakon zatvaranja
        računa osobni podaci bit će obrisani ili anonimizirani u skladu s
        našom <Link href="/privacy">Politikom privatnosti</Link>. Za upute
        o brisanju podataka pogledajte također stranicu{" "}
        <Link href="/delete-account">Brisanje računa</Link>.
      </p>

      {/* 19 */}
      <h2 className={styles.sectionTitle}>19. Usluge trećih strana</h2>
      <p>
        Platforma koristi usluge trećih pružatelja, uključujući cloud hosting,
        push obavijesti, SMS gateway, pohranu podataka, Apple App Store, Google
        Play i RevenueCat. Kupnja unutar aplikacije dodatno podliježe uvjetima
        i pravilima Applea odnosno Googlea.
      </p>
      <p>
        SportSync nije odgovoran za samostalne odluke Applea ili Googlea o
        naplati, statusu računa ili povratu, ali ćemo razumno surađivati u
        rješavanju tehničkog problema koji se odnosi na aktivaciju proizvoda u
        Platformi. Ova odredba ne isključuje odgovornost SportSynca za vlastite
        obveze prema prisilnim propisima.
      </p>
      <p>
        Vanjske poveznice pružaju se radi informiranja i ne znače da SportSync
        podupire njihov sadržaj ili preuzima odgovornost za prakse trećih strana.
      </p>
      {/* 20 */}
      <h2 className={styles.sectionTitle}>20. Izmjene Uvjeta</h2>
      <p>
        Uvjete možemo mijenjati radi novih funkcionalnosti, sigurnosnih,
        tehničkih ili pravnih razloga. Nova verzija objavljuje se na ovoj
        stranici s ažuriranim datumom.
      </p>
      <p>
        O izmjenama koje značajno utječu na postojeća prava ili obveze
        obavijestit ćemo korisnike unaprijed kada je to potrebno prema
        primjenjivom pravu. Odredbe koje uređuju novu i opcionalnu funkcionalnost,
        kao što je Jednogodišnja sezona, mogu stupiti na snagu istodobno s
        njezinom objavom. Izmjene ne djeluju retroaktivno na već sklopljene
        kupnje na način koji bi umanjio obvezna prava potrošača.
      </p>
      {/* 21 */}
      <h2 className={styles.sectionTitle}>21. Mjerodavno pravo i rješavanje sporova</h2>
      <p>
        Ovi Uvjeti uređeni su pravom Republike Hrvatske, ne dovodeći u pitanje
        prisilna prava koja potrošaču pripadaju prema pravu države njegova
        uobičajenog boravišta kada je ono primjenjivo.
      </p>
      <p>
        Spor ćemo najprije pokušati riješiti mirnim putem. Za sudski spor
        nadležan je sud određen primjenjivim pravilima o nadležnosti; potrošaču
        se ovim Uvjetima ne nameće isključiva nadležnost suda koja bi bila
        protivna prisilnim propisima.
      </p>
      <p>
        Potrošač može razmotriti i alternativno rješavanje spora pred
        notificiranim hrvatskim tijelima za alternativno rješavanje potrošačkih
        sporova. Informacije o dostupnim tijelima objavljene su na Središnjem
        portalu za potrošače. Ranija europska platforma za online rješavanje
        sporova više nije dostupna.
      </p>
      {/* 22 */}
      <h2 className={styles.sectionTitle}>22. Razdvojivost odredbi</h2>
      <p>
        Ako bilo koja odredba ovih Uvjeta bude proglašena ništavnom,
        nezakonitom ili neprovedivom od strane nadležnog suda, ta odredba
        bit će odvojena od preostalih Uvjeta koji ostaju na snazi u punom
        opsegu.
      </p>

      {/* 23 */}
      <h2 className={styles.sectionTitle}>23. Kontakt i pisani prigovori</h2>
      <p>
        Za pitanja, tehničku podršku, prijave korisnika ili poruka te prigovore
        u vezi s Platformom ili kupnjom obratite nam se putem{" "}
        <Link href="/contact">kontaktnog obrasca</Link> ili e‑mailom na{" "}
        <a href="mailto:support@sportsync.hr">support@sportsync.hr</a>.
      </p>
      <p>
        Potrošač može navedenim putem podnijeti pisani prigovor. Na pisani
        prigovor odgovorit ćemo u pisanom obliku najkasnije u roku od
        <strong> 15 dana</strong> od njegova primitka, jasno navodeći prihvaćamo
        li njegovu osnovanost. Evidenciju pisanih prigovora čuvamo u roku
        propisanom zakonom.
      </p>
    </article>
  );
}
