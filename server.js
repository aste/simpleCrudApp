const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  // console.log("May Node be with you");
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  app.post("/quotes", (req, res) => {
    // console.log("Hellooooooooooooooooo!");
    console.log(req.body)
  });
});
