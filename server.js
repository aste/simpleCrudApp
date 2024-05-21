const express = require("express");
const app = express();

app.listen(3000, function () {
  // console.log("May Node be with you");
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
});
