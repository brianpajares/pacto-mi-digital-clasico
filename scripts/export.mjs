#!/usr/bin/env node
/**
 * Versión exportable del sitio en HTML.
 *
 * Toma `public/` (lo que se despliega en Vercel) y genera una copia con rutas
 * relativas, de modo que funcione:
 *   - abriendo `index.html` directamente desde la computadora, sin servidor;
 *   - subida a cualquier hosting, en la raíz o dentro de una subcarpeta.
 *
 * Uso: npm run export  →  export/pacto-mi-digital-web/ y export/pacto-mi-digital-web.zip
 */
import { readFile, writeFile, readdir, rm, mkdir, cp, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "public");
const outDir = path.join(root, "export");
const name = "pacto-mi-digital-web";
const dest = path.join(outDir, name);

if (!existsSync(path.join(src, "index.html"))) {
  console.error("✗ No existe public/index.html. Ejecuta primero `npm run build`.");
  process.exit(1);
}

async function walk(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await walk(full)));
    else found.push(full);
  }
  return found;
}

const isFile = async (p) => {
  try {
    return (await stat(p)).isFile();
  } catch {
    return false;
  }
};

/** Convierte una ruta absoluta del sitio ("/aprende#x") en relativa al archivo. */
async function relativize(href, fromFile) {
  const [pathAndQuery, hash = ""] = href.split("#");
  const [clean] = pathAndQuery.split("?");
  let target = clean;
  if (target === "/" || target === "") target = "/index.html";
  else if (!path.extname(target)) {
    const asDir = path.join(dest, target, "index.html");
    if (await isFile(asDir)) target = path.posix.join(target, "index.html");
    else if (await isFile(path.join(dest, `${target}.html`))) target = `${target}.html`;
  }
  let rel = path.posix.relative(path.posix.dirname("/" + path.relative(dest, fromFile).split(path.sep).join("/")), target);
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel + (hash ? `#${hash}` : "");
}

async function rewrite(file, pattern, build) {
  const text = await readFile(file, "utf8");
  const parts = [];
  let last = 0;
  for (const m of text.matchAll(pattern)) {
    parts.push(text.slice(last, m.index), await build(m, file));
    last = m.index + m[0].length;
  }
  parts.push(text.slice(last));
  await writeFile(file, parts.join(""), "utf8");
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp(src, dest, { recursive: true });

const files = await walk(dest);

for (const file of files.filter((f) => f.endsWith(".html"))) {
  // href="/…" y src="/…" (no toca "//dominio" ni URLs absolutas con https).
  await rewrite(file, /\b(href|src)="(\/(?!\/)[^"]*)"/g, async (m, f) => `${m[1]}="${await relativize(m[2], f)}"`);
}

for (const file of files.filter((f) => f.endsWith(".css"))) {
  await rewrite(file, /url\("(\/(?!\/)[^"]*)"\)/g, async (m, f) => `url("${await relativize(m[1], f)}")`);
}

await writeFile(
  path.join(dest, "LEEME.txt"),
  [
    "PACTO-MI Digital — versión exportable en HTML",
    "",
    "1. Abre index.html con tu navegador para ver el sitio sin conexión.",
    "2. Para publicarlo, sube el contenido de esta carpeta a cualquier hosting",
    "   (en la raíz del dominio o en una subcarpeta). No necesita servidor ni base de datos.",
    "",
    "Las descargas de PDF del toolkit y los enlaces a fuentes externas requieren internet.",
    "Generado desde https://github.com/brianpajares/pacto-mi-digital-clasico",
    "",
  ].join("\n"),
  "utf8"
);

let zipped = false;
try {
  execFileSync("zip", ["-qr9", `${name}.zip`, name], { cwd: outDir });
  zipped = true;
} catch {
  console.warn("⚠ No se encontró el comando `zip`; la carpeta queda lista en export/.");
}

console.log(`✓ Versión exportable en export/${name}/ (${files.length + 1} archivos)`);
if (zipped) console.log(`✓ ZIP: export/${name}.zip`);
