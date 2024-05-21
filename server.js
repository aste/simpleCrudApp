const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  // console.log("May Node be with you");
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  app.post("/quotes", (req, res) => {
    // console.log("Hellooooooooooooooooo!");
    console.log(req.body);
  });
});

MongoClient.connect("mongodb-connection-string", (err, client) => {
  // ... do something here
});
