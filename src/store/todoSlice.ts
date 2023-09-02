import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export type TodoType = {
  id: string
  name: string
  isDone: boolean
}

const initialState: TodoType[] = []

// хотел ещё типа фабрику вынести, но вроде как оверинжениринг :)
// const createNewTodo = (id: TodoType["id"]): TodoType => ({
//   id: String(Date.now()),
//   name: id,
//   isDone: false,
// })

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ inputText: string }>) {
      // добавление тудушки с фабрикой
      // state.push(createNewTodo(action.payload.inputText))

      state.push({
        id: String(Date.now()),
        name: action.payload.inputText,
        isDone: false,
      })

      return state
    },

    toggleTodo(state, action: PayloadAction<{ id: string }>) {
      const toggledTodo = state.find((todo) => todo.id === action.payload.id)
      if (toggledTodo) toggledTodo.isDone = !toggledTodo.isDone

      return state
    },

    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      return state.filter((todo) => todo.id !== action.payload.id)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
