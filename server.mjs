import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const port = 5173;
const mime = { '.html':'text/html', '.css':'text/css', '.js':'application/javascript', '.svg':'image/svg+xml', '.png':'image/png' };

http.createServer((req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const file = path.join(root, url.replace(/^\//,''));
  if (!file.startsWith(root) || !fs.existsSync(file)) { res.writeHead(404); res.end('Not found'); return; }
  res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'text/plain' });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log(`RunSub website: http://localhost:${port}`));
