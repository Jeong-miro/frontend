import { useCallback, useEffect, useState } from "react";
import { getTodos } from "../apis/todoApi";
import type { TodoPageResponse } from "../types/todo";
import { useSearchParams } from "react-router-dom";

const initData = {
  items: [],
  total: 0,
  page: 1,
  size: 10,
  completed: null,
  total_pages: 0,
};

const useFetch = () => {
  const [todos, setTodos] = useState<TodoPageResponse>(initData);
  const [loading, setLoading] = useState<boolean>(false);

  // URL의 파라메터 값 가져오기 ( ? 뒤 의 값 가져오기 ) => useSearchParams()
  // ?page=1&size=10&completed=true
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const size = Number(searchParams.get("size")) || 10;
  const completedParam = searchParams.get("completed") || null;
  const completed = completedParam === null ? null : completedParam === "true";
  // useCallback(함수, [의존성]) : 렌더링해도 새로운 함수로 만들지마(의존성이 변경될 때만)
  // completedFilter = "true" or "false"
  const fetchData = useCallback(async (completedFilter: boolean | null, page: number, size: number) => {
    setLoading(true);
    try {
      // 데이터 가져오기 함수 호출
      const serverData = await getTodos(completedFilter, page, size);
      setTodos(serverData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // 컴포넌트가 렌더링 후 자동으로 코드가 실행
  useEffect(() => {
    fetchData(completed, page, size);
  }, [fetchData, completed, page, size]);

  return { todos, loading, fetchData };
};

export default useFetch;
