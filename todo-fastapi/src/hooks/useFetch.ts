import { useCallback, useEffect, useState } from "react";
import { getTodos } from "../apis/todoApi";
import type { Todo } from "../types/todo";

const useFetch = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // 리액트는 렌더링 될 때마다 함수를 새롭게 인식
  // useCallback(함수,[의존성]) : 렌더링해도 새로운 함수로 인식하지마(의존성이 변경될 때만)

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      // 데이터 가져오기 함수 호출
      const serverData = await getTodos();
      setTodos(serverData.todos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // 컴포넌트가 랜더링 후 자동으로 코드가 실행
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { todos, loading, fetchData };
};

export default useFetch;
