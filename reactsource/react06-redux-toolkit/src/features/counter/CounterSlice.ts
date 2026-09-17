import { createSlice } from "@reduxjs/toolkit";

// 타입 지정
interface CounterState {
  value: number;
}
const initialState: CounterState = { value: 0 };

// createSlice(): 하나의 상태(state)를 관리하기 위한 redux module을 한번에 만들어주는 함수
const counterSlice = createSlice({
  name: "myCounter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
// now available:
export const { increment, decrement, reset } = counterSlice.actions;
// also available:
export default counterSlice.reducer;
