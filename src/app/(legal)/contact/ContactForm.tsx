"use client";

import { useState } from "react";
import { useLanguage } from "../../localization/LanguageProvider";

export default function ContactForm() {
  const { language } = useLanguage();
  const text = language === "hr"
    ? {
        emailRequired: "Email je obavezan.", emailInvalid: "Unesite ispravnu email adresu.",
        messageRequired: "Poruka ne smije biti prazna.", success: "Poruka je poslana. Odgovorit ćemo uskoro.",
        aria: "Kontakt forma", name: "Ime i prezime (opcionalno)", email: "Email (obavezno)",
        message: "Poruka", messagePlaceholder: "Opis problema ili pitanje", sending: "Šaljem...", send: "Pošalji poruku",
      }
    : {
        emailRequired: "Email is required.", emailInvalid: "Enter a valid email address.",
        messageRequired: "Message cannot be empty.", success: "Your message has been sent. We will respond soon.",
        aria: "Contact form", name: "Full name (optional)", email: "Email (required)",
        message: "Message", messagePlaceholder: "Describe the problem or enter your question", sending: "Sending...", send: "Send message",
      };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const apiBase = "https://sport-sync-api-5xwpa.ondigitalocean.app/api";

  const validate = () => {
    if (!email) {
      setError(text.emailRequired);
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError(text.emailInvalid);
      return false;
    }
    if (!message) {
      setError(text.messageRequired);
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch(apiBase + "/support-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        let msg = `Request failed: ${res.status}`;
        try {
          const body = await res.json();
          if (body?.message) msg = body.message;
        } catch {}
        throw new Error(msg);
      }

      const data = await res.json().catch(() => ({}));
      setSuccess(data?.message || text.success);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-5"
      aria-label={text.aria}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder={text.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-2xl border border-[#cfd3f4] bg-[#f8f9ff] px-4 py-3 text-[#222222] outline-none transition placeholder:text-[#7a8093] focus:border-[#3026C1] focus:bg-white focus:ring-4 focus:ring-[#3026C1]/10"
        />
        <input
          type="email"
          placeholder={text.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-2xl border border-[#cfd3f4] bg-[#f8f9ff] px-4 py-3 text-[#222222] outline-none transition placeholder:text-[#7a8093] focus:border-[#3026C1] focus:bg-white focus:ring-4 focus:ring-[#3026C1]/10"
        />
      </div>

      <div>
        <label className="sr-only" htmlFor="message">
          {text.message}
        </label>
        <textarea
          id="message"
          placeholder={text.messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[160px] w-full rounded-[1.5rem] border border-[#cfd3f4] bg-[#f8f9ff] px-4 py-3 text-[#222222] outline-none transition placeholder:text-[#7a8093] focus:border-[#3026C1] focus:bg-white focus:ring-4 focus:ring-[#3026C1]/10"
          required
        />
      </div>

      {error && (
        <div
          role="alert"
          className="rounded-2xl border border-[#efb1b1] bg-[#fff1f1] px-4 py-3 text-sm text-[#a12d2d]"
        >
          {error}
        </div>
      )}
      {success && (
        <div
          role="status"
          className="rounded-2xl border border-[#bde486] bg-[#f4ffe6] px-4 py-3 text-sm text-[#345b08]"
        >
          {success}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-[#89FC00] px-6 py-3 text-sm font-semibold text-[#3026C1] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? text.sending : text.send}
        </button>
      </div>
    </form>
  );
}
