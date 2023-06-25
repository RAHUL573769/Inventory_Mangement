const express = require("express");
const app = express();
const router = express.Router();
var bodyParser = require("body-parser");

const cors = require("cors");
require("dotenv").config();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json());

const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 101;
  }
  next();
};
app.get("/profile", isLoggedIn, (req, res) => {
  console.log(req.body);
  res.send("Profile Route is Working");
});

app.get("/", (req, res) => {
  res.send("Route is Working");
});
module.exports = app;
