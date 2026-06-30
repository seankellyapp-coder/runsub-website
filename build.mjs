import { cpSync, mkdirSync, copyFileSync } from 'node:fs';
import { rmSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
copyFileSync('index.html', 'dist/index.html');
cpSync('src', 'dist/src', { recursive: true });
cpSync('public/assets', 'dist/assets', { recursive: true });
console.log('RunSub website built to dist/');
