"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const apiBase = "https://sport-sync-api-5xwpa.ondigitalocean.app/api";

  const validate = () => {
    if (!email) {
      setError("Email je obavezan.");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Unesite ispravnu email adresu.");
      return false;
    }
    if (!message) {
      setError("Poruka ne smije biti prazna.");
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
      setSuccess(data?.message || "Poruka je poslana. Odgovorit ćemo uskoro.");
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
      aria-label="Kontakt forma"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Ime i prezime (opcionalno)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-2xl border border-[#cfd3f4] bg-[#f8f9ff] px-4 py-3 text-[#222222] outline-none transition placeholder:text-[#7a8093] focus:border-[#3026C1] focus:bg-white focus:ring-4 focus:ring-[#3026C1]/10"
        />
        <input
          type="email"
          placeholder="Email (obavezno)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-2xl border border-[#cfd3f4] bg-[#f8f9ff] px-4 py-3 text-[#222222] outline-none transition placeholder:text-[#7a8093] focus:border-[#3026C1] focus:bg-white focus:ring-4 focus:ring-[#3026C1]/10"
        />
      </div>

      <div>
        <label className="sr-only" htmlFor="message">
          Poruka
        </label>
        <textarea
          id="message"
          placeholder="Opis problema ili pitanje"
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
          {loading ? "Šaljem..." : "Pošalji poruku"}
        </button>
      </div>
    </form>
  );
}
