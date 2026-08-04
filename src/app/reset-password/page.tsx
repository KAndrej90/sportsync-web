"use client"

import { useState, useEffect } from "react"
import Image from "next/image";
import LogoAndName from "../assets/logoAndName.svg";
import styles from "./reset-password.module.css"
import LanguageChooser from "../localization/LanguageChooser";
import LocalizedLink from "../localization/LocalizedLink";
import { useLanguage } from "../localization/LanguageProvider";

const copy = {
  hr: {
    home: "SportSync početna", logo: "SportSync logotip", title: "Postavljanje nove lozinke", password: "Nova lozinka", passwordPlaceholder: "Unesite novu lozinku", confirm: "Potvrdi lozinku", confirmPlaceholder: "Ponovite novu lozinku", required: "Lozinka je obavezna.", min: "Lozinka mora imati najmanje 8 znakova.", lowercase: "Lozinka mora sadržavati barem jedno malo slovo.", uppercase: "Lozinka mora sadržavati barem jedno veliko slovo.", digit: "Lozinka mora sadržavati barem jednu brojku.", mismatch: "Lozinke se ne podudaraju", success: "Lozinka je uspješno promijenjena.", failure: "Nismo uspjeli promijeniti lozinku. Molimo pokušajte ponovo. Ako problem i dalje bude prisutan, kontaktirajte podršku.", saving: "Spremanje", submit: "Potvrdi", aria: "Forma za postavljanje nove lozinke",
  },
  en: {
    home: "SportSync home", logo: "SportSync logo", title: "Set a new password", password: "New password", passwordPlaceholder: "Enter a new password", confirm: "Confirm password", confirmPlaceholder: "Repeat the new password", required: "Password is required.", min: "Password must be at least 8 characters long.", lowercase: "Password must contain at least one lowercase letter.", uppercase: "Password must contain at least one uppercase letter.", digit: "Password must contain at least one number.", mismatch: "Passwords do not match", success: "Your password has been changed successfully.", failure: "We could not change your password. Please try again. If the problem persists, contact support.", saving: "Saving", submit: "Confirm", aria: "Set new password form",
  },
};

export default function ResetPasswordPage() {
  const { language } = useLanguage()
  const text = copy[language]
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const [token, setToken] = useState("")

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      setToken(params.get("token") ?? "")
    } catch (_err) {
      setToken("")
    }
  }, [])

  const validate = () => {
    if (!password) {
      setError(text.required)
      return false
    }

    if (password.length < 8) {
      setError(text.min)
      return false
    }

    if (!/[a-zčćđšž]/.test(password)) {
      setError(text.lowercase)
      return false
    }

    if (!/[A-ZČĆĐŠŽ]/.test(password)) {
      setError(text.uppercase)
      return false
    }

    if (!/\d/.test(password)) {
      setError(text.digit)
      return false
    }

    if (password !== confirm) {
      setError(text.mismatch)
      return false
    }

    setError("")
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess("")
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch("https://sport-sync-api-5xwpa.ondigitalocean.app/api/reset-password?token=" + token + "&newPassword=" + password, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      })

      if (!res.ok) {
        throw new Error();
      }

      setSuccess(text.success)
      setPassword("")
      setConfirm("")
    } catch (err: unknown) {
      setError(text.failure)
    } finally {
      setLoading(false)
    }
  }

  const disabled = loading

  return (
    <main className={styles.page}>
      <header className="hero-animate fixed inset-x-0 top-0 z-30 border-b border-[#141031] bg-gradient-to-r from-[#16112e]/98 via-[#1b1650]/95 to-[#141031]/98 shadow-[0_18px_45px_rgba(12,9,30,0.35)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 md:px-10">
          <div className="flex items-center gap-3">
            <LocalizedLink href="/" aria-label={text.home} className="inline-flex">
              <Image
                src={LogoAndName}
                alt={text.logo}
                priority
                className="h-11 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
              />
            </LocalizedLink>
          </div>
          <LanguageChooser compact />
        </div>
      </header>
      <div className={styles.container}>
      <h1 className={styles.title}>{text.title}</h1>
      <form onSubmit={handleSubmit} aria-label={text.aria} className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">{text.password}</label>
          <input
            id="password"
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={disabled}
            autoComplete="new-password"
            placeholder={text.passwordPlaceholder}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="confirm">{text.confirm}</label>
          <input
            id="confirm"
            className={styles.input}
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            disabled={disabled}
            autoComplete="new-password"
            placeholder={text.confirmPlaceholder}
          />
        </div>

        {error && (
          <div role="alert" className={styles.error}>{error}</div>
        )}

        {success && (
          <div role="status" className={styles.success}>{success}</div>
        )}

        <div className={styles.buttonRow}>
          <button type="submit" disabled={disabled} className={styles.button}>
            {loading ? text.saving : text.submit}
          </button>
        </div>
      </form>
      </div>
    </main>

  )
}
