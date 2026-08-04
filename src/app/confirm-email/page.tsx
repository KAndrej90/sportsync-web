"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import LogoAndName from "../assets/logoAndName.svg"
import styles from "./confirm-email.module.css"
import LanguageChooser from "../localization/LanguageChooser"
import LocalizedLink from "../localization/LocalizedLink"
import { useLanguage } from "../localization/LanguageProvider"

const API_BASE_URL = "https://sport-sync-api-5xwpa.ondigitalocean.app"
const MOBILE_DEEP_LINK_SCHEME = "myapp"

type Status = "loading" | "success" | "error"

const copy = {
  hr: {
    home: "SportSync početna", logo: "SportSync logotip", loading: "Potvrđujemo tvoj email…", wait: "Trenutak, molimo pričekaj.", success: "Email potvrđen!", successHint: "Tvoj SportSync račun je sada aktiviran. Otvori aplikaciju i prijavi se za nastavak.", open: "Otvori aplikaciju", failed: "Potvrda neuspješna", back: "Natrag na početnu", missing: "Nedostaje token za potvrdu. Provjeri jesi li otvorio ispravnu poveznicu iz emaila.", generic: "Nismo uspjeli potvrditi email. Molimo pokušajte ponovo. Ako problem i dalje bude prisutan, kontaktirajte podršku.", network: "Nismo uspjeli povezati se s poslužiteljem. Provjeri internetsku vezu i pokušaj ponovo.",
    errors: { "EmailConfirmation.InvalidToken": "Poveznica za potvrdu je neispravna. Zatraži novu iz aplikacije.", "EmailConfirmation.TokenExpired": "Poveznica za potvrdu je istekla. Zatraži novu iz aplikacije.", "EmailConfirmation.TokenAlreadyUsed": "Poveznica je već iskorištena. Ako si već potvrdio email, samo se prijavi u aplikaciju.", "EmailConfirmation.AlreadyConfirmed": "Email je već potvrđen. Prijavi se u aplikaciju za nastavak." },
  },
  en: {
    home: "SportSync home", logo: "SportSync logo", loading: "Confirming your email…", wait: "Please wait a moment.", success: "Email confirmed!", successHint: "Your SportSync account is now active. Open the app and sign in to continue.", open: "Open the app", failed: "Confirmation failed", back: "Back to home", missing: "The confirmation token is missing. Check that you opened the correct link from the email.", generic: "We could not confirm your email. Please try again. If the problem persists, contact support.", network: "We could not connect to the server. Check your internet connection and try again.",
    errors: { "EmailConfirmation.InvalidToken": "The confirmation link is invalid. Request a new one from the app.", "EmailConfirmation.TokenExpired": "The confirmation link has expired. Request a new one from the app.", "EmailConfirmation.TokenAlreadyUsed": "The confirmation link has already been used. If you have already confirmed your email, simply sign in to the app.", "EmailConfirmation.AlreadyConfirmed": "Your email has already been confirmed. Sign in to the app to continue." },
  },
}

export default function ConfirmEmailPage() {
  const { language } = useLanguage()
  const text = copy[language]
  const [status, setStatus] = useState<Status>("loading")
  const [errorKey, setErrorKey] = useState<string>("")

  const openApp = useCallback((ok: boolean) => {
    if (typeof window === "undefined") return
    window.location.href = `${MOBILE_DEEP_LINK_SCHEME}://email-confirmed?ok=${ok ? "1" : "0"}`
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get("token") ?? ""

    if (!token) {
      setStatus("error")
      setErrorKey("missing")
      return
    }

    const confirm = async () => {
      try {
        const res = await fetch(
          `${API_BASE_URL}/api/confirm-email?token=${encodeURIComponent(token)}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        )

        if (res.ok) {
          setStatus("success")
          // Auto-attempt to open the app after a short beat so the user can see
          // the success screen before the deep link fires.
          window.setTimeout(() => openApp(true), 900)
          return
        }

        let code = ""
        try {
          const body = await res.json()
          code = body?.code ?? ""
        } catch {
          // ignore json parse issues
        }

        setStatus("error")
        setErrorKey(code || "generic")
      } catch {
        setStatus("error")
        setErrorKey("network")
      }
    }

    confirm()
  }, [openApp])

  const errorMessage =
    errorKey === "missing"
      ? text.missing
      : errorKey === "network"
        ? text.network
        : text.errors[errorKey as keyof typeof text.errors] ?? text.generic

  return (
    <main className={styles.page}>
      <header className="hero-animate fixed inset-x-0 top-0 z-30 border-b border-[#141031] bg-gradient-to-r from-[#16112e]/98 via-[#1b1650]/95 to-[#141031]/98 shadow-[0_18px_45px_rgba(12,9,30,0.35)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 md:px-10">
          <div className="flex w-full items-center justify-between gap-3">
            <LocalizedLink href="/" aria-label={text.home} className="inline-flex">
              <Image
                src={LogoAndName}
                alt={text.logo}
                priority
                className="h-11 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
              />
            </LocalizedLink>
            <LanguageChooser compact />
          </div>
        </div>
      </header>

      <div className={styles.container}>
        {status === "loading" && (
          <>
            <div className={styles.spinner} aria-hidden="true" />
            <h1 className={styles.title}>{text.loading}</h1>
            <p className={styles.hint}>{text.wait}</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className={styles.iconSuccess} aria-hidden="true">✓</div>
            <h1 className={styles.title}>{text.success}</h1>
            <p className={styles.hint}>{text.successHint}</p>
            <div className={styles.buttonRow}>
              <button
                type="button"
                className={styles.button}
                onClick={() => openApp(true)}
              >
                {text.open}
              </button>
            </div>
          </>
        )}

        {status === "error" && (
          <>
            <div className={styles.iconError} aria-hidden="true">!</div>
            <h1 className={styles.title}>{text.failed}</h1>
            <p className={styles.error} role="alert">{errorMessage}</p>
            <div className={styles.buttonRow}>
              <LocalizedLink href="/" className={styles.buttonSecondary}>
                {text.back}
              </LocalizedLink>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
