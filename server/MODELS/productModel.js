const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    image: String,
    price: Number,
    brand: String,
    quantity: Number,
    description: String,
    department: String
})

const productModel = mongoose.model("products", productSchema)
module.exports = productModel