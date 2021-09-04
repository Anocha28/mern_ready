const express = require('express')
const router = express.Router()
const {getPage, createPage} = require('../Controllers/pageController')
const {protect} = require('../Middlewares/authMiddleware')


router.route('/').get(protect, getPage).post(protect, createPage)



module.exports = router