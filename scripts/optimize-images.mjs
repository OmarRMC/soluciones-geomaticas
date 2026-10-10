// Reduce y recomprime las imágenes pesadas de src/Assets y public, sin cambiar nombre ni formato.
// Uso: npm run images:optimize   (se puede repetir: solo reescribe si el resultado pesa menos)

import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const DIRS = ['src/Assets', 'public'];
const MIN_KB = 150;       // no toca imágenes que ya son livianas
const MAX_WIDTH = 1920;   // ancho máximo en que se muestran en la web
const MAX_LOGO = 512;     // PNG con transparencia (logos)

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let before = 0;
let after = 0;
for (const dir of DIRS) {
  for await (const file of walk(dir)) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
    const input = await fs.readFile(file);
    if (input.length < MIN_KB * 1024) continue;

    const meta = await sharp(input).metadata();
    let img = sharp(input).rotate(); // aplica la orientación EXIF antes de quitar los metadatos
    if (ext === '.png') {
      const max = meta.hasAlpha ? MAX_LOGO : MAX_WIDTH;
      img = img.resize({ width: max, height: max, fit: 'inside', withoutEnlargement: true });
      img = meta.hasAlpha
        ? img.png({ palette: true, quality: 90, compressionLevel: 9 })
        : img.png({ compressionLevel: 9, adaptiveFiltering: true });
    } else {
      img = img
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .jpeg({ quality: 78, mozjpeg: true, progressive: true });
    }
    const output = await img.toBuffer();
    if (output.length >= input.length * 0.9) continue;

    await fs.writeFile(file, output);
    before += input.length;
    after += output.length;
    console.log(`${file}: ${Math.round(input.length / 1024)} KB → ${Math.round(output.length / 1024)} KB`);
  }
}
console.log(`\nTotal: ${(before / 1048576).toFixed(1)} MB → ${(after / 1048576).toFixed(1)} MB`);
