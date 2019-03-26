const mongoose = require("mongoose");

module.exports = mongoose.model("product", {
  name: String,
  description: String,
  price: Number,
  quantity: Number
});
