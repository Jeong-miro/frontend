import axios from "axios";
import type { CommentCreate, CommentUpdate } from "../Types/board";

// fastapi router 랑 통신

const url = "http://127.0.0.1:8000/comments";

// 삽입
export const postComment = async (comment: CommentCreate) => {
  const response = await axios.post(`${url}`, comment);
  return response.data;
};

// 삭제

export const deleteComment = async (id: number) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};

// 수정
export const putComment = async (id: number, comment: CommentUpdate) => {
  const response = await axios.put(`${url}/${id}`, comment);
  return response.data;
};
