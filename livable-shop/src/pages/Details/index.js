import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import DetailsView from './DetailsView'
import api from "../../api";
import CommonHeader from "../../components/CommonHeader";
import Subscribe from "./Subscribe";
import './index.scss'

export default function Details () {
  const { id } = useParams()
  const [details, setDetails] = useState({})
  const { userInfo } = useSelector(state => state.login)
  const { subs } = useSelector(state => state.subscribe)

  useEffect(() => {
    api.getDetails({ id }).then(res => {
      if (res.status === 200) {
        setDetails(res.data.data)
      }
    })
  }, [id])

  return (
    <div className="details__wrapper">
      <CommonHeader>
        <h1>{ details.title }</h1>
      </CommonHeader>
      <DetailsView details={ details } />
      <Subscribe userInfo={ userInfo } id={ id } subs={ subs } />
    </div>
  )
}
