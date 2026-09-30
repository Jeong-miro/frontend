import { useSearchParams } from "react-router-dom";
import { deleteTodo, postTodo, putTodo } from "./apis/todoApi";
import "./App.css";
import Loading from "./components/Loading";
import Pagination from "./components/Pagination";
import TodoHeader from "./components/TodoHeader";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTeamplate from "./components/TodoTemplate";
import useFetch from "./hooks/useFetch";
import { type TodoCreate } from "./types/todo";

function App() {
  const { todos, loading, fetchData } = useFetch();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const size = Number(searchParams.get("size")) || 10;
  const completedParam = searchParams.get("completed");
  const completed = completedParam === null ? null : completedParam === "true";

  // 하단의 페이지 수 결정하기 위해 total_pages 가져오기
  const { total_pages } = todos;

  const onInsert = async (todo: TodoCreate) => {
    // 데이터 삽입 서버 요청
    const result = await postTodo(todo);

    if (result.message) {
      // 서버로 전체 데이터 요청
      if (page === 1 && completed === null) {
        await fetchData(null, 1, size);
        return;
      }

      setSearchParams({
        page: "1",
        size: String(size),
      });
    }
  };

  const onDelete = async (id: string) => {
    const result = await deleteTodo(id);
    if (result.message) {
      console.log(result.message);
      await fetchData(completed, page, size);
    }
  };

  const onUpdate = async (id: number) => {
    // todos 에서 id 와 동일한 todo 를 찾아서 completed 의 값을 반대로 변경하기
    const updateTodo = todos.items.find((todo) => todo.id === id);

    if (updateTodo) {
      const change_completed = !updateTodo.completed;
      const result = await putTodo(String(id), { completed: change_completed });
      if (result.message) await fetchData(completed, page, size);
    }
  };

  // 완료,미완료 선택부분
  // completed === null : ? page=1&size=10
  // completed === null : ? page=1&size=10&completed=
  // completed === t / f : ? page=1&size=10&completed=true/false
  const getTodosByCompleted = (newCompleted: string) => {
    const params: {
      page: string;
      size: string;
      completed?: string;
    } = {
      page: String(page),
      size: String(size),
    };

    if (newCompleted !== "") {
      params.page = "1";
      params.completed = newCompleted;
    }

    setSearchParams(params);
  };

  // ?page=1&size=10
  const onPageChange = (newPage: number) => {
    const params: {
      page: string;
      size: string;
      completed?: string;
    } = {
      page: String(newPage),
      size: String(size),
    };

    if (completed !== null) {
      params.completed = String(completed);
    }

    setSearchParams(params);
  };

  return (
    <>
      <TodoTeamplate>
        <TodoHeader getTodosByCompleted={getTodosByCompleted} completed={completed} />
        <TodoInsert onInsert={onInsert} />
        {loading ? <Loading /> : <TodoList todos={todos.items} onDelete={onDelete} onUpdate={onUpdate} />}
      </TodoTeamplate>
      <Pagination page={page} totalPages={total_pages} onPageChange={onPageChange} />
    </>
  );
}

export default App;
