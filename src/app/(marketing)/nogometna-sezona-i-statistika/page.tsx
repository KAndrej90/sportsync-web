import type { Metadata } from "next";
import SeoLandingPage from "../SeoLandingPage";

const path = "/nogometna-sezona-i-statistika";

export const metadata: Metadata = {
  title: "Nogometna tablica, rezultati i statistika sezone",
  description: "Vodite rekreativnu nogometnu sezonu uz tablicu, rezultate, strijelce, asistencije, MVP igrače, postignuća i trofeje.",
  alternates: { canonical: path },
  openGraph: {
    url: path,
    title: "Nogometna sezona, tablica i statistika | SportSync",
    description: "Rezultati, poredak i statistika rekreativne nogometne ekipe na jednom mjestu.",
  },
};

export default function FootballSeasonPage() {
  return (
    <SeoLandingPage
      path={path}
      eyebrow="Nogometne sezone"
      title="Vodi tablicu, rezultate i statistiku rekreativne nogometne sezone"
      lead="Poveži utakmice svog redovnog nogometnog termina u sezonu. SportSync čuva rezultate, poredak, strijelce, asistencije, MVP igrače, postignuća i trofeje."
      sections={[
        {
          title: "Cijela nogometna sezona u džepu",
          paragraphs: [
            "Nakon svake utakmice administratori unose rezultat i statistiku, a sudionici termina mogu pratiti razvoj sezone. Tablica se nadopunjuje rezultatima, dok pojedinačni učinci igrača ostaju sačuvani kroz cijelu sezonu.",
            "Funkcionalnost je napravljena za rekreativne ekipe koje žele više od popisa dolazaka, ali ne žele komplicirane tablice i ručni izračun poretka.",
          ],
          bullets: ["Tablica i rezultati", "Strijelci i asistencije", "MVP igrači", "Postignuća i trofeji"],
        },
        {
          title: "Od prvog kola do završnog poretka",
          paragraphs: [
            "Nova sezona povezuje utakmice jednog SportSync nogometnog termina. Organizatori mogu unositi ekipe, uređivati utakmice i pratiti rezultate, a završena sezona ostaje dostupna sudionicima za pregled.",
            "Statistika daje dodatni motiv redovnoj igri i čuva priču ekipe koja bi inače ostala samo u porukama ili nepovezanim proračunskim tablicama.",
          ],
        },
        {
          title: "Isprobaj sezonu sa svojom ekipom",
          paragraphs: [
            "Ako već vodite redovni nogometni termin u SportSyncu, možete zatražiti besplatnu probnu sezonu i provjeriti kako tablica, rezultati i statistika odgovaraju vašem načinu igre.",
          ],
        },
      ]}
      related={[
        { href: "/free-trial-season", label: "Zatraži besplatnu probnu sezonu" },
        { href: "/organizacija-sportskih-termina", label: "Organizacija sportskih termina" },
        { href: "/pronadi-igrace", label: "Pronađi dodatne igrače" },
      ]}
    />
  );
}
