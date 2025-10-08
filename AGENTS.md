# Repository Guidelines

## Project Structure & Module Organization
- Core app code lives in `src/app`; `page.tsx` handles the landing journey and `layout.tsx` sets shared shell metadata.
- Adjust design tokens in `src/app/globals.css`; keep shared assets in `public/` and tweak build tooling via root configs (`next.config.ts`, `eslint.config.mjs`).

## Build, Test, and Development Commands
- `yarn dev` starts Next 15 with Turbopack on http://localhost:3000; rely on it for UI and animation QA.
- `yarn build` runs the production bundle; follow with `yarn start` to smoke test the compiled output locally.
- `yarn lint` executes ESLint with `next/core-web-vitals`; commits must pass cleanly before review.

## Coding Style & Naming Conventions
- Write TypeScript function components; add the `"use client"` directive only when hooks or browser APIs are required.
- Keep two-space indentation, wrap long JSX props onto new lines, and prefer early returns for readability.
- Name components in `PascalCase`, hooks in `useCamelCase`, and data arrays in `camelCase`; lean on Tailwind utilities plus CSS variables in `globals.css` for styling.

## Testing Guidelines
- Automated tests are not checked in yet; plan on Vitest + Testing Library to cover interactive pieces.
- Store specs as `src/__tests__/ComponentName.test.tsx` or alongside components; mock GSAP with `vi.mock("gsap")` to stabilize runs.
- Expose `yarn test` (and optional `--coverage`) once the suite lands, and target ≥80% coverage on animation-heavy modules.

## Commit & Pull Request Guidelines
- Use imperative subjects under ~50 characters (e.g., `Add hero scroll triggers`) and wrap body text at 72 characters when needed.
- Push focused commits, keep generated artifacts ignored, and confirm `yarn build` plus `yarn lint` locally before raising a PR.
- PR descriptions should explain user impact, link the tracking issue (`Closes #123`), and attach screenshots or clips for UI updates.

## Animation & Interaction Notes
- Animations live in `src/app/page.tsx` via `gsap.context`; reuse the `.hero-animate`, `.fade-section`, and `.card-pop` hooks for new sequences.
- Scope selectors with descriptive classnames or data attributes to avoid unintended triggers when sections are refactored.
- Prefer CSS transitions for simple hover states and reserve GSAP timelines for scroll or staggered interactions to minimize bundle weight.
