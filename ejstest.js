const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("ejstest");
});

app.listen(3500, (req, res) => {
  console.log(`Server running on port 3500`);
});
