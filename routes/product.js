const productController = require('../controllers/product.js')

const router = require('express').Router()

console.log(productController.getAllProducts);

router.get('/all-product', productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.get('/published', productController.getPublishedProduct)
router.post('/add-product', productController.addProduct)
router.patch('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteteProduct)

module.exports = router