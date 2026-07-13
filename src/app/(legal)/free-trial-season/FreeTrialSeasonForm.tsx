"use client";

import { useState } from "react";

const apiBase = "https://sport-sync-api-5xwpa.ondigitalocean.app/api";

export default function FreeTrialSeasonForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [eventName, setEventName] = useState("");
  const [teams, setTeams] = useState(["", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const updateTeam = (index: number, value: string) => {
    setTeams((currentTeams) =>
      currentTeams.map((team, teamIndex) =>
        teamIndex === index ? value : team,
      ),
    );
  };

  const addTeam = () => {
    setTeams((currentTeams) => [...currentTeams, ""]);
  };

  const removeTeam = (index: number) => {
    setTeams((currentTeams) =>
      currentTeams.length <= 2
        ? currentTeams
        : currentTeams.filter((_, teamIndex) => teamIndex !== index),
    );
  };

  const validate = () => {
    const filledTeams = teams.map((team) => team.trim()).filter(Boolean);

    if (!firstName.trim()) {
      setError("Ime je obavezno.");
      return false;
    }
    if (!lastName.trim()) {
      setError("Prezime je obavezno.");
      return false;
    }
    if (!email.trim()) {
      setError("Email je obavezan.");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Unesite ispravnu email adresu.");
      return false;
    }
    if (!eventName.trim()) {
      setError("Naziv termina je obavezan.");
      return false;
    }
    if (filledTeams.length < 2) {
      setError("Unesite najmanje dva naziva tima.");
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
      const name = `${firstName.trim()} ${lastName.trim()}`;
      const filledTeams = teams.map((team) => team.trim()).filter(Boolean);
      const message = [
        "Zahtjev za Free Trial Season",
        "",
        `Naziv termina: ${eventName.trim()}`,
        "Timovi:",
        ...filledTeams.map((team, index) => `${index + 1}. ${team}`),
      ].join("\n");

      const res = await fetch(apiBase + "/support-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: email.trim(), message }),
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
      setSuccess(
        data?.message ||
          "Zahtjev je poslan. Javit ćemo vam se e-mailom s potvrdom i sljedećim koracima.",
      );
      setFirstName("");
      setLastName("");
      setEmail("");
      setEventName("");
      setTeams(["", ""]);
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
      aria-label="Free trial Season forma"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Ime"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="rounded-2xl border border-[#cfd3f4] bg-[#f8f9ff] px-4 py-3 text-[#222222] outline-none transition placeholder:text-[#7a8093] focus:border-[#3026C1] focus:bg-white focus:ring-4 focus:ring-[#3026C1]/10"
          required
        />
        <input
          type="text"
          placeholder="Prezime"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="rounded-2xl border border-[#cfd3f4] bg-[#f8f9ff] px-4 py-3 text-[#222222] outline-none transition placeholder:text-[#7a8093] focus:border-[#3026C1] focus:bg-white focus:ring-4 focus:ring-[#3026C1]/10"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-2xl border border-[#cfd3f4] bg-[#f8f9ff] px-4 py-3 text-[#222222] outline-none transition placeholder:text-[#7a8093] focus:border-[#3026C1] focus:bg-white focus:ring-4 focus:ring-[#3026C1]/10"
          required
        />
        <input
          type="text"
          placeholder="Naziv termina"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="rounded-2xl border border-[#cfd3f4] bg-[#f8f9ff] px-4 py-3 text-[#222222] outline-none transition placeholder:text-[#7a8093] focus:border-[#3026C1] focus:bg-white focus:ring-4 focus:ring-[#3026C1]/10"
          required
        />
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <label className="text-sm font-semibold text-[#1f2430]">
            Nazivi timova
          </label>
          <button
            type="button"
            onClick={addTeam}
            className="rounded-full border border-[#3026C1]/25 px-4 py-2 text-sm font-semibold text-[#3026C1] transition hover:bg-[#3026C1]/5"
          >
            Dodaj tim
          </button>
        </div>

        {teams.map((team, index) => (
          <div key={index} className="flex gap-3">
            <input
              type="text"
              placeholder={`Tim ${index + 1}`}
              value={team}
              onChange={(e) => updateTeam(index, e.target.value)}
              className="min-w-0 flex-1 rounded-2xl border border-[#cfd3f4] bg-[#f8f9ff] px-4 py-3 text-[#222222] outline-none transition placeholder:text-[#7a8093] focus:border-[#3026C1] focus:bg-white focus:ring-4 focus:ring-[#3026C1]/10"
              required={index < 2}
            />
            {teams.length > 2 && (
              <button
                type="button"
                onClick={() => removeTeam(index)}
                className="shrink-0 rounded-full border border-[#efb1b1] px-4 py-2 text-sm font-semibold text-[#a12d2d] transition hover:bg-[#fff1f1]"
                aria-label={`Ukloni tim ${index + 1}`}
              >
                Ukloni
              </button>
            )}
          </div>
        ))}
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

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full bg-[#89FC00] px-6 py-3 text-sm font-semibold text-[#3026C1] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Šaljem..." : "Zatraži probnu sezonu"}
      </button>
    </form>
  );
}
