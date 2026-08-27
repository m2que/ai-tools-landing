import { mkdir, copyFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'shared', 'brand');
const targetDir = path.join(rootDir, 'public', 'brand');

const run = async () => {
  await mkdir(targetDir, { recursive: true });
  const entries = await readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    if (entry.name === 'brand-assets.html') continue;

    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);
    await copyFile(sourcePath, targetPath);
  }

  process.stdout.write('Synced shared brand assets to public/brand\n');
};

run().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
