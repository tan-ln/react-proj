import React, { FC, ReactElement, useState } from "react";
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
  const [value, setValue] = useState<string>('')

  const addItem = (): void => {
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

    setValue('')
  }

  return (
    <div className="td__input--wrapper">
      <input type="text" placeholder="请输入待办项目" value={ value } onChange={ (e) => setValue(e.target.value) } />
      <button onClick={ addItem }>增加</button>
    </div>
  )
}

export default TdInput
