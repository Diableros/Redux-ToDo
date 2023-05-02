import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "."

type todoType = {
  id: number
  name: string
  done: boolean
}

const initialState: todoType[] = []

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<todoType>) {
      console.log(state)
      console.log(action)

      state.push({
        id: Number(new Date().toISOString),
        name: action.payload.name,
        done: false,
      })
    },
    toggleTodo(state, action: PayloadAction<number>) {},
    deleteTodo(state, action: PayloadAction<todoType>) {},
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions
export const selectTodos = (state: RootState) => state.todos
export default todoSlice.reducer