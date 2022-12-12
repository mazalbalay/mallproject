const Products = require ('../MODELS/productModel')

const getAllProducts = async (req, res) => {
    try {
        const products = await Products.find({})
        return res.status(200).json(products)
    } catch (error) {
        return res.status(400).json(error)
    }
};

const createProduct = async (req ,res) => {
    const {name, image, price, brand, quantity, description, department} = req.body
 try {
    const product = await Products.create({
      name : name,
      image: image,
      price: price,
      brand: brand,
      quantity: quantity,
      description: description,
      department: department,
    });
    return res.status(200).json(product)
 } catch (e) {
    return res.status(400).json(e)
 }
};

const updateProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const product = await Products.findByIdAndUpdate(id, obj)
        return res.status(200).json(product);
    } catch (e) {
        return res.status(400).json(e);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findByIdAndDelete(id)
        return res.status(200).json(product)
    } catch (e) {
        return res.status(400).json(e)
    }
}

module.exports = {getAllProducts, createProduct, updateProduct, deleteProduct}