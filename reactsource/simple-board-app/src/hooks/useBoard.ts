import { useEffect, useState } from "react";
import { type BoardResponse } from "../Types/board";
import { getBoard } from "../apis/boardApi";

export const initialBoard: BoardResponse = {
  id: 0,
  title: "",
  contents: "",
  user_id: 0,
  created_at: "",
  user: {
    user_id: 0,
    name: "",
  },
  comments: [],
};

const useBoard = (id: string | undefined) => {
  const [board, setBoard] = useState<BoardResponse>(initialBoard);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = async () => {
    try {
      if (!id) return;
      // 서버로 데이터 요청
      const serverData = await getBoard(id);
      setBoard(serverData);
      //setComm(commData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return { board, loading, refresh: fetchData };
};

export default useBoard;
