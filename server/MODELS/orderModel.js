const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: String,
  product: [
    {
      productsId: String,
      productsStore: String,
      poductsDepartmen: String,
      productName: String,
      productPrice: String,
      productQuantity: String,
    },
  ],
  user: [
    {
      userId: String,
      userName: String,
      userMail: String,
    },
  ],
  addres: [
    {
      city: String,
      street: String,
      number: String,
    },
  ],
  shipping: [
    {
      type: String,
      date: String,
      time: String,
    },
  ],
});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = OrderModel;
