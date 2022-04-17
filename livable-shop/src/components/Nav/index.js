import React from "react";
import { NavLink } from "react-router-dom";
import './index.scss'

function Nav () {
  return (
    <div className="nav__wrapper">
      <ul className="clear-fixed">
        <li>
          <NavLink className={ ({isActive}) => isActive ? 'selected' : '' } to="/">
            <i className="iconfont">&#xe619;</i>
            首页
          </NavLink>  
        </li>
        <li>
          <NavLink className={ ({isActive}) => isActive ? 'selected' : '' } to="/shop">
            <i className="iconfont">&#xec90;</i>
            商城
          </NavLink>  
        </li>
        <li>
          <NavLink className={ ({isActive}) => isActive ? 'selected' : '' } to="/life">
            <i className="iconfont">&#xe673;</i>
            生活服务
          </NavLink>  
        </li>
        <li>
          <NavLink className={ ({isActive}) => isActive ? 'selected' : '' } to="/user">
            <i className="iconfont">&#xe643;</i>
            我的
          </NavLink>  
        </li>
      </ul>
    </div>
  )
}

export default Nav
