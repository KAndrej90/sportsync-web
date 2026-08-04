"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { addLanguageToHref } from "./language";
import { useLanguage } from "./LanguageProvider";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { language } = useLanguage();
  return <Link href={addLanguageToHref(href, language)} {...props} />;
}
