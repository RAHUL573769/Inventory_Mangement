const express = require("express");
const app = express();

var bodyParser = require("body-parser");

const Product = require("./models/productModel");

const cors = require("cors");
const connectDb = require("./config/dbConnect");
const { PORT } = require("./secret");
const productRouter = require("./routes/productRoutes");
require("dotenv").config();

app.use(cors());
console.log(Product.pro);
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
// app.post("/api/v1/product", async (req, res, next) => {
//   try {
//     const product = new Product(req.body);
//     await product.save();
//     res.send(product);
//   } catch (error) {
//     res.status(400).json({
//       message: "Data not inserted",
//       error: error.message,
//       status: "fail"
//     });
//   }
// });
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.send("Route is Working");
});
app.listen(PORT, async (req, res) => {
  console.log(`Server is Running at ${PORT}`);
  await connectDb();
});
