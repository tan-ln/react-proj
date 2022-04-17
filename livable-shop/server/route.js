const express = require('express')
const router = express.Router()
const home_hot = require('./data/home.js')

router.get('/home/hot1', (req, resp) => {
  resp.send({
    status: 200,
    data: home_hot.hot1
  })
})

router.get('/home/hot2', (req, resp) => {
  resp.send({
    status: 200,
    data: home_hot.hot2
  })
})

module.exports = router
