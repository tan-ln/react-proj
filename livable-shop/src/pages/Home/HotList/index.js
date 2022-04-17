import React, { useEffect, useState } from "react";
import HotView from "../HotView";
import api from '../../../api'

function HotList () {
  const [hotList1, setHotList1] = useState([])
  const [hotList2, setHotList2] = useState([])

  useEffect(() => {
    api.getHomeHot1().then(res => {
      if (res.data.status === 200) {
        setHotList1(res.data.data)
      }
    })
  }, [])
  useEffect(() => {
    api.getHomeHot2().then(res => {
      if (res.data.status === 200) {
        setHotList2(res.data.data)
      }
    })
  }, [])

  return (
    <div className="hot__list">
      {
        hotList1 && hotList1.length > 0
          ? <HotView data={ hotList1 } title='新品推荐' />
          : <div>loading......</div>
      }
      {
        hotList2 && hotList2.length > 0
          ? <HotView data={ hotList2 } title='热门推荐' />
          : <div>loading......</div>
      }
    </div>
  )
}

export default HotList
