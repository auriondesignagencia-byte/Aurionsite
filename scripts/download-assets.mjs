// Downloads all site assets into public/assets, preserving the path after /uploads/.
// asset-urls.json may be double-encoded (a JSON string holding a JSON array).
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public", "assets");

function localPath(url) {
  const u = new URL(url);
  const idx = u.pathname.indexOf("/uploads/");
  return idx >= 0 ? u.pathname.slice(idx + "/uploads/".length) : u.pathname.replace(/^\//, "");
}

async function load() {
  const raw = await readFile(join(ROOT, "docs/research/asset-urls.json"), "utf8");
  let v = JSON.parse(raw);
  if (typeof v === "string") v = JSON.parse(v);
  if (v && typeof v.result === "string") v = JSON.parse(v.result);
  return [...new Set(v)];
}

async function download(url) {
  const rel = localPath(url);
  const dest = join(PUBLIC, rel);
  await mkdir(dirname(dest), { recursive: true });
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return `${rel} (${buf.length}b)`;
}

const urls = await load();
console.log(`Downloading ${urls.length} assets -> public/assets/`);
const ok = [], fail = [];
const BATCH = 4;
for (let i = 0; i < urls.length; i += BATCH) {
  const settled = await Promise.allSettled(urls.slice(i, i + BATCH).map(download));
  settled.forEach((s, j) => {
    if (s.status === "fulfilled") { ok.push(s.value); console.log("  ok  " + s.value); }
    else { fail.push(urls[i + j] + " :: " + s.reason.message); console.log("  FAIL " + s.reason.message); }
  });
}
console.log(`\nDone. ${ok.length} ok, ${fail.length} failed.`);
if (fail.length) console.log(fail.join("\n"));
