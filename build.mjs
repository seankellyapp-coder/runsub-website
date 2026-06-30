import fs from 'fs';
import path from 'path';

const root = process.cwd();
const dist = path.join(root, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const item of ['index.html', 'src', 'public']) {
  const from = path.join(root, item);
  if (!fs.existsSync(from)) continue;
  const to = item === 'public' ? dist : path.join(dist, item);
  fs.cpSync(from, to, { recursive: true });
}
console.log('RunSub website built to dist/');
