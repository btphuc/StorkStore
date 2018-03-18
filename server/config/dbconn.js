const dbconfig = require('./database')
const oracledb = require('oracledb')


module.exports = (sql , arrayData) => {
    return new Promise((resolve, reject) => {
        oracledb.getConnection(dbconfig, (err, conn) => {
            if(err) {
                reject(new Error("Can not connect to database"))
                return conn.close()
            }

            conn.execute(sql, (err, result) => {
                if (err) {
                    reject(err)
                    return conn.close()
                }
                resolve(result.rows)
                return conn.close()                
            })
        })
    })
}
