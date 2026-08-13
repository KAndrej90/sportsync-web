import type { Metadata } from "next";
import FreeTrialSeasonContent from "./FreeTrialSeasonContent";

export const metadata: Metadata = {
  title: "Besplatna probna nogometna sezona",
  description: "Isprobajte SportSync sezonu za nogometni termin: tablica, rezultati, statistika, postignuća i trofeji na jednom mjestu.",
  alternates: { canonical: "/free-trial-season" },
  openGraph: {
    url: "/free-trial-season",
    title: "Besplatna probna nogometna sezona | SportSync",
    description: "Vodite tablicu, rezultate i statistiku svoje rekreativne nogometne sezone u SportSyncu.",
  },
};

export default function FreeTrialSeasonPage() {
  return <FreeTrialSeasonContent />;
}
