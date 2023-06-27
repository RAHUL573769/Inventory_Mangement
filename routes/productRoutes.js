const express = require("express");
const { postProduct, getProduct } = require("../controllers/productController");
const Product = require("../models/productModel");

const router = express.Router();
router.post("/", postProduct);

router.get("/", getProduct);

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const update = await Product.updateOne({ _id: id }, { $set: req.body });
    res.send(update);
  } catch (error) {
    res.json({
      message: "Update Failed",
      status: "failed",
      error: error.message
    });
  }
});

module.exports = router;
