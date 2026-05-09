// Convierte cada public/blog/<slug>/cover.svg en cover.jpg (1200x630)
// para usar como og:image en redes sociales (que rara vez soportan SVG).
//
// Ejecutar:
//   npm run blog:covers
//
// El JPG se regenera siempre que exista el SVG.

import { readdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = resolve(fileURLToPath(import.meta.url), '../../public/blog');
const WIDTH = 1200;
const HEIGHT = 630;

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function processDir(dir) {
  const svgPath = join(dir, 'cover.svg');
  if (!(await exists(svgPath))) return null;

  const jpgPath = join(dir, 'cover.jpg');
  await sharp(svgPath, { density: 192 })
    .resize(WIDTH, HEIGHT, { fit: 'cover' })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(jpgPath);

  return { svgPath, jpgPath };
}

async function main() {
  if (!(await exists(ROOT))) {
    console.log(`No existe ${ROOT} - nada que hacer.`);
    return;
  }

  const entries = await readdir(ROOT, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory()).map((e) => join(ROOT, e.name));

  let count = 0;
  for (const dir of dirs) {
    const result = await processDir(dir);
    if (result) {
      console.log(`OK  ${result.jpgPath.replace(ROOT, 'public/blog')}`);
      count++;
    }
  }

  console.log(`\nGenerados ${count} archivo(s) cover.jpg`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
