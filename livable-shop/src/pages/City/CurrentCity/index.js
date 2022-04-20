import React from "react";
import './index.scss'

export default function CurrentCity ({ city }) {
  return (
    <div className="current__city--wrapper">
      <h2>当前城市：{ city }</h2>
    </div>
  )
}
