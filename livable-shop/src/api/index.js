import axios from 'axios'

const base = {
  url: 'http://localhost:1234',
  home_hot1: '/api/home/hot1',
  home_hot2: '/api/home/hot2',
  search: '/api/s',
  details: '/api/details',
  login: '/api/login'
}

const api = {
  // 首页热门
  getHomeHot1 (params) {
    return axios.get(base.url + base.home_hot1, { params })
  },
  getHomeHot2 (params) {
    return axios.get(base.url + base.home_hot2, { params })
  },
  // search result
  getSearchRes(params) {
    return axios.get(base.url + base.search, { params })
  },
  // details
  getDetails(params) {
    return axios.get(base.url + base.details, { params })
  },
  // login
  doLogin(params) {
    return axios.post(base.url + base.login, { ...params })
  }
}

export default api
