const model = require("../MODELS/orderModel");

const getAllorder = function () {
  return new Promise((resolve, reject) => {
    model.orderModel.find({}, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getorderById = function (id) {
  return new Promise((resolve, reject) => {
    model.orderModel.find(id, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const createorder = function (obj) {
  return new Promise((resolve, reject) => {
    let order = model.orderModel(obj);
    order.save(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("created !!");
      }
    });
  });
};

const updateorder = function (id, obj) {
  return new Promise((resolve, reject) => {
    model.orderModel.findByIdAndUpdate(id, obj, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Updated !!");
      }
    });
  });
};

const deleteorder = function (id) {
  return new Promise((resolve, reject) => {
    model.orderModel.findByIdAndDelete(id, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Deleted !!");
      }
    });
  });
};

module.exports = { getAllorder, getorderById, createorder, updateorder, deleteorder };
