import React, { useEffect, useRef, useState } from "react";
import './index.scss'

export default function LoadMore ({ handleLoadMore, hasMore }) {
  const more = useRef()
  const [top, setTop] = useState(10000)

  useEffect(() => {
    const clientHeight = document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight
    let timer = null
    window.addEventListener('scroll', () => {
      if (!more.current) return
      // 加载更多 元素 距顶部
      // const top = more.current.getBoundingClientRect().top
      setTop(more.current.getBoundingClientRect().top)
    // 防抖处理
      if (timer) {
        clearTimeout(timer)
      } else {
        timer = setTimeout(() => {
          if (clientHeight > top) {
            handleLoadMore()
          }
        }, 300);
      }
    })
  }, [top, handleLoadMore])
  return (
    <div className="load__more--wrapper" ref={ more }>
      - { hasMore ? '上拉加载更多' : '我是有底线的' } - 
    </div>
  )
}
