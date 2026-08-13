import type { Metadata } from "next";
import NotFoundClient from "./NotFoundClient";

export const metadata: Metadata = {
  title: "Stranica nije pronađena",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundClient />;
}
