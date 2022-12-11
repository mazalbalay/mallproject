const Store = require("../MODELS/storeModel");

const getAllStores = async (req, res) => {
  try {
    const stores = await Store.find();
    return res.status(200).json(stores);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const getStore = async (req, res) => {
  try {
    const { id } = req.params;
    const store = await Store.findById(id);
    return res.status(200).json(store);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const createStore = async (req, res) => {
  const obj = req.body;
  try {
    const store = await Store.create(obj);
    return res.status(200).json(store);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const updatedStore = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const store = await Store.findByIdAndUpdate(id, obj);
    return res.status(200).json(store);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const deleteStore = async (req, res) => {
  try {
    const { id } = req.params;
    const store = await Store.findByIdAndRemove(id);

    return res.status(200).json(store);
  } catch (e) {
    return res.status(400).json(e);
  }
};

module.exports = {
  getAllStores,
  getStore,
  updatedStore,
  deleteStore,
  createStore,
};
