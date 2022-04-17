import React from 'react'
import './index.css'

function NoDataTip (props) {

  const { showInput } = props

  return (
    <div className="nodatatip__wrapper">
      <span>快去创建吧</span>
    </div>
  )
}

export default NoDataTip
