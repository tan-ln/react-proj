import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import CommonHeader from "../../components/CommonHeader";
import SearchInput from '../../components/SearchInput'
import LoadMore from "../../components/LoadMore";
import qs from 'query-string'
import api from "../../api";
import './index.scss'

export default function Search () {
  const { search } = useLocation()
  const { keywords } = qs.parse(search)
  const [searchRes, setSearchRes] = useState([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    api.getSearchRes({ keywords }).then(res => {
      if (res.data.status === 200) {
        setSearchRes(res.data.data)
      }
    })
  }, [keywords])

  const handleLoadMore = () => {
    if (searchRes.length > 20) {
      setHasMore(false)
      return
    }
    api.getSearchRes({ keywords }).then(res => {
      if (res.data.status === 200) {
        setSearchRes(searchRes.concat(res.data.data))
      }
    })
  }

  return (
    <div className="search__wrapper">
      <CommonHeader>
        <div className="search__wrapper--input">
          <SearchInput />
        </div>
      </CommonHeader>
      {
        searchRes.length > 0 && searchRes.map((item, idx) => {
          return (
            <div className="search__result--item" key={ item.id + idx }>
              <img src={ item.img } alt={ item.title } />
              <h3>{ item.title }</h3>
            </div>
          )
        })
      }
      <LoadMore handleLoadMore={ handleLoadMore } hasMore={ hasMore } />
    </div>
  )
}
