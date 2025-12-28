
"use client"

import { useState, useEffect } from "react"
import Image from "next/image";
import LogoAndName from "../assets/logoAndName.svg";
import styles from "./reset-password.module.css"

export default function ResetPasswordPage() {
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
    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      return false
    }
    if (password !== confirm) {
      setError("Passwords do not match")
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
        let msg = `Request failed: ${res.status}`
        try {
          const body = await res.json()
          if (body?.message) msg = body.message
        } catch (_) {}
        throw new Error(msg)
      }

      const data = await res.json().catch(() => ({}))
      setSuccess(data?.message || "Password reset successfully.")
      setPassword("")
      setConfirm("")
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to reset password. Please try again.")
      } else {
        setError(String(err) || "Failed to reset password. Please try again.")
      }
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
                    <Image
                      src={LogoAndName}
                      alt="SportSync logotip"
                      priority
                      className="h-11 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                    />
                  </div>
                </div>
              </header>
      <div className={styles.container}>
      <h1 className={styles.title}>Reset your password</h1>
      <form onSubmit={handleSubmit} aria-label="Reset password form" className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">New password</label>
          <input
            id="password"
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={disabled}
            autoComplete="new-password"
            placeholder="Enter new password"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="confirm">Confirm password</label>
          <input
            id="confirm"
            className={styles.input}
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            disabled={disabled}
            autoComplete="new-password"
            placeholder="Repeat new password"
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
            {loading ? "Saving…" : "Reset password"}
          </button>
        </div>
      </form>
      </div>
    </main>

  )
}
