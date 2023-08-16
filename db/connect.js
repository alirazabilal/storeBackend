const mongoose = require("mongoose");

uri =
  "mongodb+srv://aliraza:123@cluster0.ya0ycdb.mongodb.net/?retryWrites=true&w=majority";

const connectDb = () => {
  console.log("connenct db");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;
