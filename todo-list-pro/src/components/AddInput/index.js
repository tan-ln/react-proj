import React, { useEffect, useRef } from 'react'
import './index.scss'

function AddInput (props) {
  const { isInputShow, addItem, handleClickHide } = props
  const inputRef = useRef()

  const handleClickAdd = () => {
    const inputVal = inputRef.current.value.trim()
    if (inputVal.length === 0) return
    addItem(inputVal)
    inputRef.current.value = ''
  }
  // useEffect(() => {
  //   console.log(inputRef);
  // }, [])

  return (
    <>
      {
        isInputShow && (
          <div className='input__wrapper'>
            <div className="input__wrapper--main">
              <input type="text" placeholder='请输入待办事件！' ref={ inputRef } />
              <button className="btn btn-primary" onClick={ handleClickAdd }>添加</button>
            </div>
            <div className="input__wrapper--mask" onClick={ handleClickHide }></div>
          </div>
        )
      }
    </>
  )
}

export default AddInput
