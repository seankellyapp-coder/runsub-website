import fs from 'fs';
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist', { recursive: true });
fs.cpSync('index.html', 'dist/index.html');
fs.cpSync('src', 'dist/src', { recursive: true });
fs.cpSync('public/assets', 'dist/assets', { recursive: true });
