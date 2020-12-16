const cors = require("cors");
const express = require("express");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(function (error, req, res, next) {
  console.log(error, req);
  next();
});
app.post("/addCocktail", (req, res) => {
  console.log(req.body);
  res.send("Cheers!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}...`);
});
