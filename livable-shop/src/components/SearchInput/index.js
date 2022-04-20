import React, { useState } from "react";
import { withRouter } from 'react-router-dom' 
import './index.scss'

function SearchInput ({ history }) {
  const [keywords, setKeywords] = useState('')
  const handleKeyUp = (e) => {
    if (!keywords.length) return
    if (e.keyCode === 13) history.push(`/search?keywords=${keywords}`)
  }
  return (
    <div className="input__wrapper">
      <i className="search-icon iconfont">&#xe621;</i>
      <input type="text" onKeyUp={ handleKeyUp } value={ keywords } onChange={ (e) => setKeywords(e.target.value.trim()) } />
    </div>
  )
}

export default withRouter(SearchInput)
