import React, { useRef } from 'react'
import Modal from '..'
import { formatDateTime } from '../../../libs/utils'
import './index.scss'

function EditModal (props) {
  const { isShowEditModal, data, submitEdit } = props
  const inputRef = useRef()
  const checkRef = useRef()

  const formatNewData = () => {
    const val = inputRef.current.value.trim()
    const length = val.length || 0
    if (!length) {
      inputRef.current.value = data.content
      return
    }
    const newData = {
      id: new Date().getTime(),
      content: val,
      finished: checkRef.current.checked
    }
    submitEdit(data.id, newData)
  }

  return (
    <Modal isShowModal={ isShowEditModal } modalTitle="编辑事件">
      <p className="topic">时间：{ formatDateTime(data.id) }</p>
      <p className="topic">内容：
        <textarea className='text-area' ref={ inputRef } defaultValue={ data.content }></textarea>
      </p>
      <p className="topic">状态：
        <input className='editmodal__checkbox' type="checkbox" defaultChecked={ data.finished } ref={ checkRef } />
      </p>
      <button className='btn btn-primary confirm-btn' onClick={ formatNewData }>提交</button>
    </Modal>
  )
}

export default EditModal
