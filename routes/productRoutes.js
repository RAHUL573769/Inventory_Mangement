const express = require("express");
const {
  postProduct,
  getProduct,
  updateSpecificProduct,
  bulkUpdate
} = require("../controllers/productController");
const Product = require("../models/productModel");

const router = express.Router();
router.post("/", postProduct);

router.get("/", getProduct);

router.patch("/bulk", bulkUpdate);
router.patch("/:id", updateSpecificProduct);

module.exports = router;
