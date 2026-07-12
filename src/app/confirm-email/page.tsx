"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import LogoAndName from "../assets/logoAndName.svg"
import styles from "./confirm-email.module.css"

const API_BASE_URL = "https://sport-sync-api-5xwpa.ondigitalocean.app"
const MOBILE_DEEP_LINK_SCHEME = "myapp"

type Status = "loading" | "success" | "error"

const errorMessages: Record<string, string> = {
  "EmailConfirmation.InvalidToken":
    "Poveznica za potvrdu je neispravna. Zatraži novu iz aplikacije.",
  "EmailConfirmation.TokenExpired":
    "Poveznica za potvrdu je istekla. Zatraži novu iz aplikacije.",
  "EmailConfirmation.TokenAlreadyUsed":
    "Poveznica je već iskorištena. Ako si već potvrdio email, samo se prijavi u aplikaciju.",
  "EmailConfirmation.AlreadyConfirmed":
    "Email je već potvrđen. Prijavi se u aplikaciju za nastavak.",
}

export default function ConfirmEmailPage() {
  const [status, setStatus] = useState<Status>("loading")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const openApp = useCallback((ok: boolean) => {
    if (typeof window === "undefined") return
    window.location.href = `${MOBILE_DEEP_LINK_SCHEME}://email-confirmed?ok=${ok ? "1" : "0"}`
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get("token") ?? ""

    if (!token) {
      setStatus("error")
      setErrorMessage(
        "Nedostaje token za potvrdu. Provjeri jesi li otvorio ispravnu poveznicu iz emaila."
      )
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
        setErrorMessage(
          errorMessages[code] ??
            "Nismo uspjeli potvrditi email. Molimo pokušajte ponovo. Ako problem i dalje bude prisutan, kontaktirajte podršku."
        )
      } catch {
        setStatus("error")
        setErrorMessage(
          "Nismo uspjeli povezati se s poslužiteljem. Provjeri internetsku vezu i pokušaj ponovo."
        )
      }
    }

    confirm()
  }, [openApp])

  return (
    <main className={styles.page}>
      <header className="hero-animate fixed inset-x-0 top-0 z-30 border-b border-[#141031] bg-gradient-to-r from-[#16112e]/98 via-[#1b1650]/95 to-[#141031]/98 shadow-[0_18px_45px_rgba(12,9,30,0.35)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 md:px-10">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="SportSync početna" className="inline-flex">
              <Image
                src={LogoAndName}
                alt="SportSync logotip"
                priority
                className="h-11 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
              />
            </Link>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        {status === "loading" && (
          <>
            <div className={styles.spinner} aria-hidden="true" />
            <h1 className={styles.title}>Potvrđujemo tvoj email…</h1>
            <p className={styles.hint}>Trenutak, molimo pričekaj.</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className={styles.iconSuccess} aria-hidden="true">✓</div>
            <h1 className={styles.title}>Email potvrđen!</h1>
            <p className={styles.hint}>
              Tvoj SportSync račun je sada aktiviran. Otvori aplikaciju i prijavi se za nastavak.
            </p>
            <div className={styles.buttonRow}>
              <button
                type="button"
                className={styles.button}
                onClick={() => openApp(true)}
              >
                Otvori aplikaciju
              </button>
            </div>
          </>
        )}

        {status === "error" && (
          <>
            <div className={styles.iconError} aria-hidden="true">!</div>
            <h1 className={styles.title}>Potvrda neuspješna</h1>
            <p className={styles.error} role="alert">{errorMessage}</p>
            <div className={styles.buttonRow}>
              <Link href="/" className={styles.buttonSecondary}>
                Natrag na početnu
              </Link>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
