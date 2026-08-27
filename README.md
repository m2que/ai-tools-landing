# MarketLearn Landing Page

Static landing page for `marketlearn.online`.

## Purpose

- position MarketLearn as an evidence-based AI toolkit for business students
- feature `cbbe.marketlearn.online` as the lead live tool
- introduce the wider suite of brand and marketing analysis tools

## Current live link target

- `https://cbbe.marketlearn.online`

## Local preview

- run `npm run dev` for the source site
- run `npm run build` to sync shared brand assets and generate `dist/`
- run `npm run preview` to test the built site

## Notes

- Google Analytics is included directly in `index.html`
- this page is intentionally static for a fast landing-page deployment
- shared brand source files live in `shared/brand/`
- deploy-served brand assets are synced into `public/brand/` via `npm run sync:brand`
