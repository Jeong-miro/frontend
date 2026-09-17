import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Comment {
  id: number;
  contents: string;
}

// 타입 지정
interface CommentState {
  comments: Comment[];
}
const initialState: CommentState = { comments: [] };

// 등록,삭제,전체삭제
const CommentSlice = createSlice({
  name: "myComment",
  initialState: initialState,
  reducers: {
    addComment: (state, action: PayloadAction<string>) => {
      state.comments.push({
        id: Date.now(),
        contents: action.payload,
      });
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter((comment) => comment.id !== action.payload);
    },
    clearComment: (state) => {
      state.comments = [];
    },
  },
});
// now available:
export const { addComment, deleteComment, clearComment } = CommentSlice.actions;
// also available:
export default CommentSlice.reducer;
