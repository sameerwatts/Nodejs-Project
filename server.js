const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const shopRoute = require('./routes/shop');
const adminRoute = require('./routes/admin');
const rootDir = require('./utils/path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/admin", adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
})

app.listen(3002)
