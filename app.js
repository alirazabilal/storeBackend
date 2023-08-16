require("dotenv").config();

const express = require("express");
const app = express();

const connectDb = require("./db/connect");
const products_routes = require("./routes/products");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hy,im live");
});

app.use("/api/products", products_routes);
const start = async () => {
  try {
    await connectDb();

    app.listen(PORT, () => {
      console.log(`${PORT},YES ITS CONNECTED`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
