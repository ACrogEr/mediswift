// server/routes/medicine.js
const express = require("express");
const router = express.Router();
const Medicine = require("../models/Medicine");

// Place an order
router.post("/order", async (req, res) => {
  try {
    const { name, quantity, customerName, address } = req.body;

    const newOrder = new Medicine({
      name,
      quantity,
      customerName,
      address,
      orderedAt: new Date(),
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
});

// Get all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Medicine.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

module.exports = router;
