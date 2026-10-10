import http from 'node:http';
import fs from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const DIST = path.resolve('dist');
const PORT = 4173;
const ORIGIN = 'https://soluciones-geomaticas.web.app';
const SHELL = 'app-shell.html';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const sitemap = await fs.readFile(path.join(DIST, 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map(([, loc]) => {
  const p = new URL(loc).pathname;
  return p.length > 1 ? p.replace(/\/$/, '') : p;
});


await fs.copyFile(path.join(DIST, 'index.html'), path.join(DIST, SHELL), constants.COPYFILE_EXCL).catch((err) => {
  if (err.code !== 'EEXIST') throw err;
});

const server = http.createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = path.join(DIST, pathname);
  try {
    if (!(await fs.stat(file)).isFile()) throw new Error();
  } catch {
    file = path.join(DIST, SHELL);
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
  res.end(await fs.readFile(file));
});
await new Promise((r) => server.listen(PORT, r));

// En GitHub Actions (Ubuntu 24.04) Chrome no puede usar su sandbox; solo abre este sitio local
const browser = await puppeteer.launch({
  args: process.env.CI ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
});
const page = await browser.newPage();
await page.setViewport({ width: 1366, height: 900 });

let failed = 0;
for (const route of routes) {
  try {
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 60000 });
    // Todas las rutas usan Helmet: espera a que haya escrito el <head> (canonical, description...)
    await page.waitForSelector('head [data-rh]', { timeout: 10000 });

    const html = await page.evaluate((origin) => {
      for (const el of document.querySelectorAll('style')) {
        if (!el.textContent.trim() && el.sheet?.cssRules.length) {
          el.textContent = [...el.sheet.cssRules].map((r) => r.cssText).join('\n');
        }
      }
      // Quita los meta genéricos de index.html que Helmet ya redefine en esta ruta
      for (const el of document.head.querySelectorAll('meta[name], meta[property]')) {
        if (el.hasAttribute('data-rh')) continue;
        const key = el.getAttribute('name') ? 'name' : 'property';
        const sel = `meta[${key}="${el.getAttribute(key)}"][data-rh]`;
        if (document.head.querySelector(sel)) el.remove();
      }
      const html = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
      return html.replaceAll(`http://localhost:${location.port}`, origin);
    }, ORIGIN);

    const file = route === '/' ? 'index.html' : decodeURIComponent(route.slice(1)) + '.html';
    const out = path.join(DIST, file);
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, html);
    console.log('✔ prerender', route, '→', path.relative(process.cwd(), out));
  } catch (err) {
    failed++;
    console.error('✘ prerender', route, err.message);
  }
}

await browser.close();
server.close();
if (failed) process.exit(1);
