import type { Metadata } from "next";
import MatchAnnouncementPage from "./MatchAnnouncementPage";

type PageProps = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: "Objavljena utakmica",
  description: "Detalji objavljene utakmice na SportSyncu.",
  robots: { index: false, follow: false },
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <MatchAnnouncementPage announcementId={id} />;
}
