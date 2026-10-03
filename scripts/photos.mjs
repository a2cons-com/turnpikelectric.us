// Prepare photos for the site: photos/raw/* -> src/assets/photos/*.jpg
// Applies EXIF rotation, resizes to max 1800px and writes a clean JPEG with
// no metadata (no GPS, camera or dates), then moves the original to photos/done/.
// Usage: npm run photos
import sharp from 'sharp';
import { readdir, access, mkdir, rename } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'photos/raw';
const OUT = 'src/assets/photos';
const DONE = 'photos/done';
const exts = new Set(['.jpg', '.jpeg', '.png', '.heic', '.webp']);

const exists = (p) => access(p).then(() => true, () => false);
const slug = (s) => s.toLowerCase().replace(/\.[^.]+$/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

await mkdir(DONE, { recursive: true });
for (const file of await readdir(SRC)) {
  if (!exts.has(path.extname(file).toLowerCase())) continue;
  const out = path.join(OUT, `${slug(file)}.jpg`);
  if (await exists(out)) {
    console.log(`skipped ${file}: ${out} already exists`);
    continue;
  }
  await sharp(path.join(SRC, file))
    .rotate()
    .resize(1800, 1800, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(out);
  await rename(path.join(SRC, file), path.join(DONE, file));
  console.log(`added ${out}`);
}
