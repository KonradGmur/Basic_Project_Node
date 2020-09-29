const express = require("express");
const port = process.env.PRT || 3000;

const genereteTitle = () => {
  return "Node JS";
};

const app = express();
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  const title = genereteTitle();

  res.render("index", {
    pageTitle: title,
    pageBody: "Hello Node",
  });
});

app.get("/kontakt", (req, res) => {
  res.send("To są dane kontaktowe");
});

app.listen(port);
