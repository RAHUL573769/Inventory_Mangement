const express = require("express");
const Product = require("../models/productModel");
const postProduct = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(400).json({
      message: "Data not inserted",
      error: error.message,
      status: "fail"
    });
  }
};

const getProduct = async (req, res, next) => {
  try {
    const product = await Product.find({});

    res.status(202).json({
      message: "Data  found",
      data: product,

      status: "success"
    });
  } catch (error) {
    res.status(404).json({
      message: "Data not found",
      error: error.message,
      status: " fail"
    });
  }
};

module.exports = { postProduct, getProduct };
