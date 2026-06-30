import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const server = http.createServer((req, res) => {
  const urlPath = req.url === '/' ? '/index.html' : req.url;
  const file = path.join(root, urlPath.replace(/^\//, ''));
  if (!file.startsWith(root) || !fs.existsSync(file)) { res.writeHead(404); res.end('Not found'); return; }
  const ext = path.extname(file);
  const types = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.png':'image/png', '.svg':'image/svg+xml' };
  res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});
server.listen(4173, () => console.log('http://localhost:4173'));
