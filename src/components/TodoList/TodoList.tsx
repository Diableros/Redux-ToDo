import * as React from "react"
import style from "./TodoList.module.css"
import TodoItem from "../TodoItem"
import { useAppSelector } from "../../hooks/reduxHooks"

const NO_TODOS_TEXT = "Дел не найдено"
const TodoList = () => {
  const todos = useAppSelector((state) => state.todos)
  console.log(todos)

  return (
    <div className={style.todoList}>
      <div className={style.filterBox}>
        <label className={style.checkBox}>
          <input type="checkbox" />
          Скрыть завершенные дела
        </label>
      </div>
      <ul className={style.todoItemsList}>
        {todos.length ? (
          todos.map(({ id, name, done }) => (
            <TodoItem key={id} id={id} name={name} isDone={done} />
          ))
        ) : (
          <li className={style.noTodos}>{NO_TODOS_TEXT}</li>
        )}
      </ul>
    </div>
  )
}

export default TodoList
