const express = require("express");
const app = express();
var bodyParser = require("body-parser");

const cors = require("cors");
require("dotenv").config();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Route is Working");
});

app.listen(3000, (req, res) => {
  console.log("Server is Running");
});
