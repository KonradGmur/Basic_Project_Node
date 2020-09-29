const express = require("express");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Node");
});

app.get("/kontakt", (req, res) => {
  res.send("To są dane kontaktowe");
});

app.listen(port);
