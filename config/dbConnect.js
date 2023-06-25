const mongoose = require("mongoose");
const { dataBase } = require("../secret");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect(dataBase);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
