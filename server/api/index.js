const router = require('express').Router()

const category = require('./category')

// add
router.use(category)

module.exports = router
