const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    brand: String,
    quantity: Number,
    description: String,
    department: String,
    section: String
})

const productModel = mongoose.model("products", productSchema)
module.exports = productModel