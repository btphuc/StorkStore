const express = require('express')

const router = express.Router()

const category = require('../models/category')

router.get('/category',(req, res) => {
        category.getAllCategory
            .then(data => res.send({
                "status" : 200,
                "data" : data
            }))
            .catch(err => res.send({
                "status" : 400,
                "message" : err
            }))
    })

module.exports = router