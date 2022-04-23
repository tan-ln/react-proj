import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsView from './DetailsView'
import api from "../../api";
import CommonHeader from "../../components/CommonHeader";
import './index.scss'

export default function Details () {
  const { id } = useParams()
  const [details, setDetails] = useState({})
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
    </div>
  )
}
