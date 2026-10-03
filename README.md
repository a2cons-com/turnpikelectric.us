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

Raw photos go in `photos/raw/` (git-ignored). Strip metadata before using them:
`exiftool -all= -overwrite_original photos/raw/*`

## Before launch
- [ ] Pick a design option, then make it `index.astro` and delete the others
- [ ] Put the Web3Forms access key in `src/data/site.ts` (`web3formsKey`)
- [ ] Confirm the project list with Sterling
- [ ] Set `indexable = true` in `src/data/site.ts`, switch `site` and `CNAME` to the real domain
- [ ] Revoke the old site's smtpjs token
