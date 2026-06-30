import http from 'http';
import fs from 'fs';
import path from 'path';
const root = process.cwd();
const port = process.env.PORT || 4173;
const types = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};
http.createServer((req,res)=>{
  const url = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  const file = path.join(root, url);
  if (!file.startsWith(root) || !fs.existsSync(file)) { res.writeHead(404); res.end('Not found'); return; }
  res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'text/plain'});
  fs.createReadStream(file).pipe(res);
}).listen(port, ()=>console.log(`RunSub site on http://localhost:${port}`));
