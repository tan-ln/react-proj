import React from "react";
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
                <a href={ item.link }>
                  <img src={ item.img } alt={ item.title } />
                  <span>{ item.title }</span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default HotView
