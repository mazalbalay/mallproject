const express = require('express')
const productBLL = require('../BLLS/productBLL')

const router = express.Router();

router.get('/', async (req, res) => {
    const productData = await productBLL.getProducts()
    res.json(productData)
})

router.post('/', async (req, res) => {
    try {
        const product = req.body;
        const status = await productBLL.createProduct(product)
        res.status(200).json(status);
    } catch (e) {
        res.status(500).json(e)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const obj = req.body;
        const status =await productBLL.updateProduct(id, obj);
        res.status(200).json(status);
    } catch (e) {
        res.status(500).json(e)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const status = await productBLL.deleteProduct(id);
        res.status(200).json(status);
    } catch (e) {
      res.status(500).json(e)  
    }
})

module.exports = router