# Project Handoff

Project: MarketLearn landing site
Repo path: `/Users/mamac3/Documents/1_apps/a_MarketLearn/ai-tools-landing`

## Project structure

- `index.html` = unique landing page source
- `shared/brand/` = shared brand source-of-truth folder
- `shared/templates/` = shared template/reference folder
- `public/brand/` = deploy-served copies of shared brand assets
- `dist/` = build output only, not source of truth

## Shared brand files

- `shared/brand/brand-assets.html` = browser-viewable brand reference page for palette, icon system, and guidance
- `shared/brand/brand.css` = shared brand styling source
- `shared/brand/load-icons.js` = shared icon loader source
- `shared/brand/marketlearn-icons.svg` = shared icon sprite source

## Shared template files

- `shared/templates/template-preview.html` = browser-viewable template reference page
- `shared/templates/template-preview.tsx` = template preview app entry

## Public/deploy files

- `public/brand/brand.css`
- `public/brand/load-icons.js`
- `public/brand/marketlearn-icons.svg`

## How the landing page uses shared assets

- `index.html` should load:
  - `/brand/brand.css`
  - `/brand/load-icons.js`
- `load-icons.js` fetches:
  - `/brand/marketlearn-icons.svg`

## Workflow

- edit brand source files only in `shared/brand/`
- sync those files into `public/brand/` using:
  - `npm run sync:brand`
- `npm run build` automatically runs the brand sync before building with Vite
- do not hand-edit `dist/`

## Local checks

- source/dev: `npm run dev`
- built preview: `npm run build` then `npm run preview`

## Guidance for future rebrands and new pages

- use `shared/brand/brand.css` as the main shared styling source
- use the shared icon system rather than creating one-off page icons
- use `shared/brand/brand-assets.html` as the visual and asset reference page
- use `shared/templates/template-preview.html` as the page/template reference while building
- keep new pages aligned with the shared brand system: typography, icon usage, spacing, color language, and component patterns
- make sure rebranded or new pages use the correct shared components, correct font direction, and correct brand asset paths
- avoid creating disconnected per-page branding unless explicitly asked

## Current priorities

1. improve mobile landing page layout and behavior
2. work on CBBE experience
3. work on BPM experience
4. prepare and launch ANMM
