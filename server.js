const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log("Dummy log in first middleware");
//   next();
// })

app.use("/dummy-route",(req, res, next) => {
  res.send("<h1>Dummy data from /dummy-route route</h1>")
})
app.use("/",(req, res, next) => {
  // console.log("Dummy log in second middleware");
  res.send("<h1>Dummy data from / route</h1>")
})

app.listen(3002)
