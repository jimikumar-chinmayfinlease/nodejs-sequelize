const express = require("express");

const app = express();

const port = 3006;

require("./models");

const userCtrl = require("./controllers/user.controller");

app.get("/", function (req, res) {
  res.send("Home page");
});

app.get("/add", userCtrl.addUser);

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
