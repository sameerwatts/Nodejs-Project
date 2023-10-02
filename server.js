const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-product",(req, res, next) => {
  res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>")
})

app.post("/product", (req, res, next) => {  // get/post will only fire for incoming get/post req
  console.log(req.body.title);
  res.redirect('/');
});

app.use("/",(req, res, next) => {
  res.send("<h1>Dummy data from / route</h1>")
})

app.listen(3002)
