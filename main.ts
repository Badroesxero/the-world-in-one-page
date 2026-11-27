// The World in One Page — entry program for make.fun "news-image-20261127"
// (Sum up 27 November's world news in one image), Node 22, standard library only.
//
// The artwork itself lives in assets/entry.png: a single 1024x1024 illustrated
// front page drawn for this entry (its HTML/SVG source is in design/). This
// program's whole job is to deliver those exact bytes to the output directory,
// unchanged, every run — no network, no clock, no randomness — so the two
// grading runs write byte-identical files.

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, 'assets', 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

// Sanity check before delivering: the asset must really be a PNG (the gate
// tells PNG from JPEG by its first bytes) and within the 1 MiB cap.
const head = readFileSync(source).subarray(0, 8);
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
if (!PNG_SIGNATURE.every((byte, i) => head[i] === byte)) {
  throw new Error('assets/entry.png is not a PNG file');
}
const { size } = statSync(source);
if (size > 1_048_576) {
  throw new Error(`assets/entry.png is ${size} bytes, over the 1 MiB cap`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);

console.log(`entry.png delivered: ${size} bytes, 1024x1024 PNG, copied from assets/entry.png`);
