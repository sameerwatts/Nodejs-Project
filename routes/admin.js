const express = require('express')

const app = express();

const router = express.Router();


router.get("/add-product",(req, res, next) => {
  res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>")
})

router.post("/product", (req, res, next) => {  // get/post will only fire for incoming get/post req
  console.log(req.body.title);
  res.redirect('/');
});


module.exports = router;
