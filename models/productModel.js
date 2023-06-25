const mongoose = require("mongoose");
//schema Design

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Give a Name"],
      trim: true,
      unique: [true, "Name Must be Unique"],
      minLength: [3, "Name must be 3 characters"],
      maxLength: [100, "Name is Too Large"]
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price Cannot be negative"]
    },
    unit: {
      type: String,
      required: true,
      enum: {
        value: ["Kg", "liter", "pieces"],
        message: "Unit Must be kg "
      }
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity cannot be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
        message: "Quantity must be an integer"
      }
    },
    status: {
      type: String,
      enum: {
        value: ["instock", "out stock"],
        message: "Staus cannot be "
      }
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Suppiler"
    },
    categories: [
      {
        name: {
          type: String,
          required: true
        },
        _id: mongoose.Schema.Types.ObjectId
      }
    ]
  },
  {
    timeStamps: true
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
