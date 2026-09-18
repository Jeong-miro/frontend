import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type LoginFormState = {
  id: string;
  password: string;
};
export type SignupFormState = LoginFormState & {
  nickname: string;
};

const initialState: LoginFormState = { id: "", password: "" };

// 등록,삭제,전체삭제
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginFormState>) => {
      ((state.id = action.payload.id), (state.password = action.payload.password));
    },
    logout: (state) => {
      ((state.id = ""), (state.password = ""));
    },
  },
});
// now available:
export const { login, logout } = authSlice.actions;
// also available:
export default authSlice.reducer;
