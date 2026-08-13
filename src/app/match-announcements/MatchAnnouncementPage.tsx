"use client";

import Image from "next/image";
import {
  CalendarDays,
  CircleDollarSign,
  MapPin,
  Trophy,
  UserRoundPlus,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import LogoAndName from "../assets/logoAndName.svg";
import LanguageChooser from "../localization/LanguageChooser";
import LocalizedLink from "../localization/LocalizedLink";
import { useLanguage } from "../localization/LanguageProvider";
import styles from "./match-announcement.module.css";

const API_BASE_URL = "https://sport-sync-api-5xwpa.ondigitalocean.app/api";
const MOBILE_DEEP_LINK_SCHEME = "myapp";
const ANDROID_PACKAGE = "com.andrejk90.SPORTSYNC";
const GOOGLE_PLAY_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;
const APP_STORE_URL = "https://apps.apple.com/hr/app/sportsync/id6758768052";

type PageStatus = "loading" | "ready" | "not-found" | "closed" | "error";
type UnknownRecord = Record<string, unknown>;

type Announcement = {
  eventName: string;
  sportType: string;
  address: string;
  objectName: string;
  startsAt: string;
  pricePerPlayer: number | null;
  missingPlayers: number | null;
};

const copy = {
  hr: {
    home: "SportSync početna",
    logo: "SportSync logotip",
    eyebrow: "Otvorena utakmica",
    title: "Detalji utakmice",
    loading: "Učitavamo utakmicu…",
    loadingHint: "Još samo trenutak.",
    labels: {
      sport: "Sport",
      location: "Lokacija",
      date: "Datum i vrijeme",
      price: "Cijena po igraču",
      missing: "Nedostaje igrača",
    },
    apply: "Prijavi se",
    notFound: "Utakmica nije pronađena",
    notFoundHint: "Provjerite poveznicu ili pronađite drugu utakmicu u aplikaciji.",
    closed: "Utakmica više nije objavljena. Igrači su se skupili.",
    closedHint: "Želite li pristup više utakmica?",
    download: "Skini aplikaciju",
    error: "Trenutačno ne možemo učitati utakmicu.",
    errorHint: "Pokušajte ponovno za nekoliko trenutaka.",
    retry: "Pokušaj ponovno",
    free: "Besplatno",
    unknown: "Nije navedeno",
  },
  en: {
    home: "SportSync home",
    logo: "SportSync logo",
    eyebrow: "Open match",
    title: "Match details",
    loading: "Loading the match…",
    loadingHint: "Just a moment.",
    labels: {
      sport: "Sport",
      location: "Location",
      date: "Date and time",
      price: "Price per player",
      missing: "Players needed",
    },
    apply: "Join match",
    notFound: "Match not found",
    notFoundHint: "Check the link or find another match in the app.",
    closed: "This match is no longer published. The team is complete.",
    closedHint: "Would you like access to more matches?",
    download: "Download the app",
    error: "We can’t load this match right now.",
    errorHint: "Please try again in a few moments.",
    retry: "Try again",
    free: "Free",
    unknown: "Not provided",
  },
};

function asRecord(value: unknown): UnknownRecord {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as UnknownRecord)
    : {};
}

function firstValue(record: UnknownRecord, keys: string[]): unknown {
  for (const key of keys) {
    if (record[key] !== undefined && record[key] !== null) return record[key];
  }
  return undefined;
}

function asText(value: unknown): string {
  if (typeof value === "string") return value.trim();
  if (typeof value === "number") return String(value);
  if (value && typeof value === "object") {
    return asText(firstValue(asRecord(value), ["name", "title", "label", "value"]));
  }
  return "";
}

function asNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const number = Number(value.replace(",", "."));
    return Number.isFinite(number) ? number : null;
  }
  return null;
}

function normalizeAnnouncement(payload: unknown): Announcement {
  const outer = asRecord(payload);
  const nested = asRecord(firstValue(outer, ["data", "announcement", "result"]));
  const source = Object.keys(nested).length > 0 ? nested : outer;
  const location = asRecord(firstValue(source, ["location", "venue", "sportsObject"]));

  return {
    eventName: asText(firstValue(source, ["eventName", "name", "title"])),
    sportType: asText(firstValue(source, ["sportType", "sportName", "sport"])),
    address:
      asText(firstValue(source, ["address", "locationAddress"])) ||
      asText(firstValue(location, ["address", "formattedAddress"])),
    objectName:
      asText(firstValue(source, ["objectName", "venueName", "facilityName"])) ||
      asText(firstValue(location, ["objectName", "venueName", "name"])),
    startsAt: asText(
      firstValue(source, [
        "dateTime",
        "startDateTime",
        "startsAt",
        "startTime",
        "eventDateTime",
        "date",
      ]),
    ),
    pricePerPlayer: asNumber(
      firstValue(source, ["pricePerPlayer", "playerPrice", "price"]),
    ),
    missingPlayers: asNumber(
      firstValue(source, [
        "missingPlayers",
        "missingPlayersCount",
        "numberOfMissingPlayers",
        "playersMissing",
      ]),
    ),
  };
}

function getStoreUrl() {
  const userAgent = navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod|macintosh/.test(userAgent)
    ? APP_STORE_URL
    : GOOGLE_PLAY_URL;
}

function openAppOrStore(announcementId: string) {
  const encodedId = encodeURIComponent(announcementId);
  const deepLinkPath = `match-announcements/${encodedId}`;
  const userAgent = navigator.userAgent.toLowerCase();

  if (/android/.test(userAgent)) {
    const fallback = encodeURIComponent(GOOGLE_PLAY_URL);
    window.location.href = `intent://${deepLinkPath}#Intent;scheme=${MOBILE_DEEP_LINK_SCHEME};package=${ANDROID_PACKAGE};S.browser_fallback_url=${fallback};end`;
    return;
  }

  if (/iphone|ipad|ipod/.test(userAgent)) {
    let appOpened = false;
    const markOpened = () => {
      if (document.hidden) appOpened = true;
    };
    document.addEventListener("visibilitychange", markOpened, { once: true });
    window.location.href = `${MOBILE_DEEP_LINK_SCHEME}://${deepLinkPath}`;
    window.setTimeout(() => {
      document.removeEventListener("visibilitychange", markOpened);
      if (!appOpened) window.location.href = APP_STORE_URL;
    }, 1400);
    return;
  }

  window.location.href = getStoreUrl();
}

export default function MatchAnnouncementPage({
  announcementId,
}: {
  announcementId: string;
}) {
  const { language } = useLanguage();
  const text = copy[language];
  const [status, setStatus] = useState<PageStatus>("loading");
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);

  const loadAnnouncement = useCallback(async () => {
    setStatus("loading");
    setAnnouncement(null);

    try {
      const response = await fetch(
        `${API_BASE_URL}/match-announcements/${encodeURIComponent(announcementId)}`,
        { headers: { Accept: "application/json" } },
      );

      if (response.status === 404) {
        setStatus("not-found");
        return;
      }
      if (response.status === 204) {
        setStatus("closed");
        return;
      }
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const body = await response.json();
      if (body === null || body === undefined) {
        setStatus("closed");
        return;
      }

      setAnnouncement(normalizeAnnouncement(body));
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, [announcementId]);

  useEffect(() => {
    void loadAnnouncement();
  }, [loadAnnouncement]);

  const dateTime = useMemo(() => {
    if (!announcement?.startsAt) return text.unknown;
    const date = new Date(announcement.startsAt);
    if (Number.isNaN(date.getTime())) return announcement.startsAt;
    return new Intl.DateTimeFormat(language === "hr" ? "hr-HR" : "en-GB", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(date);
  }, [announcement?.startsAt, language, text.unknown]);

  const price = useMemo(() => {
    if (announcement?.pricePerPlayer === null || announcement?.pricePerPlayer === undefined) {
      return text.unknown;
    }
    if (announcement.pricePerPlayer === 0) return text.free;
    return new Intl.NumberFormat(language === "hr" ? "hr-HR" : "en-GB", {
      style: "currency",
      currency: "EUR",
    }).format(announcement.pricePerPlayer);
  }, [announcement?.pricePerPlayer, language, text.free, text.unknown]);

  const location = announcement
    ? [announcement.objectName, announcement.address].filter(Boolean).join(" · ") || text.unknown
    : text.unknown;

  const handleAppAction = () => openAppOrStore(announcementId);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <LocalizedLink href="/" aria-label={text.home} className={styles.logoLink}>
            <Image src={LogoAndName} alt={text.logo} priority className={styles.logo} />
          </LocalizedLink>
          <LanguageChooser compact />
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.card} aria-live="polite">
          {status === "loading" && (
            <div className={styles.state}>
              <div className={styles.spinner} aria-hidden="true" />
              <h1>{text.loading}</h1>
              <p>{text.loadingHint}</p>
            </div>
          )}

          {status === "ready" && announcement && (
            <>
              <div className={styles.heading}>
                <span>{text.eyebrow}</span>
                <h1>{announcement.eventName || text.title}</h1>
              </div>
              <dl className={styles.details}>
                <div className={styles.detail}>
                  <Trophy aria-hidden="true" />
                  <dt>{text.labels.sport}</dt>
                  <dd>{announcement.sportType || text.unknown}</dd>
                </div>
                <div className={styles.detail}>
                  <MapPin aria-hidden="true" />
                  <dt>{text.labels.location}</dt>
                  <dd>{location}</dd>
                </div>
                <div className={styles.detail}>
                  <CalendarDays aria-hidden="true" />
                  <dt>{text.labels.date}</dt>
                  <dd>{dateTime}</dd>
                </div>
                <div className={styles.detail}>
                  <CircleDollarSign aria-hidden="true" />
                  <dt>{text.labels.price}</dt>
                  <dd>{price}</dd>
                </div>
                <div className={`${styles.detail} ${styles.fullWidth}`}>
                  <UserRoundPlus aria-hidden="true" />
                  <dt>{text.labels.missing}</dt>
                  <dd>{announcement.missingPlayers ?? text.unknown}</dd>
                </div>
              </dl>
              <button type="button" className={styles.primaryButton} onClick={handleAppAction}>
                {text.apply}
              </button>
            </>
          )}

          {status === "not-found" && (
            <div className={styles.state}>
              <div className={styles.stateIcon} aria-hidden="true">?</div>
              <h1>{text.notFound}</h1>
              <p>{text.notFoundHint}</p>
            </div>
          )}

          {status === "closed" && (
            <div className={styles.state}>
              <div className={styles.completeIcon} aria-hidden="true">✓</div>
              <h1>{text.closed}</h1>
              <p>{text.closedHint}</p>
              <button type="button" className={styles.primaryButton} onClick={handleAppAction}>
                {text.download}
              </button>
            </div>
          )}

          {status === "error" && (
            <div className={styles.state}>
              <div className={styles.stateIcon} aria-hidden="true">!</div>
              <h1>{text.error}</h1>
              <p>{text.errorHint}</p>
              <button type="button" className={styles.secondaryButton} onClick={() => void loadAnnouncement()}>
                {text.retry}
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
