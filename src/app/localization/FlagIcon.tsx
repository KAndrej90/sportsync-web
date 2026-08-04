import type { Language } from "./language"

export default function FlagIcon({ language, compact = false }: { language: Language; compact?: boolean }) {
  const className = compact ? "h-[12px] w-[18px]" : "h-[15px] w-[22px]"

  if (language === "hr") {
    const checks = Array.from({ length: 25 }, (_, index) => {
      const row = Math.floor(index / 5)
      const column = index % 5
      return <rect key={index} x={24 + column * 2.4} y={10 + row * 2.4} width="2.4" height="2.4" fill={(row + column) % 2 === 0 ? "#e31d1c" : "#fff"} />
    })

    return (
      <svg className={`${className} shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]`} viewBox="0 0 60 40" role="img" aria-label="Croatian flag">
        <path fill="#e31d1c" d="M0 0h60v13.34H0z" />
        <path fill="#fff" d="M0 13.33h60v13.34H0z" />
        <path fill="#171796" d="M0 26.66h60V40H0z" />
        <path fill="#fff" stroke="#e31d1c" strokeWidth="1" d="M23 8.5h14v13.2c0 5.2-3.2 8.3-7 10.1-3.8-1.8-7-4.9-7-10.1z" />
        {checks}
      </svg>
    )
  }

  return (
    <svg className={`${className} shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]`} viewBox="0 0 60 40" role="img" aria-label="United Kingdom flag">
      <defs><clipPath id="uk-flag-clip"><path d="M0 0h60v40H0z" /></clipPath></defs>
      <g clipPath="url(#uk-flag-clip)">
        <path fill="#012169" d="M0 0h60v40H0z" />
        <path stroke="#fff" strokeWidth="9" d="m-4-3 68 46M64-3-4 43" />
        <path stroke="#c8102e" strokeWidth="4" d="m-4-3 68 46M64-3-4 43" />
        <path stroke="#fff" strokeWidth="13" d="M30 0v40M0 20h60" />
        <path stroke="#c8102e" strokeWidth="7" d="M30 0v40M0 20h60" />
      </g>
    </svg>
  )
}
