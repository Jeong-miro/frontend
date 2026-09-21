import { useEffect, useState } from "react";
import { type BoardComment } from "../Types/board";
import { getBoard, getBoardComments } from "../apis/boardApi";

const useBoard = (id: string | undefined) => {
  //const [comm, setComm] = useState<comm[] | null>(null);
  const [board, setBoard] = useState<BoardComment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;
        // 서버로 데이터 요청
        const serverData = await getBoard(id);
        const serverCommentData = await getBoardComments(id);
        //const commData = await commentBoard(id);
        setBoard({
          userId: serverData.userId,
          id: serverData.id,
          title: serverData.title,
          body: serverData.body,
          comments: serverCommentData,
        });
        //setComm(commData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  return { board, loading };
};

export default useBoard;
