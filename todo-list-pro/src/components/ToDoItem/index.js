import React, { useRef } from 'react'
import './index.scss'

function ToDoItem (props) {
  const { data, openCheckModal, openEditModal, removeItem } = props

  return (
    <li className='todo__item'>
      <div className="todo__checkbox">
        <input type="checkbox" checked={ data.finished } onChange={ (e) => e.preventDefault() } />
      </div>
      <div className="doto__main">
        <span className="doto__main--content" style={ {'textDecoration': data.finished ? 'line-through' : 'none'} }>
          { data.content || 'test content' }
        </span>
      </div>
      <div className="toto__otps">
        <button className="btn btn-primary" onClick={ () => openCheckModal(data.id) }>查看</button>
        <button className="btn btn-warning" onClick={ ()=> openEditModal(data.id) }>编辑</button>
        <button className="btn btn-danger" onClick={ ()=> removeItem(data.id) }>删除</button>
      </div>
    </li>
  )
}

export default ToDoItem
