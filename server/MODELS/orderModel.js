const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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
  user: {
    userId: String,
    userName: String,
    userMail: String,
  },
  addres: {
    city: String,
    street: String,
    number: String,
    shippingCompanyName: String,
    postalCode: String,
  },
  shipping: {
<<<<<<< HEAD
    typeS: String,
=======
    type: String,
>>>>>>> origin
    date: String,
    time: String,
  },
  payment: {
<<<<<<< HEAD
    cardNumber:String,
    fourNum:String,
=======
    cardNumber: String,
>>>>>>> origin
    cardValidity: String,
    threeDigits: String,
  },
});

const OrderModel = mongoose.model("orders", orderSchema);

module.exports = OrderModel;


