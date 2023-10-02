const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
  console.log("This will always run")
  next();
//...
});

app.use('/add-product',(req, res, next) => {
  res.send("<h1>The 'Add Product Page'</h1>")
//...
});

app.listen(3002);
