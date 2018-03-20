const router = require('express').Router()

const category = require('./category')
const brand = require('./brand')

// add
router.use(category)
router.use(brand)

module.exports = router
