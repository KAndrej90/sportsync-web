import type { Metadata } from "next";
import FreeTrialSeasonContent from "./FreeTrialSeasonContent";

export const metadata: Metadata = {
  title: "Free Trial Season",
  description: "Zatražite besplatnu probnu sezonu za SportSync termin.",
};

export default function FreeTrialSeasonPage() {
  return <FreeTrialSeasonContent />;
}
