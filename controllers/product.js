const db = require('../models')
const response = require('../helpers/standardResponse.js')

// create main model
const Product = db.products
const Review = db.reviews

// main work

// 1. Create Product

const addProduct = async (req, res) => {
    const {title, price, description, published} = req.body
    let info = {
        title: title,
        price: price,
        description: description,
        published: published ? published : false
    }

    const product = await Product.create(info)
    response(res, 'Product created !', product)
}

// 2. Get All Products
const getAllProducts = async (req, res) => {
    let products = await Product.findAll({})
    // res.send(products)
    response(res, 'List All Products', products)
}

// 3. Get Product By id
const getProductById = async (req, res) => {
    const {id} = req.params
    let product = await Product.findOne({where: {id: id}})
    response(res, 'Get one product', product)
}

// 4. Update Product
const updateProduct = async (req, res) => {
    const {id} = req.params
    let product = await Product.update(req.body, {where: {id: id}})
    response(res, 'Product Updated !', product)
}

// 5. Delete Product
const deleteteProduct = async (req, res) => {
    const {id} = req.params
    await Product.destroy({where: {id: id}})
    res.json({
        success: true,
        message: 'Product deleted !'
    })
}

// 6. Get published product
const getPublishedProduct = async (req, res) => {
    const products = await Product.findAll({where: {published: true}})
    res.send(products)
}

module.exports = {
    addProduct, getAllProducts, getProductById, updateProduct, deleteteProduct, getPublishedProduct
}