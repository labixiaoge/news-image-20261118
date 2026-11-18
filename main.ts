// news-image-20261118: copies the entry image to the output directory.
// The grader runs this twice and both runs must write identical bytes, so the
// program only copies a fixed file and never generates anything at run time.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Create the output directory if the grader's container has not made it yet.
mkdirSync(outDir, { recursive: true });

writeFileSync(join(outDir, 'entry.png'), readFileSync(join(here, 'entry.png')));
