const express = require('express')
const app = express()
const  cors = require('cors')
const expressStatic = require('express-static')
const router = require('./route')

app.use(cors())
app.use('/api', router)
app.use(expressStatic('./static'))

app.listen(1234, () => {
  console.log('service running on port 1234');
})
