import React, { FC, ReactElement, useCallback, useEffect, useReducer } from "react";
import { todoReducer } from "./reducer";
import TdInput from "./TdInput";
import TdList from "./TdList";
import { ACTION_TYPE, IState, ITodo } from "./typings";
import './index.css'

// const initState: IState = {
//   todoList: []
// }
// 惰性初始化
function init (initTodoList: ITodo[]): IState {
  return {
    todoList: initTodoList
  }
}

const TodoList: FC = (): ReactElement => {
  // useState
  // const [todoList, setTodoList] = useState<ITodo[]>([])

  // useReducer
  // const [state, dispatch] = useReducer(todoReducer, initState)
  const [state, dispatch] = useReducer(todoReducer, [], init)       // 第三个参数，在 todoReducer 执行的时候才开始初始化 list

  useEffect(() => {
    // localstorage
    const todoListData = JSON.parse(localStorage.getItem('todoList') || '[]')
    dispatch({
      type: ACTION_TYPE.INIT_TODOLIST,
      payload: todoListData
    })
  }, [])
  useEffect(() => {
    state.todoList.length && localStorage.setItem('todoList', JSON.stringify(state.todoList))
  }, [state.todoList])

  // 子组件中的方法由父组件传递
  // 建议使用 hook useCallback
  const addTodo = useCallback((todo: ITodo) => {
    // useState
    // setTodoList(todoList => [...todoList, todo])

    // useReducer
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo
    })
  }, [])

  const toggleTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id
    })
  }, [])
  const removeTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id
    })
  }, [])

  return (
    <div className="todo__list--wrapper">
      <h1>To Do Lists</h1>
      <TdInput addTodo={ addTodo } todoList={ state.todoList } />
      <TdList todoList={ state.todoList } toggleTodo={ toggleTodo } removeTodo={ removeTodo } />
    </div>
  )
}

export default TodoList
