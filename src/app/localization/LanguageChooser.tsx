"use client";

import { useLanguage } from "./LanguageProvider";
import FlagIcon from "./FlagIcon";

const options = [
  { language: "hr" as const, label: "HR" },
  { language: "en" as const, label: "EN" },
];

export default function LanguageChooser({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1"
      role="group"
      aria-label={language === "hr" ? "Odabir jezika" : "Language selection"}
    >
      {options.map((option) => {
        const selected = language === option.language;
        return (
          <button
            key={option.language}
            type="button"
            onClick={() => setLanguage(option.language)}
            aria-pressed={selected}
            aria-label={option.language === "hr" ? "Hrvatski" : "English"}
            className={`inline-flex cursor-pointer items-center justify-center rounded-full font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              compact ? "gap-1 px-2 py-1 text-[0.68rem]" : "gap-1.5 px-3 py-1.5 text-xs"
            } ${
              selected
                ? "bg-white text-[#3026C1] shadow-sm"
                : "text-white/75 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span aria-hidden="true"><FlagIcon language={option.language} compact={compact} /></span>
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
