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
- `src/components/`: page sections; `HeroA/B/C` are the three design options
- `src/pages/a|b|c.astro`: option previews; `index.astro` is a temporary chooser
- `_legacy/`: the old site and research notes (`CONTENT.md`)
- `brand/`: logo source exports

## Adding photos
1. Drop originals into `photos/raw/`. That folder is git-ignored, so originals never get published.
2. Run `npm run photos`. It writes resized copies with all metadata (GPS, camera, dates) removed to `src/assets/photos/`, then moves each original to `photos/done/`.
3. Rename the new files to something descriptive, then add alt text in `src/data/photos.ts`.

Only the processed copies are committed. At build time Astro also generates the AVIF/WebP sizes.

## Before launch
- [ ] Pick a design option, then make it `index.astro` and delete the others
- [ ] Put the Web3Forms access key in `src/data/site.ts` (`web3formsKey`)
- [ ] Confirm the project list with Sterling
- [ ] Set `indexable = true` in `src/data/site.ts`, switch `site` and `CNAME` to the real domain
- [ ] Revoke the old site's smtpjs token
