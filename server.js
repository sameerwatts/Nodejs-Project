const http = require('http');

// request listener


const server = http.createServer((req, res) => {
  // process.exit();
const url = req.url;
  if(url === '/') {
    res.write('<html lang="en">');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text"/><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head><title>First page</title></head>');
    res.write('<body><h1>Hello from nodejs server</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(3002);
