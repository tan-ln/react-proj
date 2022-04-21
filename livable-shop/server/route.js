const express = require('express')
const url = require('url')
const router = express.Router()
const home_hot = require('./data/home.js')
const search_res = require('./data/search')

router.get('/home/hot1', (req, resp) => {
  const city = req.query.cityName
  const data = home_hot.hot1.map(item => {
    return {...item, title: city + item.title + '__new'}
  })
  resp.send({
    status: 200,
    data
  })
})

router.get('/home/hot2', (req, resp) => {
  const city = url.parse(req.url, true).query.cityName
  const data = home_hot.hot2.map(item => {
    return {...item, title: city + item.title + '__hot'}
  })
  resp.send({
    status: 200,
    data
  })
})

router.get('/s', (req, resp) => {
  const keywords = url.parse(req.url, true).query.keywords
  resp.send({
    status: 200,
    data: search_res
  })
})

module.exports = router
