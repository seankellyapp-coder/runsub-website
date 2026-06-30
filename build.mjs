import { cp, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
await mkdir('dist', { recursive: true });
await cp('index.html', 'dist/index.html');
await mkdir('dist/src', { recursive: true });
await cp('src', 'dist/src', { recursive: true });
if (existsSync('public')) await cp('public', 'dist', { recursive: true });
