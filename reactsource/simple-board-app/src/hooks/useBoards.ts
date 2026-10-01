import { useEffect, useState } from "react";
import { type BoardPageResponse } from "../Types/board";
import { getBoards } from "../apis/boardApi";

export const initialBoardPage: BoardPageResponse = {
  items: [],
  total: 0,
  page: 1,
  size: 10,
  total_pages: 0,
};

const useBoards = (page: number, size: number) => {
  const [data, setData] = useState<BoardPageResponse>(initialBoardPage);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const serverData = await getBoards(page, size);
        setData(serverData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, size]);

  return { data, loading };
};

export default useBoards;
