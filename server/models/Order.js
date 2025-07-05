const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  customerName: String,
  address: String,
  orderedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
