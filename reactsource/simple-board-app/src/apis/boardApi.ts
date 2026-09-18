import axios from "axios";
import type { Board, BoardUpSert } from "../Types/board";

const url = "https://jsonplaceholder.typicode.com/posts";
export const getBoards = async (limit: number = 10) => {
  const response = await axios.get(`${url}?_limit=${limit}`);
  return response.data;
};

// https://jsonplaceholder.typicode.com/posts/3
export const getBoard = async (id: string) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};

// 삽입

export const postBoard = async (board: BoardUpSert) => {
  const response = await axios.post(`${url}`, board);
  return response.data;
};

// 삭제

export const deleteBoard = async (id: string) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};

// 수정
export const putBoard = async (id: string, board: BoardUpSert) => {
  const response = await axios.put(`${url}/${id}`, board);
  return response.data;
};

// 댓글 가져오기

export const commentBoard = async (id: string) => {
  const response = await axios.get(`${url}/${id}/comments`);
  return response.data;
};
