const http = require('http');

// request listener


const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();
})

server.listen(3002);
