import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addTodo, clearTodo, deleteTodo, updateTodo } from "./TodoSlice";

const TodoApp = () => {
  const todo = useAppSelector((state) => state.myTodos.todos);
  const dispath = useAppDispatch();
  // 할일 관리
  const [contents, setContents] = useState("");

  return (
    <div>
      <div className="flex flex-col mx-6">
        <h2 className="text-3xl mt-3">Todo Redux 적용</h2>
        <ul className="border-b-2 my-2 p-2">
          {todo.map((todo) => (
            <li key={todo.idx}>
              <input type="checkbox" name="done" onChange={() => dispath(updateTodo(todo.idx))} />
              <span className={`mr-3 ${todo.done ? "line-through" : ""} `}>{todo.contents}</span>
              <button className="bg-red-400 p-2 mx-1 text-white" onClick={() => dispath(deleteTodo(todo.idx))}>
                삭제
              </button>
            </li>
          ))}
        </ul>
        <textarea
          name="contents"
          rows={3}
          className="border p-4"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        ></textarea>
        <button
          className="bg-orange-400 p-2 mx-1"
          onClick={() => {
            dispath(addTodo(contents));
            setContents("");
          }}
        >
          추가
        </button>
        <button className="bg-gray-400 p-2 mx-1" onClick={() => dispath(clearTodo())}>
          전체삭제
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
