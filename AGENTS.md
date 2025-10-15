# Repository Guidelines

## Project Structure & Module Organization
Core app code lives in `src/app`; `page.tsx` drives the landing animation journey and `layout.tsx` applies shared metadata shells. Global tokens and Tailwind overrides sit in `src/app/globals.css`. Static assets belong in `public/`, while build and lint settings stay in root configs such as `next.config.ts` and `eslint.config.mjs`. Future test suites should live in `src/__tests__` or next to the component they cover.

## Build, Test, and Development Commands
Run `yarn dev` to launch Next 15 with Turbopack on http://localhost:3000 for interactive QA. Use `yarn build` to compile the production bundle, followed by `yarn start` to smoke test the output. Execute `yarn lint` (or `yarn lint --fix` for autofixes) to enforce the `next/core-web-vitals` ruleset before opening a PR.

## Coding Style & Naming Conventions
Write TypeScript function components by default, adding the `"use client"` directive only when hooks or browser APIs are required. Keep indentation at two spaces, wrap long JSX props onto new lines, and favor early returns for clarity. Name components in `PascalCase`, hooks with `useCamelCase`, and data arrays in `camelCase`. Lean on Tailwind utilities plus the CSS variables defined in `globals.css` for styling.

## Testing Guidelines
Automated tests are not yet checked in; plan for Vitest with Testing Library to exercise interactive flows. Store specs as `src/__tests__/ComponentName.test.tsx` or colocate them with the component. Mock GSAP via `vi.mock("gsap")` to stabilize animation timelines. Target at least 80% coverage for animation-heavy modules, and expose `yarn test` (optionally with `--coverage`) when the suite lands.

## Commit & Pull Request Guidelines
Write imperative commit subjects under roughly 50 characters, and wrap bodies at 72 characters when needed. Keep commits focused, avoid checking in generated artifacts, and confirm `yarn build` plus `yarn lint` locally before pushing. Pull requests should outline user impact, reference the tracking issue (e.g., `Closes #123`), and include screenshots or clips for UI-visible changes.

## Animation & Interaction Notes
GSAP timelines are scoped in `src/app/page.tsx` via `gsap.context`; reuse `.hero-animate`, `.fade-section`, and `.card-pop` hooks to stay consistent. Use descriptive classnames or data attributes to avoid selector collisions during refactors, and reserve GSAP for scroll or staggered interactions while handling simple hover states with CSS transitions.
