const express = require("express");
const app = express();
const router = express.Router();
var bodyParser = require("body-parser");

const cors = require("cors");
const connectDb = require("./config/dbConnect");
const { PORT } = require("./secret");
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

app.post("/api/v1/product", (req, res, next) => {
  res.send("Working");
});

app.get("/", (req, res) => {
  res.send("Route is Working");
});
app.listen(PORT, async (req, res) => {
  console.log(`Server is Running at ${PORT}`);
  await connectDb();
});
