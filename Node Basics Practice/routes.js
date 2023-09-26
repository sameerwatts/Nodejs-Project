const rqHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(url, method);

  res.setHeader('Content-Type', 'text/html');
  if(url === '/') {
    res.write('<html lang="en">');
    res.write('<head><title>Greeting</title></head>');
    res.write('<body><form action="/create-user" method="POST"><label for="username">Username: </label><input type="text" name="username"/><button type="submit">Submit</button></form></body>');
    res.write('</html>');
    res.end();
  }

  if(method === 'POST' && url === '/create-user') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    })

    req.on('end', () => {
      const parseData  = Buffer.concat(body).toString();
      console.log(parseData)
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end()
    })
  }

  if(url === '/users') {
    res.write('<html lang="en">');
    res.write('<head><title>Greeting</title></head>');
    res.write('<body><ul><li>User1</li><li>User2</li><li>User3</li></ul></body>');
    res.write('</html>');
    res.end();
  }
}

module.exports = rqHandler;
