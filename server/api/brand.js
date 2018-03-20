const express = require('express')

const router = express.Router()

const brand = require('../models/brand')

router.get('/brand',(req, res) => {
        // console.log('object')
        brand.getAllBrand()
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