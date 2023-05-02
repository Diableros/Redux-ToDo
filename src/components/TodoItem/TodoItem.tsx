import * as React from "react"
import style from "./TodoItem.module.css"
import finger from "../../assets/finger.svg"
import done from "../../assets/thumbsup.svg"
import del from "../../assets/delete.svg"

type PropsType = {
  id: number
  name: string
  isDone?: boolean
}
const TodoItem = ({ id, name, isDone = false }: PropsType) => {
  const handleToggleTodo = (event: React.MouseEvent) => {
    const {
      dataset: { id },
    } = event.target as HTMLImageElement
    console.log(id)
  }

  const handleDeleteTodo = (event: React.MouseEvent) => {
    const {
      dataset: { id },
    } = event.target as HTMLImageElement
    console.log(id)
  }

  return (
    <li className={`${style.todoItem} ${isDone ? style.done : ""}`}>
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
