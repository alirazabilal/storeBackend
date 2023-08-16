require("dotenv").config();

const connectDb = require("./db/connect");
const product = require("./models/product");
const Product = require("./models/product");

const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectDb();
    await product.deleteMany();
    await Product.create(ProductJson);
    console.log("SUCCESS");
  } catch (err) {
    console.log(err);
  }
};

start();
