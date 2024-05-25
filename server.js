const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(
  "mongodb+srv://aste:4EtTs9h3AOrGljr8@yodacluster.vpzp8qm.mongodb.net/?retryWrites=true&w=majority&appName=yodaCluster"
)
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("yoda-quotes");
    const quoteCollection = db.collection("quotes");

    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/index.html");
    });

    app.post("/quotes", (req, res) => {
      quoteCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => {
          console.error(error);
          res.sendStatus(500);
        });
    });


    app.get("/quotes", (req, res) => {
      quoteCollection
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
          res.json(results);
        })
        .catch((error) => console.error(error));
    });

    app.listen(3000, function () {
      console.log("Server is running on port 3000");
    });
  })
  .catch(console.error);
