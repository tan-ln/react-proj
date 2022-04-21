import React from "react";
import { Link } from 'react-router-dom'
import SearchInput from "../SearchInput";
import './index.scss'

export default function Header ({ cityName }) {
  return (
    <div className="home__header clear-fixed">
      <Link className="home__header--left" to="/city">
        <span>{ cityName }</span>
        <i className="iconfont">&#xe772;</i>
      </Link>
      <div className="home__header--center">
        <div className="header__search">
          <SearchInput />
        </div>
      </div>
      <div className="home__header--right">
        <i className="iconfont">&#xe7b8;</i>
      </div>
    </div>
  )
}
