import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import * as subActions from '../../../redux/actions/subscribe'
import './index.scss'

export default withRouter(function Subscribe ({ userInfo, id, subs, history }) {
  const dispatch = useDispatch()
  const [subStatus, setSubStatus] = useState(false)
  const handleSubscribe = () => {
    // 已登录
    if (userInfo.token) {
      if (hasSubscribe()) {
        // 已预约，进行取消预约操作
        dispatch(subActions.unSubscribeItem(id))
        setSubStatus(false)
      } else {
        // 未预约，进行预约操作
        dispatch(subActions.subScribeItem(id))
        setSubStatus(true)
      }
    } else {
      // 未登录
      history.push('/login')
    }
  }

  const hasSubscribe = useCallback(() => {
    return subs.some(item => {
      return item === id
    })
  }, [subs, id])

  // 预约状态
  useEffect(() => {
    if (hasSubscribe()) {
      setSubStatus(true)
    } else {
      setSubStatus(false)
    }
  }, [hasSubscribe])

  return (
    <div className="subscribe__wrapper">
      <button className="sub_btn" onClick={ handleSubscribe }>{ subStatus ? '取消预约' : '预约'}</button>
    </div>
  )
})
