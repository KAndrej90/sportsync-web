"use client";

import { MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import styles from "./match-announcement.module.css";

type MatchLocationMapProps = {
  latitude: number;
  longitude: number;
  title: string;
  openMapLabel: string;
};

export default function MatchLocationMap({
  latitude,
  longitude,
  title,
  openMapLabel,
}: MatchLocationMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let cleanup = () => {};

    void import("leaflet").then((leaflet) => {
      if (cancelled) return;

      const map = leaflet.map(container, {
        center: [latitude, longitude],
        zoom: 16,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors',
          maxZoom: 19,
        })
        .addTo(map);

      const marker = leaflet.divIcon({
        className: styles.mapMarker,
        html: '<span aria-hidden="true"></span>',
        iconAnchor: [18, 42],
        iconSize: [36, 42],
      });

      leaflet.marker([latitude, longitude], { icon: marker }).addTo(map);
      window.setTimeout(() => map.invalidateSize(), 0);

      cleanup = () => map.remove();
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [latitude, longitude]);

  const externalUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=16/${latitude}/${longitude}`;

  return (
    <section className={styles.mapSection} aria-label={title}>
      <div className={styles.mapHeading}>
        <div>
          <MapPin aria-hidden="true" />
          <span>{title}</span>
        </div>
        <a href={externalUrl} target="_blank" rel="noreferrer">
          {openMapLabel}
        </a>
      </div>
      <div
        ref={containerRef}
        className={styles.mapFrame}
        role="region"
        aria-label={title}
      />
    </section>
  );
}
