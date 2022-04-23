const express = require('express')
const cors = require('cors')
const app = express()
const expressStatic = require('express-static')
const bodyParser = require('body-parser')
const router = require('./route')

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)
app.use(expressStatic('./static'))

app.listen(1234, () => {
  console.log('service running on port 1234');
})
