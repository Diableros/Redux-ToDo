import * as React from "react"
import style from "./TodoList.module.css"
import TodoItem from "../TodoItem"
import { useAppSelector } from "../../hooks/reduxHooks"

const NO_TODOS_TEXT = "Дел не найдено"
const HIDE_DONED_TODOS_CHECKBOX_LABEL = "Скрыть завершенные дела"

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos)
  const [isHideDoned, setIsHideDoned] = React.useState<boolean>(false)

  const isShowCheckboxHideDonedTodos = todos.some((todo) => todo.isDone)

  const handleHideDonedTodos = (event: React.ChangeEvent) => {
    const checkBox = event.target as HTMLInputElement

    setIsHideDoned(checkBox.checked)
  }

  const toggleHideDoneTodos = (
    <li
      className={`${style.filterBox} ${
        !isShowCheckboxHideDonedTodos ? style.hiddenCheckbox : ""
      }`}
    >
      <label className={style.checkBox}>
        <input type="checkbox" onChange={handleHideDonedTodos} />
        {HIDE_DONED_TODOS_CHECKBOX_LABEL}
      </label>
    </li>
  )

  return (
    <div className={style.todoList}>
      {toggleHideDoneTodos}
      <ul className={style.todoItemsList}>
        {todos.length ? (
          todos.map(({ id, name, isDone }) => (
            <TodoItem
              key={id}
              id={id}
              name={name}
              isDone={isDone}
              isHide={isDone && isHideDoned}
            />
          ))
        ) : (
          <li className={style.noTodos}>{NO_TODOS_TEXT}</li>
        )}
      </ul>
    </div>
  )
}

export default TodoList
