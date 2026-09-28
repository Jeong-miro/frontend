import { useEffect, useRef, useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTeamplate from "./components/TodoTemplate";
import { initialTodos, type Todo, type TodoCreate } from "./types/todo";
import { deleteTodo, getTodos, postTodo, putTodo } from "./apis/todoApi";
import Loading from "./components/Loading";
import useFetch from "./hooks/useFetch";

function App() {
  const { todos, loading, fetchData } = useFetch();

  // 상단의 "전체","완료","미완료" 보관
  const [completedFilter, setCompletedFilter] = useState<boolean | null>(null);
  const filteredTodos = completedFilter === null ? todos : todos.filter((todo) => todo.completed === completedFilter);
  //id 값
  const nextId = useRef(4);

  const onInsert = async (todo: TodoCreate) => {
    const newTodo = { ...todo, id: nextId.current, createDate: new Date(), lastModifiedDate: new Date() };
    console.log("newTodo", newTodo);

    // 데이터 삽입 서버 요청
    const result = await postTodo(newTodo);

    if (result.message === "success") {
      // 서버에 전체 데이터 요청
      fetchData();

      // 재렌더링이 되어도 값을 유지함
      nextId.current += 1;
    }
  };
  const onDelete = async (id: string) => {
    // todos 에서 삭제 id 와 동일한 todo 가 아닌걸 찾아서 setTodos() 변경
    // filter() => 새로운 배열
    const result = await deleteTodo(id);
    if (result.message === "success") fetchData();
  };
  const onUpdate = async (id: number) => {
    // todos 에서 id 와 동일한 todo를 찾아 completed 의 값을 반대로 변경하기
    //setTodos(todos.filter((todo) => todo.id == id && todo.completed == !todo.completed));
    const updateTodo = todos.find((todo) => todo.id === id);
    if (updateTodo) {
      updateTodo.completed = !updateTodo.completed;
      const result = await putTodo(String(id), updateTodo);
      if (result.message === "success") fetchData();
    }
  };

  // 완료,미완료 선택부분
  const getodosByCompleted = (completed: string) => {
    //Boolean('true') true
    setCompletedFilter(completed === "" ? null : completed === "true");
  };

  // todos 값 확인
  // 컴포넌트 생명주기에 코드를 실행하고 싶을때

  return (
    <>
      <TodoTeamplate>
        <TodoHeader getodosByCompleted={getodosByCompleted} />
        <TodoInsert onInsert={onInsert} />
        {loading ? <Loading /> : <TodoList todos={filteredTodos} onDelete={onDelete} onUpdate={onUpdate} />}
      </TodoTeamplate>
    </>
  );
}

export default App;
