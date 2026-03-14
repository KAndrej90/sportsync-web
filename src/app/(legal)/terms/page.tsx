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
      <p className={styles.lastUpdated}>Zadnje ažuriranje: 14. ožujka 2026.</p>

      <p>
        Ovi Uvjeti korištenja ({"\u201eUvjeti\u201c"}) pravno obvezujući su ugovor između vas i
        društva <strong>Codemem Consulting d.o.o.</strong>, sa sjedištem u
        Obedišću, Općina Križ, Republika Hrvatska (OIB: 26881262647),
        (u daljnjem tekstu: {"\u201eSportSync\u201c"}, {"\u201emi\u201c"}, {"\u201enas\u201c"}, {"\u201enaše\u201c"}) te uređuju vaš
        pristup i korištenje mobilne aplikacije SportSync i pridružene
        web‑stranice (zajedno: {"\u201ePlatforma\u201c"}). Molimo pažljivo pročitajte ove
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

      {/* 2 */}
      <h2 className={styles.sectionTitle}>2. Definicije</h2>
      <ul>
        <li>
          <strong>{"\u201ePlatforma\u201c"}</strong> – mobilna aplikacija SportSync i
          web‑stranica dostupna na sportsync.hr, uključujući sve pridružene
          usluge, sadržaje i funkcionalnosti.
        </li>
        <li>
          <strong>{"\u201eKorisnik\u201c"}</strong> – svaka fizička osoba koja je registrirana
          na Platformi i koristi je.
        </li>
        <li>
          <strong>{"\u201eIgrač\u201c"}</strong> – Korisnik koji rezervira sportske termine,
          traži ili se pridružuje dostupnim terminima.
        </li>
        <li>
          <strong>{"\u201eOrganizator\u201c"}</strong> – Korisnik s administratorskim
          ovlastima koji kreira i upravlja sportskim terminima te poziva ili
          prihvaća druge Igrače.
        </li>
        <li>
          <strong>{"\u201eTermin\u201c"}</strong> – sportska aktivnost kreirana na Platformi,
          s definiranim datumom, vremenom, mjestom i sportom.
        </li>
        <li>
          <strong>{"\u201eKorisnički sadržaj\u201c"}</strong> – sve informacije, fotografije i
          drugi materijali koje Korisnik učitava ili objavljuje na Platformu,
          uključujući profilnu sliku.
        </li>
        <li>
          <strong>{"\u201eOcjena\u201c"}</strong> – ocjena i/ili komentar koji jedan Korisnik
          ostavlja drugom Korisniku nakon zajednički odigranog Termina.
        </li>
      </ul>

      {/* 3 */}
      <h2 className={styles.sectionTitle}>3. Podobnost i minimalna dob</h2>
      <p>
        Korištenje Platforme dopušteno je isključivo osobama koje su navršile{" "}
        <strong>16 godina</strong>. Prihvaćanjem ovih Uvjeta pri registraciji
        izričito potvrđujete da ispunjavate ovaj uvjet. Datum rođenja unosi se
        u postavkama profila nakon registracije i služi dodatnoj provjeri dobi
        te personalizaciji iskustva.
      </p>
      <p>
        SportSync planira premjestiti unos datuma rođenja u sam tok registracije
        radi potpune tehničke usklađenosti s čl. 8. GDPR‑a. Do tada se
        provjera dobi temelji na izričitoj izjavi korisnika danoj prihvaćanjem
        ovih Uvjeta.
      </p>
      <p>
        Ako imate između 16 i 18 godina, preporučujemo da roditelja ili
        zakonskog zastupnika upoznate s ovim Uvjetima.
      </p>
      <p>
        Zadržavamo pravo bez prethodne najave suspendirati ili trajno zatvoriti
        račun za koji posumnjamo da ga koristi osoba mlađa od 16 godina te
        odmah ukloniti sve povezane osobne podatke.
      </p>

      {/* 4 */}
      <h2 className={styles.sectionTitle}>4. Registracija i korisnički račun</h2>
      <ul>
        <li>
          Korištenje Platforme zahtijeva obveznu registraciju. Za kreiranje
          računa potrebno je navesti važeću e‑mail adresu i broj mobilnog
          telefona (koji se verificira jednokratnom SMS lozinkom – OTP). Datum
          rođenja unosi se naknadno u postavkama profila.
        </li>
        <li>
          Potvrda identiteta pri registraciji provodi se putem OTP koda
          dostavljenog SMS‑om. Isti postupak primjenjuje se kod promjene
          registriranog broja mobitela.
        </li>
        <li>
          Odgovorni ste za točnost svih podataka koje navodite te za ažuriranje
          tih podataka u slučaju promjene. Obvezni ste čuvati povjerljivost
          vjerodajnica (lozinka, OTP kodovi) i niste ih ovlašteni dijeliti s
          trećim osobama.
        </li>
        <li>
          Svaka fizička osoba smije imati samo jedan aktivni korisnički račun.
          Nije dopušteno kreirati račun u ime druge osobe bez njezina izričitog
          odobrenja.
        </li>
        <li>
          U slučaju neovlaštenog pristupa vašem računu dužni ste nas odmah
          obavijestiti putem kontaktnog obrasca na{" "}
          <Link href="/contact">stranici za kontakt</Link> ili e‑mailom na{" "}
          <a href="mailto:ante.kadic@sportsync.hr">ante.kadic@sportsync.hr</a>.
          Ne odgovaramo za štetu nastalu neovlaštenim korištenjem računa dok nas
          ne obavijestite o takvom pristupu.
        </li>
      </ul>

      {/* 5 */}
      <h2 className={styles.sectionTitle}>5. Uloge korisnika</h2>
      <p>Platforma razlikuje dvije osnovne uloge:</p>
      <ul>
        <li>
          <strong>Igrač</strong> – može pregledavati dostupne Termine, slati
          zahtjev za pridruživanje Terminu te upravljati vlastitim rezervacijama
          i profilom.
        </li>
        <li>
          <strong>Organizator (administrator Termina)</strong> – uz sve
          mogućnosti Igrača, može kreirati nove Termine, postavljati uvjete
          sudjelovanja (npr. broj igrača, sport, lokaciju i vremenski okvir),
          prihvaćati ili odbijati zahtjeve Igrača te otkazivati Termine.
        </li>
      </ul>
      <p>
        SportSync zadržava pravo uvesti dodatne uloge ili mijenjati ovlasti
        postojećih uloga uz prethodnu obavijest korisnicima.
      </p>

      {/* 6 */}
      <h2 className={styles.sectionTitle}>6. Rezervacije i otkazivanje termina</h2>
      <ul>
        <li>
          Igrač može zatražiti rezervaciju mjesta na dostupnom Terminu koji je
          kreirao Organizator. Rezervacija postaje potvrđena prihvaćanjem
          zahtjeva od strane Organizatora.
        </li>
        <li>
          Igrač može otkazati potvrđenu rezervaciju bez novčane kazne u bilo
          koje vrijeme putem Platforme. Preporučujemo pravovremeno otkazivanje
          kako bi Organizator mogao pozvati drugog igrača.
        </li>
        <li>
          Organizator može otkazati cijeli Termin u bilo koje vrijeme. U slučaju
          otkazivanja Termina, svi prijavljeni Igrači primaju push obavijest o
          otkazivanju.
        </li>
        <li>
          SportSync ne jamči dostupnost sportskih objekata niti posreduje u
          rezervaciji kapaciteta sportskih objekata – dogovor o korištenju
          objekta isključiva je odgovornost Organizatora.
        </li>
      </ul>

      {/* 7 */}
      <h2 className={styles.sectionTitle}>7. Ocjenjivanje korisnika</h2>
      <ul>
        <li>
          Korisnici mogu ocjenjivati jedni druge isključivo u kontekstu
          konkretnog sporta za koji su zajedno sudjelovali na istom Terminu.
          Ocjena se može ostaviti samo nakon što je Termin označen završenim.
        </li>
        <li>
          Nije dopušteno ostavljati lažne, uvredljive, diskriminatorne ili
          zlonamjerne ocjene. Ocjene moraju biti temeljene na stvarnom iskustvu
          iz zajedničkog Termina.
        </li>
        <li>
          SportSync zadržava pravo ukloniti ocjenu koja krši ove Uvjete ili
          važeće zakonske propise, bez prethodne najave autoru ocjene.
        </li>
        <li>
          Korisnik koji smatra da je ocjena netočna ili zlonamjerna može
          podnijeti prigovor putem{" "}
          <Link href="/contact">kontaktnog obrasca</Link>.
        </li>
      </ul>

      {/* 8 */}
      <h2 className={styles.sectionTitle}>8. Korisnički sadržaj</h2>
      <p>
        Korisnici mogu na Platformu učitati profilnu fotografiju. Učitavanjem
        fotografije potvrđujete sljedeće:
      </p>
      <ul>
        <li>
          Imate sva potrebna prava (autorska i prava na sliku) za objavu te
          fotografije te njezinom objavom ne kršite prava trećih osoba.
        </li>
        <li>
          Fotografija ne sadrži nezakonit, uvredljiv, seksualno eksplicitan,
          mrzilački ili na drugi način neprikladan sadržaj.
        </li>
        <li>
          Objavom fotografije dajete SportSync‑u neisključivu, besplatnu,
          globalnu licencu za pohranu, prikaz i prilagodbu fotografije isključivo
          u svrhu pružanja i poboljšanja usluge Platforme, i to za vrijeme
          trajanja vašeg korisničkog računa.
        </li>
      </ul>
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
      <ul>
        <li>
          <strong>Javni profil</strong> – vaše ime i prezime, profilna
          fotografija (ako je učitana), odabrani sportovi i prosječna ocjena
          vidljivi su svim registriranim korisnicima Platforme u rezultatima
          pretraživanja i na pregledu termina.
        </li>
        <li>
          <strong>Kontaktni podaci nisu javni</strong> – e‑mail adresa, broj
          mobilnog telefona i datum rođenja nikada nisu vidljivi drugim
          korisnicima.
        </li>
        <li>
          <strong>Buduća postavka privatnosti</strong> – SportSync planira uvesti
          mogućnost postavljanja profila u {"\u201eprivatni\u201c"} način rada, čime bi
          korisnik bio isključen iz rezultata pretraživanja. O uvođenju ove
          funkcionalnosti korisnici će biti obaviješteni.
        </li>
        <li>
          <strong>Zahtjev za uklanjanje iz tražilice</strong> – do uvođenja
          postavke privatnosti, korisnik koji želi biti uklonjen iz rezultata
          pretraživanja može podnijeti zahtjev putem{" "}
          <Link href="/contact">kontaktnog obrasca</Link> ili na{" "}
          <a href="mailto:ante.kadic@sportsync.hr">ante.kadic@sportsync.hr</a>.
          Zahtjev ćemo obraditi u roku od <strong>5 radnih dana</strong>.
        </li>
      </ul>
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
      <ul>
        <li>
          <strong>Push obavijesti</strong> – za događaje vezane uz Termine
          (potvrda rezervacije, otkazivanje Termina, novi zahtjev igrača,
          popunjavanje Termina i sl.). Možete upravljati push obavijestima u
          postavkama uređaja.
        </li>
        <li>
          <strong>E‑mail obavijesti</strong> – šalju se isključivo u svrhu
          resetiranja lozinke.
        </li>
        <li>
          <strong>SMS obavijesti</strong> – jednokratni OTP kodovi koji se šalju
          pri registraciji te pri promjeni registriranog broja mobilnog telefona.
        </li>
      </ul>
      <p>
        Isključivanjem push obavijesti na uređaju možete propustiti važne
        informacije o vašim Terminima. Za tehničke obavijesti (OTP) nije moguće
        isključiti dostavu jer su neophodne za sigurnost računa.
      </p>

      {/* 11 */}
      <h2 className={styles.sectionTitle}>11. Plaćanja i pretplate</h2>
      <p>
        Platforma je trenutačno <strong>besplatna</strong> za sve korisnike.
        SportSync planira u budućnosti uvesti pretplatne planove
        (engl. <em>subscription</em>) koji će omogućiti pristup dodatnim
        funkcionalnostima. O uvođenju plaćenih planova korisnici će biti
        pravovremeno obaviješteni, a ovi Uvjeti bit će ažurirani.
      </p>
      <p>
        Kada budu dostupne, plaćene usluge funkcionirat će na sljedeći način:
      </p>
      <ul>
        <li>
          Cijene i sadržaj pretplatnih planova bit će jasno navedeni u aplikaciji
          prije zaključenja narudžbe.
        </li>
        <li>
          Plaćanja će se obrađivati putem pouzdanih trećih pružatelja platnih
          usluga. SportSync neće pohranjivati podatke o platnoj kartici na
          vlastitim poslužiteljima.
        </li>
        <li>
          Uvjeti otkaza pretplate, povrata novca i trajanja pretplatnog perioda
          bit će posebno navedeni pri uvođenju plaćenih planova.
        </li>
      </ul>

      {/* 12 */}
      <h2 className={styles.sectionTitle}>12. Zabranjena ponašanja</h2>
      <p>Zabranjeno je koristiti Platformu za:</p>
      <ul>
        <li>
          Pružanje lažnih podataka pri registraciji ili korištenju bilo koje
          funkcionalnosti Platforme.
        </li>
        <li>
          Kreiranje lažnih Termina ili namjerno ometanje Organizatora i
          Igrača.
        </li>
        <li>
          Uznemiravanje, zastrašivanje, diskriminaciju ili uvredu drugih
          korisnika na temelju rase, spola, dobi, vjere, seksualne orijentacije,
          invaliditeta ili drugog zaštićenog obilježja.
        </li>
        <li>
          Neovlašteni pristup infrastrukturi Platforme, pokušaje hakiranja,
          distribuiranje zlonamjernog softvera ili bilo kakvo ometanje rada
          Platforme.
        </li>
        <li>
          Komercijalno oglašavanje ili spam bez prethodnog pisanog odobrenja
          SportSync‑a.
        </li>
        <li>
          Svaku drugu aktivnost koja je nezakonita prema pravu Republike
          Hrvatske ili kojom se nanosi šteta SportSync‑u, korisnicima ili
          trećim osobama.
        </li>
      </ul>

      {/* 13 */}
      <h2 className={styles.sectionTitle}>13. Intelektualno vlasništvo</h2>
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

      {/* 14 */}
      <h2 className={styles.sectionTitle}>14. Zaštita osobnih podataka</h2>
      <p>
        Prikupljanje i obrada osobnih podataka korisnika uređena je našom{" "}
        <Link href="/privacy">Politikom privatnosti</Link>, koja je sastavni dio
        ovih Uvjeta. Osobni podaci obrađuju se u skladu s Uredbom (EU) 2016/679
        (GDPR) i Zakonom o provedbi Opće uredbe o zaštiti podataka (NN 42/2018).
      </p>
      <p>
        Platforma prikuplja i obrađuje, između ostalog, e‑mail adresu, broj
        mobilnog telefona, datum rođenja i profilnu fotografiju. Za detalje o
        svrhama obrade, pravnoj osnovi, rokovima čuvanja i vašim pravima kao
        ispitanika molimo pogledajte{" "}
        <Link href="/privacy">Politiku privatnosti</Link>.
      </p>

      {/* 15 */}
      <h2 className={styles.sectionTitle}>15. Ograničenje odgovornosti</h2>
      <p>
        Platforma se pruža {"\u201ekakva jest\u201c"} i {"\u201ekako je dostupna\u201c"}, bez ikakvih
        izričitih ili impliciranih jamstava u pogledu dostupnosti, točnosti,
        potpunosti ili prikladnosti za određenu svrhu.
      </p>
      <p>
        U mjeri dopuštenoj primjenjivim zakonom, SportSync neće biti odgovoran
        za:
      </p>
      <ul>
        <li>
          izravne, neizravne, slučajne, posebne ili posljedične štete nastale
          korištenjem ili nemogućnošću korištenja Platforme;
        </li>
        <li>
          štete nastale zbog netočnih informacija koje su unijeli korisnici;
        </li>
        <li>
          ozljede ili materijalnu štetu nastalu za vrijeme ili uslijed
          sudjelovanja u sportskim terminima organiziranim putem Platforme –
          SportSync je isključivo tehnološki posrednik i ne snosi odgovornost
          za fizičke sportske aktivnosti;
        </li>
        <li>
          privremenu nedostupnost Platforme zbog održavanja, tehničkih smetnji
          ili okolnosti izvan naše kontrole (viša sila).
        </li>
      </ul>
      <p>
        Ništa u ovom članku ne isključuje odgovornost SportSync‑a za štetu
        nastalu namjerom ili grubom nepažnjom, niti prava potrošača koja su
        zaštićena prisilnim propisima.
      </p>

      {/* 16 */}
      <h2 className={styles.sectionTitle}>16. Suspenzija i zatvaranje računa</h2>
      <ul>
        <li>
          SportSync može privremeno suspendirati ili trajno zatvoriti korisnički
          račun u slučaju kršenja ovih Uvjeta, sumnje na prijevarno ponašanje,
          na zahtjev nadležnih tijela ili iz razloga zaštite integriteta
          Platforme.
        </li>
        <li>
          O suspenziji ili zatvaranju računa korisnik će biti obaviješten
          e‑mailom, osim ako bi obavijest narušila istragu ili ako je zakonom
          drukčije određeno.
        </li>
        <li>
          Korisnik može zatvoriti vlastiti račun u bilo koje vrijeme u
          postavkama aplikacije ili podnošenjem zahtjeva na{" "}
          <Link href="/contact">kontaktnom obrascu</Link>. Nakon zatvaranja
          računa osobni podaci bit će obrisani ili anonimizirani u skladu s
          našom <Link href="/privacy">Politikom privatnosti</Link>. Za upute
          o brisanju podataka pogledajte također stranicu{" "}
          <Link href="/delete-account">Brisanje računa</Link>.
        </li>
      </ul>

      {/* 17 */}
      <h2 className={styles.sectionTitle}>17. Usluge trećih strana</h2>
      <p>
        Platforma može koristiti usluge trećih pružatelja (npr. pružatelji push
        obavijesti, SMS gateway, usluge pohrane podataka u oblaku). Ove treće
        strane imaju vlastite uvjete korištenja i politike privatnosti za koje
        SportSync ne preuzima odgovornost.
      </p>
      <p>
        Na web‑stranici mogu se nalaziti poveznice na vanjske stranice trećih
        strana. Takve poveznice pružaju se isključivo radi informiranja i ne
        znače da SportSync podupire sadržaj tih stranica niti preuzima
        odgovornost za njihov sadržaj ili praksu privatnosti.
      </p>

      {/* 18 */}
      <h2 className={styles.sectionTitle}>18. Izmjene Uvjeta</h2>
      <p>
        SportSync zadržava pravo izmjene ovih Uvjeta u bilo koje vrijeme.
        O svim značajnijim izmjenama korisnici će biti obaviješteni putem push
        obavijesti i/ili e‑maila najkasnije <strong>15 dana</strong> prije
        stupanja izmjena na snagu. Nova verzija Uvjeta bit će objavljena na ovoj
        stranici s ažuriranim datumom zadnjeg ažuriranja.
      </p>
      <p>
        Nastavak korištenja Platforme nakon stupanja izmjena na snagu smatra
        se prihvaćanjem novih Uvjeta. Ako se ne slažete s izmjenama, dužni ste
        prestati koristiti Platformu i možete zatvoriti račun.
      </p>

      {/* 19 */}
      <h2 className={styles.sectionTitle}>19. Mjerodavno pravo i rješavanje sporova</h2>
      <p>
        Ovi Uvjeti uređeni su pravom Republike Hrvatske. Za sve sporove koji
        nastanu u vezi s ovim Uvjetima ili korištenjem Platforme, a koji se ne
        mogu riješiti sporazumno, nadležan je stvarno nadležni sud u Sisku,
        osim ako primjenjivi propisi o zaštiti potrošača određuju drukčiju
        nadležnost.
      </p>
      <p>
        Korisnici koji su potrošači u smislu Zakona o zaštiti potrošača
        (NN 19/2022 i dr.) imaju pravo podnijeti prigovor Europskoj platformi
        za online rješavanje sporova dostupnoj na{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>

      {/* 20 */}
      <h2 className={styles.sectionTitle}>20. Razdvojivost odredbi</h2>
      <p>
        Ako bilo koja odredba ovih Uvjeta bude proglašena ništavnom,
        nezakonitom ili neprovedivom od strane nadležnog suda, ta odredba
        bit će odvojena od preostalih Uvjeta koji ostaju na snazi u punom
        opsegu.
      </p>

      {/* 21 */}
      <h2 className={styles.sectionTitle}>21. Kontakt</h2>
      <p>
        Za sva pitanja, prigovore ili zahtjeve vezane uz ove Uvjete ili
        korištenje Platforme, obratite nam se:
      </p>
      <ul>
        <li>
          Putem kontaktnog obrasca na{" "}
          <Link href="/contact">stranici za kontakt</Link>
        </li>
        <li>
          E‑mailom:{" "}
          <a href="mailto:ante.kadic@sportsync.hr">ante.kadic@sportsync.hr</a>
        </li>
      </ul>
      <p>
        Nastojimo odgovoriti na svaki upit u roku od <strong>5 radnih dana</strong>.
      </p>

    </article>
  );
}
