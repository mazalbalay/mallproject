const Order = require("../MODELS/orderModel");

const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).json(orders);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    return res.status(200).json(order);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const createOrder = async (req, res) => {
  const obj = req.body;
  try {
    const order = await Order.create(obj);
    return res.status(200).json(order);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const updatedorder = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const order = await Order.findByIdAndUpdate(id, obj);
    return res.status(200).json(order);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndRemove(id);

    return res.status(200).json(order);
  } catch (e) {
    return res.status(400).json(e);
  }
};

module.exports = {
  getAllOrder,
  getOrder,
  updatedorder,
  deleteOrder,
  createOrder,
};
