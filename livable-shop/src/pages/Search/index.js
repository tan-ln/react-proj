import React from "react";
import { useLocation } from 'react-router-dom'
import qs from 'query-string'
import './index.scss'

export default function Search () {
  const { search } = useLocation()
  const { keywords } = qs.parse(search)
  return (
    <div>
      search: { keywords }
    </div>
  )
}
