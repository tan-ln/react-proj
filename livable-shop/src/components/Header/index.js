import React from "react";
import './index.scss'

function Header () {
  return (
    <div className="home__header clear-fixed">
      <div className="home__header--left">
        <span>北京</span>
        <i className="iconfont">&#xe772;</i>
      </div>
      <div className="home__header--right">
        <i className="iconfont">&#xe7b8;</i>
      </div>
      <div className="home__header--center">
        <div className="search__wrapper">
          <i className="iconfont">&#xe621;</i>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Header
