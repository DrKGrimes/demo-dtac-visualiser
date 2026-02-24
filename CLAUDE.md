# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page React app that renders an NHS-styled "food label" visualisation for DTAC (Digital Technology Assessment Criteria) submissions. Built with Vite, deployed to Cloudflare Pages.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Preview production build:** `npm run preview`
- **Deploy to Cloudflare Pages:** `npm run deploy`

No test runner or linter is configured.

## Architecture

The entire app lives in two source files:

- `src/main.jsx` — React entry point, mounts `<DTACLabel />` into `#root`
- `src/DTACLabel.jsx` — Single self-contained component (~484 lines) holding all data, logic, styling, and rendering

**Key patterns:**
- All styling is inline via JS style objects using NHS brand colour constants defined at the top of DTACLabel.jsx
- Assessment data (product info, 5 DTAC categories with line-item criteria) is hardcoded in the component
- Overall pass score is dynamically computed from criteria `met` values (true/false/null where null = N/A)
- Single `expanded` state controls which category detail panel is shown
- ESM throughout (`"type": "module"` in package.json)

**Build/deploy:** Vite 6 with `@vitejs/plugin-react` → `dist/` → Cloudflare Pages via Wrangler
