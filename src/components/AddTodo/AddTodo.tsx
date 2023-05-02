import * as React from "react"
import s from "./AddTodo.module.css"

const AddTodo = () => {
  return (
    <div className={s.addTodo}>
      <input
        className={s.todoInput}
        type="text"
        minLength={4}
        maxLength={128}
				size={32}
				placeholder="Наименование дела"
      />
      <button type="button">
        Добавить дело
      </button>
    </div>
  )
}

export default AddTodo
