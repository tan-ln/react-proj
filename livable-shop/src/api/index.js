import axios from 'axios'

const base = {
  url: 'http://localhost:1234',
  home_hot1: '/api/home/hot1',
  home_hot2: '/api/home/hot2'
}

const api = {
  // 首页热门
  getHomeHot1 (params) {
    return axios.get(base.url + base.home_hot1, { params })
  },
  getHomeHot2 (params) {
    return axios.get(base.url + base.home_hot2, { params })
  }
}

export default api
