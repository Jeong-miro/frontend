import { useEffect, useState } from "react";
import { type comm, type Board } from "../Types/board";
import { commentBoard, getBoard } from "../apis/boardApi";

const useBoard = (id: string | undefined) => {
  const [comm, setComm] = useState<comm[] | null>(null);
  const [board, setBoard] = useState<Board | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;
        // 서버로 데이터 요청
        const serverData = await getBoard(id);
        const commData = await commentBoard(id);
        setBoard(serverData);
        setComm(commData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  return { comm, board, loading };
};

export default useBoard;
