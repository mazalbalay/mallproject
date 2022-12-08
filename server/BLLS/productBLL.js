const Products = require ('../MODELS/productModel')

const getProducts = async () => {
    try {
        return await Products.find({})
    } catch (error) {
        throw `error: ${error}`
    }
};

const createProduct = async (obj) => {
 try {
    const product = new Products(obj);
    await product.save();
    return 'Created';
 } catch (error) {
    throw`Error: ${error}`;
 }
};

const updateProduct = async(id, obj) => {
    try {
        await Products.findByIdAndUpdate(id, obj)
        return'Updated';
    } catch (error) {
        throw `Error:${error}`
    }
};

const deleteProduct = async (id) => {
    try {
        await Products.findByIdAndDelete(id)
        return 'Deleted'
    } catch (error) {
        throw `Error :${error}`
    }
}

module.exports = {getProducts, createProduct, updateProduct, deleteProduct}