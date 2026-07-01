import fs from 'fs';
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist', { recursive: true });
for (const file of fs.readdirSync('.')) {
  if (file.endsWith('.html')) fs.cpSync(file, `dist/${file}`);
}
fs.cpSync('src', 'dist/src', { recursive: true });
fs.cpSync('public/assets', 'dist/assets', { recursive: true });
