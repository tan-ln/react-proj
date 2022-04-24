import React, { useRef, FC, ReactElement } from "react";
import { ITodo } from "../typings";

// 类型接口，props 需要与之匹配
interface IProps {
  addTodo: (todo: ITodo) => void,
  todoList: ITodo[]
}

const TdInput: FC<IProps> = ({
  addTodo,
  todoList
}): ReactElement => {
  // 建议 useState + onChange
  const inputRef = useRef<HTMLInputElement>(null)

  const addItem = (): void => {
    // 断言 必定有值
    const value: string = inputRef.current!.value.trim()
    if (value.length) {
      const isExist = todoList.find(todo => todo.content === value)
      if (isExist) {
        return alert('this item has already existed')
      }
    }

    addTodo({
      id: new Date().getTime(),
      content: value,
      completed: false
    })

    inputRef.current!.value = ''
  }

  return (
    <div className="td__input--wrapper">
      <input type="text" placeholder="请输入待办项目" ref={ inputRef } />
      <button onClick={ addItem }>增加</button>
    </div>
  )
}

export default TdInput
