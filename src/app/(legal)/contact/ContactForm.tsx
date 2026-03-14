"use client"

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
        } catch (_) {}
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
    <form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-label="Kontakt forma">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Ime i prezime (opcionalno)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2"
        />
        <input
          type="email"
          placeholder="Email (obavezno)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="sr-only" htmlFor="message">Poruka</label>
        <textarea
          id="message"
          placeholder="Opis problema ili pitanje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 min-h-[120px]"
          required
        />
      </div>

      {error && <div role="alert" className="text-sm text-red-600">{error}</div>}
      {success && <div role="status" className="text-sm text-green-600">{success}</div>}

      <div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-[#3B28CC] px-5 py-2 text-sm font-semibold text-white disabled:opacity-50"
        >
          {loading ? "Šaljem..." : "Pošalji poruku"}
        </button>
      </div>
    </form>
  );
}
