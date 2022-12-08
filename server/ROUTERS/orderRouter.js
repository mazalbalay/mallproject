const express = require("express");
const Order = require("../MODELS/orderModel");
const router = express.Router();

// http://localhost:8000/order

router.get("/order", async (req, res) => {
  try {
    const getAllOrder = await Order.find();

    return res.status(200).json(getAllOrder);
  } catch (e) {
    return res.status(400).json(e);
  }
});

router.get("/order/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getOrder = await Order.findById(id);

    return res.status(200).json(getOrder);
  } catch (e) {
    return res.status(400).json(e);
  }
});

router.post("/order", async (req, res) => {
  const obj = req.body;

  try {
    const createOrder = await Order.create(obj);
    return res.status(200).json(createOrder);
  } catch (e) {
    return res.status(400).json(e);
  }
});

router.put("/order/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const order = req.body;
    const updatedorder = await Order.findByIdAndUpdate(id, order);

    return res.status(200).json(updatedorder);
  } catch (e) {
    return res.status(400).json(e);
  }
});

router.delete("/order/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOrder = await Order.findByIdAndRemove(id);

    return res.status(200).json(deleteOrder);
  } catch (e) {
    return res.status(400).json(e);
  }
});

module.exports = router;
