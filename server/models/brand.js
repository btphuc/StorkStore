const db = require('../config/dbconn')

module.exports ={
    // getAllBrand : new Promise((resolve, reject) => {
    //     const sql = 'SELECT * FROM BRAND'

    //     db(sql).then(data => {
    //         console.log(data)
    //         resolve(data)
    //     }).catch(err => {
    //         reject(err)
    //     })
    // }),

    getAllBrand : function() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM BRAND'
    
            db(sql).then(data => {
                // console.log(data)
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}
