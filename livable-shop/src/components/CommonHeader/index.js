import React from "react";
import { withRouter } from 'react-router-dom'
import './index.scss'

function CommonHeader ({ children, history }) {
  // 返回上一页
  const handleClickBack = () => {
    history.go(-1)
    // window.history.back()
  }

  return (
    <div className="common__header">
      <span className="back-icon" onClick={ handleClickBack }>
        <i className="iconfont">&#xe608;</i>
      </span>
      {
        children
      }
    </div>
  )
}

export default withRouter(CommonHeader)
