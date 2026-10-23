# Repository Guidelines

## Project Structure & Module Organization

This is a static Astro 7 and TypeScript portfolio published to GitHub Pages at `/my_profile/`. Korean lives at the root and English at `/en/` beneath that base path.

Use `src/data/portfolio.ts` for bilingual content and profile details, `src/layouts/Portfolio.astro` for shared markup, `src/components/` for SVG artwork and icons, `src/styles/` for CSS, and `src/scripts/` for progressive enhancements. Keep routes in `src/pages/`, unprocessed assets in `public/`, and browser tests in `tests/`. Avoid empty feature directories. Document setup and architecture in `README.md`.

## Build, Test, and Development Commands

Use Node.js 24.22.1 (`.nvmrc`) and npm. Install with `npm ci`. Install the test browser once with `npx playwright install chromium`.

- `npm run dev`: development at `http://127.0.0.1:4321/my_profile/`.
- `npm run build`: generate static output in `dist/`.
- `npm run preview`: serve the build locally.
- `npm run check`: Astro and TypeScript diagnostics.
- `npm run format:check`: Prettier validation; `npm run format` rewrites formatting.
- `npm test`: Playwright against the build; build first.
- `npm run validate`: formatting, types, build, and all browser tests.

## Coding Style & Naming Conventions

Use strict TypeScript, Astro components, and the checked-in Prettier configuration. Keep content out of rendering logic and maintain Korean and English together. Use semantic HTML, native links, and small CSS/SVG/TypeScript enhancements rather than an unnecessary client framework.

Respect the Astro base path for assets and routes. Keep canonical URLs, hreflang, tests, and documentation aligned with deployment settings. Preserve content and language navigation without JavaScript. Honor reduced motion and keyboard focus styling. Self-host fonts using the existing font packages. Ignore generated output, dependencies, reports, and editor files.

## Testing Guidelines

Playwright discovers `tests/*.spec.ts` for desktop and mobile Chromium. Cover routing, locale and section preservation, career content, layout overflow, keyboard navigation, reduced motion, no-JavaScript access, asset errors, and axe checks when changing related behavior. Use visual review alongside automatic accessibility testing. Avoid tests that only mirror implementation details.

## Commit & Pull Request Guidelines

Use concise, imperative commit subjects, such as `Add profile page layout`.

Pull requests should explain the change, link relevant issues, and summarize validation performed. Include screenshots for visible interface changes and call out configuration or setup changes.

## Security & Configuration

Keep credentials and personal configuration out of version control. If environment variables are needed, provide a sanitized `.env.example` and ignore local secret files.

Use supplied or verified biographical facts only; do not invent employers, achievements, availability, or metrics. Preserve provided date ranges unless asked to change them. The authorized public contact is `darkcirclepooh@gmail.com`; the GitHub handle is `DarkcirclePooh`.

## Deployment

The public repository is `DarkcirclePooh/my_profile`. `.github/workflows/deploy.yml` validates pull requests and deploys successful `main` pushes through GitHub Actions and the `github-pages` environment. Use short-lived workflow permissions rather than credentials in source. Read `README.md` for first-time configuration.
