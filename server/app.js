const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(function (error, req, res, next) {
  console.log(error, req);
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}...`);
});
