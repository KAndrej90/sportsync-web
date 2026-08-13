import type { Metadata } from "next";
import SeoLandingPage from "../SeoLandingPage";

const path = "/organizacija-sportskih-termina";

export const metadata: Metadata = {
  title: "Aplikacija za organizaciju sportskih termina",
  description: "Organizirajte redovne sportske termine, pratite dolaske ekipe i popunite slobodna mjesta uz SportSync aplikaciju.",
  alternates: { canonical: path },
  openGraph: {
    url: path,
    title: "Aplikacija za organizaciju sportskih termina | SportSync",
    description: "Jedno mjesto za termin, ekipu, potvrde dolaska i slobodna mjesta.",
  },
};

export default function OrganizationPage() {
  return (
    <SeoLandingPage
      path={path}
      eyebrow="Organizacija termina"
      title="Organiziraj sportski termin bez beskrajnog dopisivanja"
      lead="SportSync je aplikacija za ekipe koje redovno igraju nogomet, košarku, padel, tenis, odbojku i druge sportove. Kreiraj termin, prati dolaske i odmah vidi nedostaje li vam igrača."
      sections={[
        {
          title: "Sve informacije o terminu na jednom mjestu",
          paragraphs: [
            "Vrijeme, lokacija, sport i popis igrača više ne moraju biti razbacani po različitim porukama. U SportSyncu svaki termin ima jasno definirane podatke i vlastiti popis sudionika.",
            "Termin možeš postaviti kao redovnu aktivnost svoje ekipe. Igrači potvrđuju dolazak u aplikaciji, a organizator u svakom trenutku vidi koliko je mjesta popunjeno.",
          ],
          bullets: ["Redovni sportski termini", "Potvrde dolaska", "Grupni chat svakog termina", "Privatne poruke između korisnika"],
        },
        {
          title: "Manje poruka, jasniji dogovor",
          paragraphs: [
            "Kod organizacije rekreativnog sporta najviše vremena često odlazi na provjeravanje tko dolazi. SportSync daje svim članovima ekipe isti aktualni pregled, pa nema potrebe za pretraživanjem starih poruka i ručnim vođenjem popisa.",
            "Ako netko otkaže, slobodno mjesto možeš podijeliti s prijateljima ili otvoriti drugim SportSync igračima. Tako organizacija ostaje povezana s terminom od prve potvrde do početka igre.",
          ],
        },
        {
          title: "Chat za ekipu i privatne razgovore",
          paragraphs: [
            "Svaki sportski termin ima vlastiti grupni chat u kojem članovi ekipe mogu dogovarati detalje, dijeliti obavijesti i razgovarati o svemu što je povezano s terminom.",
            "Za razgovore izvan grupe dostupan je i privatni DM chat. Svaki korisnik može izravno poslati poruku drugom korisniku u aplikaciji, bez dijeljenja privatnog broja mobitela ili drugih kontaktnih podataka.",
          ],
        },
        {
          title: "Za organizatore i igrače",
          paragraphs: [
            "Organizator dobiva kontrolu nad terminom i prijavama, dok igrači lakše prate svoje nadolazeće aktivnosti. Aplikacija je namijenjena stalnim ekipama, povremenim grupama i svima koji žele redovitije igrati rekreativni sport.",
          ],
        },
      ]}
      related={[
        { href: "/pronadi-igrace", label: "Kako pronaći dodatne igrače" },
        { href: "/nogometna-sezona-i-statistika", label: "Nogometne sezone i statistika" },
        { href: "/#kako-funkcionira", label: "Kako SportSync funkcionira" },
      ]}
    />
  );
}
