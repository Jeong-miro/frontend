import axios from "axios";
import type { BoardCreate, BoardUpdate, BoardUpSert } from "../Types/board";
import axiosInstance from "./axios";

// fastapi router 랑 통신

const url = "http://127.0.0.1:8000/boards";

export const getRecentBoards = async () => {
  const response = await axios.get(`${url}/recents`);
  return response.data;
};
export const getBoards = async (page: number, size: number, criteria: string, keyword: string) => {
  const response = await axios.get(`${url}`, { params: { page, size, criteria, keyword } });
  return response.data;
};

export const getBoard = async (id: string) => {
  const response = await axiosInstance.get(`${url}/${id}`);
  return response.data;
};

// 삽입
export const postBoard = async (board: BoardCreate) => {
  const response = await axiosInstance.post(`${url}`, board);
  return response.data;
};

// 삭제

export const deleteBoard = async (id: string) => {
  const response = await axiosInstance.delete(`${url}/${id}`);
  return response.data;
};

// 수정
export const putBoard = async (id: string, board: BoardUpdate) => {
  const response = await axiosInstance.put(`${url}/${id}`, board);
  return response.data;
};

// 댓글 가져오기

// export const commentBoard = async (id: string) => {
//   const response = await axiosInstance.get(`${url}/${id}/comments`);
//   return response.data;
// };

export const getBoardComments = async (id: string) => {
  const response = await axiosInstance.get(`${url}/${id}/comments`);
  return response.data;
};
