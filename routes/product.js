// import controller for reviews and products
const productController = require('../controllers/product.js')
const reviewController = require('../controllers/review.js')

// router
const router = require('express').Router()

// use routers get
router.get('/published', productController.getPublishedProduct)
router.get('/all-reviews', reviewController.getAllReviews)
router.get('/all-product-reviews', productController.getProductReviews)
router.get('/all-product', productController.getAllProducts)
router.get('/:id', productController.getProductById)


// review router
router.post('/add-review', reviewController.addReview)


// product router
router.post('/add-product', productController.addProduct)
router.patch('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteteProduct)

module.exports = router