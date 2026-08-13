export const LANGUAGE_STORAGE_KEY = "sportsync_language";

export const supportedLanguages = ["hr", "en"] as const;
export type Language = (typeof supportedLanguages)[number];

export const queryLanguageRoutes = new Set([
  "/reset-password",
  "/confirm-email",
  "/privacy",
  "/terms",
  "/free-trial-season",
]);

export function usesQueryLanguage(pathname: string): boolean {
  return (
    queryLanguageRoutes.has(pathname) ||
    pathname.startsWith("/match-announcements/")
  );
}

export function parseLanguage(value: string | null | undefined): Language | null {
  const normalized = value?.trim().toLowerCase();
  return normalized === "hr" || normalized === "en" ? normalized : null;
}

export function addLanguageToHref(href: string, language: Language): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const [withoutHash, hash] = href.split("#", 2);
  const url = new URL(withoutHash, "https://sportsync.hr");
  url.searchParams.set("language", language);

  return `${url.pathname}${url.search}${hash ? `#${hash}` : ""}`;
}
