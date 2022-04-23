import React from "react";
import { Link } from "react-router-dom";
import './index.scss'

function HotView (props) {
  const { data, title } = props
  return (
    <div className="hot__wrapper">
      <h3>{ title }</h3>
      <ul className="hot__wrapper--list clear-fixed">
        {
          data.map(item => {
            return (
              <li key={ item.id }>
              <Link to={ `/details/${item.id}` }>
                <img src={ item.img } alt={ item.title } />
                <span>{ item.title }</span>
              </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default HotView
