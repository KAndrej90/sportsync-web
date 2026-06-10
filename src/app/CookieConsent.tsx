"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const GA_ID = "G-54SYQBBVX7";
const CONSENT_KEY = "sportsync_analytics_consent";

export default function CookieConsent() {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "granted") {
      setConsent("granted");
    } else if (stored === "denied") {
      setConsent("denied");
    } else {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "granted");
    setConsent("granted");
    setVisible(false);
  }

  function deny() {
    localStorage.setItem(CONSENT_KEY, "denied");
    setConsent("denied");
    setVisible(false);
  }

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {visible && (
        <div
          role="dialog"
          aria-label="Kolačići"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: "#ffffff",
            borderTop: "1px solid #ddd",
            padding: "16px 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            boxShadow: "0 -2px 12px rgba(0,0,0,0.08)",
            fontSize: "14px",
          }}
        >
          <p style={{ margin: 0, maxWidth: 600 }}>
            Koristimo kolačiće kako bismo
            poboljšali korisničko iskustvo. Više informacija u našoj{" "}
            <a href="/cookies" style={{ color: "#3026c1", textDecoration: "underline" }}>
              Politici kolačića
            </a>
            .
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={accept}
              style={{
                padding: "8px 20px",
                background: "#3026c1",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              Prihvaćam
            </button>
            <button
              onClick={deny}
              style={{
                padding: "8px 20px",
                background: "transparent",
                color: "#222",
                border: "1px solid #ccc",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              Odbijam
            </button>
          </div>
        </div>
      )}
    </>
  );
}
