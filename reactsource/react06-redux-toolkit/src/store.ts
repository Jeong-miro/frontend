import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import commentReducer from "./features/comments/CommentsSlice";
import todoReducer from "./features/todo/TodoSlice";

const store = configureStore({
  reducer: {
    myCounter: counterReducer,
    myComment: commentReducer,
    myTodos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
