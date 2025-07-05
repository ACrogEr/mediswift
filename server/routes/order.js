const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/place", async (req, res) => {
  try {
    const { name, quantity, customerName, address } = req.body;
    const newOrder = new Order({ name, quantity, customerName, address });
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to place order" });
  }
});

module.exports = router;
