const db = require('../config/dbconn')

module.exports ={
    getAllCategory : new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM CATEGORY'

        db(sql).then(data => {
            // console.log(data)
            resolve(data)
        }).catch(err => {
            reject(err)
        })
    })
}
