const db = require('../models')

// model
const Review = db.reviews

// function

// 1. Add Review
const addReview = async (req, res) => {
    const {rating, description} = req.body
    let data = {
        rating: rating,
        description: description
    }
    const review = await Review.create(data)
    res.json({
        success: true,
        message: 'Add data success',
        review
    })
}

// 2. Get all reviews
const getAllReviews = async (req, res) => {
    const reviews = await Review.findAll({})
    res.json({
        success: true,
        message: 'All data reviews',
        results: reviews
    })
}

module.exports = { addReview, getAllReviews }



