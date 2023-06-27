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
const updateSpecificProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const update = await Product.updateOne(
      { _id: id },
      { $set: req.body },
      { runValidators: true }
    );
    res.send(update);
  } catch (error) {
    res.json({
      message: "Update Failed",
      status: "failed",
      error: error.message
    });
  }
};

const bulkUpdate = async (req, res) => {
  try {
    const query = req.body;
    const updateData = await Product.updateMany(
      { _id: query.ids },
      { $set: query.data },
      {
        runValidators: true
      }
    );
    res.send(updateData);
  } catch (error) {
    res.json({
      message: "Bulk Update Failed",
      status: "Failed",
      error: error.message
    });
  }
};

module.exports = { postProduct, getProduct, updateSpecificProduct, bulkUpdate };
