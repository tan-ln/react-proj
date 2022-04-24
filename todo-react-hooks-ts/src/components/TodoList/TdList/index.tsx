import React, { FC, ReactElement } from "react";
import { ITodo } from "../typings";
import TdItem from "./TdItem";

interface IProps {
  todoList: ITodo[],
  toggleTodo: (id: number) => void,
  removeTodo: (id: number) => void,
}

const TdList: FC<IProps> = ({
  todoList,
  toggleTodo,
  removeTodo
}): ReactElement => {
  return (
    <div className="td__list--wrapper">
      {
        todoList && todoList.map((todo: ITodo) => {
          return (
            <TdItem key={ todo.id } todoItem={ todo } toggleTodo={ toggleTodo } removeTodo={ removeTodo } />
          )
        })
      }
    </div>
  )
}

export default TdList
