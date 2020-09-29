const express = require("express");
const port = 3000;

const app = express();
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/kontakt", (req, res) => {
  res.send("To są dane kontaktowe");
});

app.listen(port);
