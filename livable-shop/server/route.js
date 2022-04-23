const express = require('express')
const url = require('url')
const router = express.Router()
const Mock = require('mockjs')
const home_hot = require('./data/home.js')
const search_res = require('./data/search')
const details = require('./data/details')

router.get('/home/hot1', (req, resp) => {
  const city = req.query.cityName
  const data = home_hot.hot1.map(item => {
    return {...item, title: item.title + `(${city})`}
  })
  resp.send({
    status: 200,
    data
  })
})

router.get('/home/hot2', (req, resp) => {
  const city = url.parse(req.url, true).query.cityName
  const data = home_hot.hot2.map(item => {
    return {...item, title: item.title + `(${city})`}
  })
  resp.send({
    status: 200,
    data
  })
})

// search
router.get('/s', (req, resp) => {
  const keywords = url.parse(req.url, true).query.keywords
  resp.send({
    status: 200,
    data: search_res
  })
})

// details
router.get('/details', (req, resp) => {
  const id = req.query.id
  console.log(id);
  const data = details.filter(item => item.id === id)[0]
  resp.send({
    status: 200,
    data
  })
})

// login
router.post('/login', (req, resp) => {
  console.log(req.body);
  const { username, password } = req.body
  if (username && password) {
    resp.send({
      status: 200,
      token: 'asdlk13klasdmkl1389asdjkhsdkfhqwhk'
    })
  } else {
    resp.send({
      status: '401',
      msg: 'Unauthorized! Wrong username or password!'
    })
  }
})

// mockjs
// router.get('/mock', (req, resp) => {
//   const data = Mock.mock({
//     'data|5': [{
//       'id|': 
//     }]
//   })
//   resp.send({
//     status: 200,
//     data
//   })
// })

module.exports = router
