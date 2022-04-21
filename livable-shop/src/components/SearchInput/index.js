import React, { useEffect, useState } from "react";
import { useLocation, withRouter } from 'react-router-dom'
import qs from 'query-string'
import { useDispatch, useSelector } from 'react-redux'
import * as searchActions from '../../redux/actions/search'
import './index.scss'

function SearchInput ({ history }) {
  const [keywords, setKeywords] = useState('')
  const dispatch = useDispatch()
  const { searchValue } = useSelector(state => state.search)
  const { search } = useLocation()
  const params = qs.parse(search)

  const handleKeyUp = (e) => {
    if (!keywords.length) return
    if (e.keyCode === 13) {
      history.push(`/search?keywords=${keywords}`)
      dispatch(searchActions.updateSearchValue(keywords))
    }
  }

  // redux 中的值回传，用于保留搜索记录
  useEffect(() => {
    setKeywords(searchValue)
  }, [searchValue])
  // 路由中读取 search 参数
  useEffect(() => {
    params.keywords ? dispatch(searchActions.updateSearchValue(params.keywords)) : dispatch(searchActions.updateSearchValue(''))
  }, [params.keywords, dispatch])

  return (
    <div className="input__wrapper">
      <i className="search-icon iconfont">&#xe621;</i>
      <input type="text" onKeyUp={ handleKeyUp } value={ keywords } onChange={ (e) => setKeywords(e.target.value.trim()) } />
    </div>
  )
}

export default withRouter(SearchInput)
