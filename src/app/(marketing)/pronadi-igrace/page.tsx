import type { Metadata } from "next";
import SeoLandingPage from "../SeoLandingPage";

const path = "/pronadi-igrace";

export const metadata: Metadata = {
  title: "Pronađi igrače za nogomet i druge sportove",
  description: "Nedostaje vam igrač? Objavite slobodno mjesto na sportskom terminu i pronađite dodatne igrače uz SportSync.",
  alternates: { canonical: path },
  openGraph: {
    url: path,
    title: "Pronađi igrače za svoj sportski termin | SportSync",
    description: "Popunite slobodna mjesta kada netko iz ekipe otkaže.",
  },
};

export default function FindPlayersPage() {
  return (
    <SeoLandingPage
      path={path}
      eyebrow="Pronalazak igrača"
      title="Pronađi dodatnog igrača kada tvojoj ekipi netko nedostaje"
      lead="Objavi slobodno mjesto na postojećem terminu i poveži se s rekreativcima koji žele igrati. SportSync pomaže ekipama popuniti termin bez pokretanja dogovora ispočetka."
      sections={[
        {
          title: "Od slobodnog mjesta do pune ekipe",
          paragraphs: [
            "Kada igrač otkaže nogomet, košarku, padel ili drugi dogovoreni sport, organizator odmah vidi da se otvorilo mjesto. Poziv može prvo podijeliti s prijateljima, a zatim termin učiniti dostupnim drugim korisnicima aplikacije.",
            "Zainteresirani igrači vide relevantne informacije o aktivnosti prije slanja zahtjeva. Organizator tako zadržava pregled i kontrolu nad time tko se pridružuje ekipi.",
          ],
          bullets: ["Objava slobodnog mjesta", "Poziv prijateljima", "Zahtjevi za pridruživanje", "Ocjene nakon zajedničke igre"],
        },
        {
          title: "Pronađi ljude koji žele igrati isti sport",
          paragraphs: [
            "SportSync povezuje organizatore kojima nedostaje sudionik s igračima koji traže priliku za igru. Umjesto objava u nepovezanim grupama, traženje dodatnog igrača ostaje vezano uz konkretan termin, lokaciju i vrijeme.",
            "Nakon igre sudionici mogu ostaviti ocjenu iskustva. Ocjene pomažu zajednici graditi pouzdanije odnose i olakšavaju odluku koga ponovno pozvati.",
          ],
        },
        {
          title: "Najprije tvoja ekipa, zatim šira zajednica",
          paragraphs: [
            "SportSync nije zamjena za tvoju stalnu ekipu. Aplikacija najprije pomaže pratiti dolaske postojećih igrača, a mogućnost pronalaska novih koristiš onda kada se stvarno pojavi slobodno mjesto.",
          ],
        },
      ]}
      related={[
        { href: "/organizacija-sportskih-termina", label: "Organizacija sportskih termina" },
        { href: "/nogometna-sezona-i-statistika", label: "Nogometne sezone i statistika" },
        { href: "/#sportovi", label: "Podržani sportovi" },
      ]}
    />
  );
}
