"use client"

import type { ReactNode } from "react"
import { useLanguage } from "../localization/LanguageProvider"

export default function LanguageVariant({ children, english }: { children: ReactNode; english: ReactNode }) {
  const { language } = useLanguage()
  return language === "en" ? english : children
}
