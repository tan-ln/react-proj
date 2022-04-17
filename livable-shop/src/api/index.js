import axios from 'axios'

const base = {
  url: 'http://localhost:1234',
  home_hot1: '/api/home/hot1',
  home_hot2: '/api/home/hot2'
}

const api = {
  // 首页热门
  getHomeHot1 () {
    return axios.get(base.url + base.home_hot1)
  },
  getHomeHot2 () {
    return axios.get(base.url + base.home_hot2)
  }
}

export default api
