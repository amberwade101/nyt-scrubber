const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreacter");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var articles = require("./controllers/articles");

app.get("/api/articles", articles.findAll);
app.post("/api/articles", articles.insert);
app.delete("/api/articles/:id", articles.delete);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});