const express = require("express");
const { postProduct, getProduct } = require("../controllers/productController");

const router = express.Router();
router.post("/", postProduct);

router.get("/", getProduct);

module.exports = router;
