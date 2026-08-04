"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  LANGUAGE_STORAGE_KEY,
  Language,
  parseLanguage,
  queryLanguageRoutes,
} from "./language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: "hr",
  setLanguage: () => undefined,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [language, setLanguageState] = useState<Language>("hr");

  useEffect(() => {
    const queryLanguage = queryLanguageRoutes.has(pathname)
      ? parseLanguage(searchParams.get("language"))
      : null;
    const storedLanguage = parseLanguage(
      window.localStorage.getItem(LANGUAGE_STORAGE_KEY),
    );
    const resolvedLanguage = queryLanguage ?? storedLanguage ?? "hr";

    setLanguageState(resolvedLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, resolvedLanguage);
    document.documentElement.lang = resolvedLanguage;
  }, [pathname, searchParams]);

  const setLanguage = useCallback(
    (nextLanguage: Language) => {
      setLanguageState(nextLanguage);
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
      document.documentElement.lang = nextLanguage;

      if (queryLanguageRoutes.has(pathname)) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("language", nextLanguage);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }
    },
    [pathname, router, searchParams],
  );

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
