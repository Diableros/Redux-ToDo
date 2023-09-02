import * as React from "react"
import style from "./TodoItem.module.css"
import { useAppDispatch } from "../../hooks/reduxHooks"
import { deleteTodo, toggleTodo } from "../../store/todoSlice"
import { TodoType } from "../../store/todoSlice"
import finger from "../../assets/finger.svg"
import done from "../../assets/thumbsup.svg"
import del from "../../assets/delete.svg"

type ExtraPropType = {
  isHide: boolean
}
const TodoItem = ({ id, name, isDone = false, isHide = false }: TodoType & ExtraPropType) => {
  const dispatch = useAppDispatch()

  const handleToggleTodo = (event: React.MouseEvent) => {
    const {
      dataset: { id },
    } = event.target as HTMLImageElement
    if (id) dispatch(toggleTodo({ id }))
  }

  const handleDeleteTodo = (event: React.MouseEvent) => {
    const {
      dataset: { id },
    } = event.target as HTMLImageElement

    if (id) dispatch(deleteTodo({ id }))
  }

  return (
    <li className={`${style.todoItem} ${isDone ? style.done : ""} ${isHide ? style.hiddenDoned : ""}`}>
      <img
        className={style.statusImg}
        src={isDone ? done : finger}
        data-id={id}
        onClick={handleToggleTodo}
      />
      {name}
      <img
        className={style.deleteImg}
        src={del}
        data-id={id}
        onClick={handleDeleteTodo}
      />
    </li>
  )
}

export default TodoItem
