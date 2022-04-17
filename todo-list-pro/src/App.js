import React, { useCallback, useEffect, useState } from 'react';
import MyHeader from './components/Header/index';
import AddInput from './components/AddInput';
import ToDoItem from './components/ToDoItem';
import CheckModal from './components/Modal/CheckModal';
import EditModal from './components/Modal/EditModal';
import NoDataTip from './components/NoDataTip';

function App() {
  const [ isInputShow, setInputShowState ] = useState(false)
  const [ toDoList, setToDoList ] = useState([])
  const [ isShowCheckModal, setShowCheckModal ] = useState(false)
  const [ isShowEditModal, setShowEditModal ] = useState(false)
  const [ currentItem, setCurrentItem ] = useState({})

  // 注意：useEffect 按照顺序执行
  // 挂载 get 一次
  useEffect(() => {
    const toDoData = JSON.parse(localStorage.getItem('toDoData') || '[]')
    setToDoList(toDoData)
  }, [])

  // set 
  useEffect(() => {
    localStorage.setItem('toDoData', JSON.stringify(toDoList))
  }, [toDoList])

  // useCallback Hook 返回一个缓存函数，避免非必要渲染 shouldComponentUpdate
  // 依赖与 [] 中的内容进行缓存，如同计算属性
  const addItem = useCallback((value) => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      finished: false
    }
    setToDoList((toDoList) => [dataItem, ...toDoList])
    setInputShowState(false)
  }, [])

  // 查看
  const openCheckModal = useCallback((id) => {
    __setCurrentItem(id)
    setShowCheckModal(true)
  }, [toDoList])
  // 编辑
  const openEditModal = useCallback((id) => {
    __setCurrentItem(id)
    setShowEditModal(true)
  }, [toDoList])
  // 提交
  const submitEdit = useCallback((id, newData) => {
    setToDoList((toDoList) => {
      return toDoList.map((item, idx) => {
        if (item.id === id) {
          item = newData
        }
        return item
      })
    })
    setShowEditModal(false)
  }, [])
  // 删除
  const removeItem = useCallback((id) => {
    setToDoList((toDoList) => toDoList.filter(item => item.id !== id))
  }, [])

  function __setCurrentItem (id) {
    setCurrentItem(() => toDoList.filter(item => item.id === id)[0])
  }

  return (
    <div className="App">
      <CheckModal isShowCheckModal={ isShowCheckModal } data={ currentItem } closeModal={ () => setShowCheckModal(false) } />
      <EditModal isShowEditModal={ isShowEditModal } data={ currentItem } submitEdit={ submitEdit  } />
      <MyHeader showInput={ () => setInputShowState(!isInputShow) } />
      <AddInput isInputShow={ isInputShow } addItem={ addItem } handleClickHide={ () => setInputShowState(false) } />
      
      {
        !toDoList || toDoList.length === 0
          ? (
            <NoDataTip />
          )
          : (
            <ul className="toto__list">
              {
                toDoList.map((item) => {
                  return (
                    <ToDoItem data={ item } key={ item.id } openCheckModal={ openCheckModal } openEditModal={ openEditModal } removeItem={ removeItem } />
                  )
                })
              }
            </ul>
          )
      }
    </div>
  );
}

export default App;
