import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  idx: number;
  contents: string;
  done: boolean;
}

// 타입 지정
interface TodoState {
  todos: Todo[];
}
const initialState: TodoState = { todos: [] };

// 등록,삭제,전체삭제, done 수정(t<=>f)
const todoSlice = createSlice({
  name: "myTodos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        idx: Date.now(),
        contents: action.payload,
        done: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.idx !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<number>) => {
      // find() : idx 일치한 todo
      const todo = state.todos.find((todo) => todo.idx === action.payload);
      // todo.done = !todo.done
      if (todo) {
        todo.done = !todo.done;
      }
    },
    clearTodo: (state) => {
      state.todos = [];
    },
  },
});
// now available:
export const { addTodo, deleteTodo, updateTodo, clearTodo } = todoSlice.actions;
// also available:
export default todoSlice.reducer;
