const express = require('express');
const bodyParser = require('body-parser');

const shopRoute = require('./routes/shop');
const adminRoute = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoute);
app.use(shopRoute);

app.listen(3002)
