const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware") // Allows the request to continue to the next middleware in line
  next();
})

app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>This heading is from express</h1>")
//...
});

app.listen(3002);
