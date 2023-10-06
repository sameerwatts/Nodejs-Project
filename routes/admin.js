const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const app = express();

const router = express.Router();

const products = [];

// /admin-add-product => GET
router.get("/add-product",(req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {docTitle: "Add product"})
})

// /admin-add-product => POST
router.post("/add-product", (req, res, next) => {  // get/post will only fire for incoming get/post req
  products.push({title: req.body.title})
  res.redirect('/');
});


exports.routes = router;
exports.products = products;
