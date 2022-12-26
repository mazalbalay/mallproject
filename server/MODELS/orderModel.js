const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    product: [{
        productsId: String,
        productsStore: String,
        productName: String,
        productPrice: String,
        productQuantity: String,
    }, ],
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
        shippingType: String,
        date: String,
        time: String,
    },
    payment: {
        cardNumber: String,
        cardValidity: String,
        threeDigits: String,
    },
});

const OrderModel = mongoose.model("orders", orderSchema);

module.exports = OrderModel;