import React from "react";
import './index.scss'

export default function DetailsView ({ details }) {
  return (
    <div className="details__view">
      <div className="img__cover">
        <img src={ details.cover } alt={ details.title } />
      </div>
      <div className="details__header">
        <h1>{ details.title }</h1>
        <p className="create-time">{ details.ctime }</p>
      </div>
      <div className="details__content">
        <p>简介：{ details.content }</p>
      </div>
    </div>
  )
}
