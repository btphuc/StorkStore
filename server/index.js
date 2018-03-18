
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const oracledb = require('oracledb')
const { Nuxt, Builder } = require('nuxt')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// routes
const api = require('./api/index')

// config database
oracledb.outFormat = oracledb.OBJECT

app.set('port', port)

app.use(bodyParser.json())
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')


async function start() {
  
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // try {
  //   let conn = await oracledb.getConnection(dbconfig)
  //   const result = await conn.execute(
  //     'SELECT * FROM CATEGORY WHERE PARENT_ID = 0'
  //   )

  //   console.log(result.rows)

  // } catch (error) {
  //   console.log(error)
  // } finally {
  //   if (conn) {
  //     await conn.close()
  //   }
  // }
  

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
