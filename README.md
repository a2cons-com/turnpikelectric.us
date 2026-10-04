# Turnpike Electric website

Astro static site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.
Preview URL: https://turnpikelectric.a2cons.com (set in `public/CNAME` and `astro.config.mjs`).

```
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Where things are
- `src/data/site.ts`: all copy, contact info, services, reviews and projects
- `src/data/photos.ts`: photo alt text and gallery order (images in `src/assets/photos`)
- `src/pages/`: Home, Services, Projects, About, Careers, Contact, 404
- `src/components/`: header, footer, hero and page sections
- `src/data/photos.ts` → `heroPhoto`: which photo is the home hero background
- `_legacy/`: the old site and research notes (`CONTENT.md`)
- `brand/`: logo source exports

## Adding photos
1. Drop originals into `photos/raw/`. That folder is git-ignored, so originals never get published.
2. Run `npm run photos` (needs `exiftool`). It copies the originals at full size into `src/assets/photos/` with all metadata (GPS, camera, dates) removed, then moves each original to `photos/done/`.
3. Rename the new files to something descriptive, then add alt text in `src/data/photos.ts`.

Astro generates the resized AVIF/WebP/JPEG versions that are published at build time.

## Before launch
- [ ] Replace the hero photo with the generated/retouched one
- [ ] Set `indexable = true` in `src/data/site.ts`, switch `site` and `CNAME` to the real domain
- [ ] Revoke the old site's smtpjs token
