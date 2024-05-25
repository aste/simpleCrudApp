const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

MongoClient.connect(
  "mongodb+srv://aste:4EtTs9h3AOrGljr8@yodacluster.vpzp8qm.mongodb.net/?retryWrites=true&w=majority&appName=yodaCluster"
)
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("yoda-quotes");
    const quoteCollection = db.collection("quotes");

    app.get("/", (req, res) => {
      quoteCollection
        .find()
        .toArray()
        .then((results) => {
          res.render("index.ejs", { quotes: results });
        })
        .catch((error) => console.error(error));
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

    app.put("/quotes", (req, res) => {
      quoteCollection
        .findOneAndUpdate(
          { name: "Yoda" },
          {
            $set: {
              name: req.body.name,
              quote: req.body.quote,
            },
          },
          {
            upsert: true,
          }
        )
        .then((result) => {
          res.json("Success");
        })
        .catch((error) => console.error(error));
    });

    app.delete("/quotes", (req, res) => {
      quoteCollection
        .deleteOne({ name: req.body.name })
        .then((result) => {
          res.json(`Deleted Darth Vader's quote`);
        })
        .catch((error) => console.error(error));
    });

    app.listen(3000, function () {
      console.log("Server is running on port 3000");
    });
  })
  .catch(console.error);
