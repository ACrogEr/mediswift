const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  customerName: { type: String, required: true },
  address: { type: String, required: true },
  orderedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Medicine", medicineSchema);
