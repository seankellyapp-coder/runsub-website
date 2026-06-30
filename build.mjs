import { mkdirSync, copyFileSync, cpSync, existsSync } from 'fs';
import { join } from 'path';
mkdirSync('dist', { recursive: true });
copyFileSync('index.html', join('dist', 'index.html'));
if (existsSync('src')) cpSync('src', join('dist', 'src'), { recursive: true });
if (existsSync('public')) cpSync('public', join('dist'), { recursive: true });
