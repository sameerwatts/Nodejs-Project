const http = require('http');

// request listener


const server = http.createServer((req, res) => {
  console.log(req);
  // process.exit();
})

server.listen(3002);
