import React from 'react'
import './index.scss'

function Header (props) {

  const { showInput } = props

  return (
    <div className='header__wrapper'>
      <h3>待办事件</h3>
      <span className='header__wrapper--opts add-icon' onClick={ showInput }>&#43;</span>
    </div>
  )
}

export default Header
