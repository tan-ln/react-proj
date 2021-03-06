import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom'
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

    // 组件卸载时执行的函数，
    return () => {
      setSearchRes([])
      setHasMore(false)
    }
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
            <Link to={ `/details/${item.id}` } key={ item.id + idx }>
              <div className="search__result--item">
                <img src={ item.img } alt={ item.title } />
                <h3>{ item.title }</h3>
              </div>
            </Link>
          )
        })
      }
      <LoadMore handleLoadMore={ handleLoadMore } hasMore={ hasMore } />
    </div>
  )
}
