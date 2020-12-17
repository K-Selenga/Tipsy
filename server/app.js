const cors = require("cors");
const express = require("express");
const app = express();
const port = 5000;
const fs = require("fs");
const { Server } = require("http");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const favData = path.join(__dirname, "./favData.json");
// const favList = fs.readdir("./favData.json", "utf-8");
// console.log(favList);

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
  const data = JSON.parse(fs.readFileSync(favData));
  data.push(req.body);
  fs.writeFileSync(favData, JSON.stringify(data));
  res.json(data);
});
app.get("/favlist", (req, res) => {
  const data = JSON.parse(fs.readFileSync(favData));
  res.json(data);
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}...`);
});
