const http = require('http');

// request listener


const server = http.createServer((req, res) => {
  console.log(req);
})

server.listen(3002);
