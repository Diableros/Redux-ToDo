import * as React from "react"
import { addTodo } from "../../store/todoSlice"
import { useAppDispatch } from "../../hooks/reduxHooks"
import s from "./AddTodo.module.css"

const INPUT_PLACEHOLDER = "Наименование дела"
const ADD_TODO_BUTTON_TITLE = "Добавить дело"

const AddTodo = () => {
  const [inputText, setInputText] = React.useState<string>("")
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const dispatch = useAppDispatch()

  const handleAddTodo = () => {
    if (inputRef.current) {
      inputRef.current.value = ""
      inputRef.current.focus()
      if (inputText) dispatch(addTodo({ inputText }))
      setInputText("")
    }
  }

  const handleEnterAddTodo = (event: React.KeyboardEvent) => {
    if (event.code !== "Enter") return
    handleAddTodo()
  }

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setInputText(event.target.value)
  }

  return (
    <div className={s.addTodo}>
      <input
        className={s.todoInput}
        type="text"
        minLength={4}
        maxLength={64}
        size={38}
        placeholder={INPUT_PLACEHOLDER}
        onChange={handleInputChange}
        onKeyDown={handleEnterAddTodo}
        ref={inputRef}
      />
      <button type="button" onClick={handleAddTodo}>
        {ADD_TODO_BUTTON_TITLE}
      </button>
    </div>
  )
}

export default AddTodo
