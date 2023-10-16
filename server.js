const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars')

const shopRoute = require('./routes/shop');
const adminData = require('./routes/admin');
const rootDir = require('./utils/path');

const app = express();

app.engine('hbs', expressHbs())
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminData.routes);
app.use(shopRoute);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.render("404", {docTitle: "Page not found"})
})

app.listen(3002)
