// Prepare photos for the site: photos/raw/* -> src/assets/photos/*.jpg
// Copies originals at full size and strips their metadata (GPS, camera, dates)
// losslessly with exiftool, keeping orientation and color profile. The repo is
// public, so originals must not carry metadata. Resizing happens at build time
// in Astro. Each processed original is moved to photos/done/.
// Usage: npm run photos   (needs exiftool: brew install exiftool)
import { execFileSync } from 'node:child_process';
import { readdir, access, mkdir, rename, copyFile } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'photos/raw';
const OUT = 'src/assets/photos';
const DONE = 'photos/done';

const exists = (p) => access(p).then(() => true, () => false);
const slug = (s) => s.toLowerCase().replace(/\.[^.]+$/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

await mkdir(DONE, { recursive: true });
for (const file of await readdir(SRC)) {
  if (!/\.jpe?g$/i.test(file)) continue;
  const out = path.join(OUT, `${slug(file)}.jpg`);
  if (await exists(out)) {
    console.log(`skipped ${file}: ${out} already exists`);
    continue;
  }
  await copyFile(path.join(SRC, file), out);
  execFileSync('exiftool', ['-q', '-overwrite_original', '-all=', '-tagsfromfile', '@', '-Orientation', '-ICC_Profile', out]);
  await rename(path.join(SRC, file), path.join(DONE, file));
  console.log(`added ${out}`);
}
