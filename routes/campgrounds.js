const express = require('express')
const router = express.Router()
const catchAsync  = require('../utils/catchAsync')
const ExpressError = require('../utils/ExpressError')
const Campground = require('../models/campground')
const Review = require('../models/review')
const methodOverride = require('method-override')
const {campgroundSchema, reviewSchema} = require('../schemas')
const {isLoggedIn, storeReturnTo, validateCampground, isAuthor} = require('../middleware')
const campgrounds = require('../controllers/campgrounds');
const multer = require('multer')
const { storage } = require('../cloudinary')
const upload = multer({ storage });



router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, upload.array('image'), validateCampground,  catchAsync(campgrounds.createCampground));
    // .post(,(req, res)=>{
    //     console.log(req.body, req.files)
    //     res.send('It worked')
    // })

router.get('/new',isLoggedIn, campgrounds.renderNewForm);


router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn,isAuthor, catchAsync(campgrounds.deleteCampground));




router.get('/:id/edit',isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm));


module.exports = router;
