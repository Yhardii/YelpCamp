const express = require('express')
const router = express.Router({mergeParams: true})
const catchAsync  = require('../utils/catchAsync')
const ExpressError = require('../utils/ExpressError')
const Campground = require('../models/campground')
const Review = require('../models/review')
const methodOverride = require('method-override')
const {reviewSchema} = require('../schemas')
const reviews = require('../controllers/reviews')
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware')





router.post('/', isLoggedIn, validateReview,  catchAsync(reviews.createReview))

router.delete('/:reviewID',isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))


module.exports = router