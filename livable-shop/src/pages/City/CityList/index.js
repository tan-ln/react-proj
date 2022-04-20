import React from "react";
import './index.scss'

export default function CityList ({ data, onClickEvent }) {
  return (
    <div className="city__list--wrapper">
      <h3>热门城市</h3>
      <ul className="clear-fixed">
      {
        data.map(item => {
          return (
            <li key={ item }  onClick={ () => onClickEvent(item) }><span>{ item }</span></li>
          )
        })
      }
      </ul>
    </div>
  )
}
