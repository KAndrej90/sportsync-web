# SportSync Web

Ovo je web stranica za SportSync mobilnu aplikaciju (landing + podrška) napravljena u Next.js (App Router) i izvezena kao statički site.

## Javne stranice (za Store listing)

- Početna: https://sportsync.hr/
- Podrška / kontakt: https://sportsync.hr/contact
- Politika privatnosti: https://sportsync.hr/privacy
- Uvjeti korištenja: https://sportsync.hr/terms
- Politika kolačića: https://sportsync.hr/cookies
- Brisanje računa/podataka (Data deletion): https://sportsync.hr/delete-account

## SEO/robotika

U `public/` se nalaze:
- `robots.txt`
- `sitemap.xml`
- `manifest.webmanifest`

Globalni SEO metadata (OpenGraph/Twitter/canonical) je u `src/app/layout.tsx`.

## Važne napomene

- Legal stranice su trenutno osnovni predlošci. Prije produkcije preporučeno je dopuniti točne podatke tvrtke (adresa, OIB) i popis stvarnih integracija (analytics, push, crash reporting, payment, itd.).
- Slike `public/og.png` i ikone (`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`) su trenutno minimalni placeholderi i treba ih zamijeniti pravim assetima.

## Development

```bash
yarn dev
```

## Build (static export)

```bash
yarn build
yarn export
```
