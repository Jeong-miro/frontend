import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import type { TodoCreate } from "./todo";

const TodoInsert = ({ onInsert }: { onInsert: (todo: TodoCreate) => void }) => {
  const [form, setForm] = useState({
    title: "",
    important: false,
  });

  // form 분해
  const { important, title } = form;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 폼 안의 요소가 checkbox 가 존재하는경우 type,checked 도 가져오기
    const { name, value, type, checked } = e.target;
    // form 안의 title, important 에서 title 만 변화
    // 복사, 변경하고 싶은 거 추가
    setForm({
      ...form,
      // title:e.target.value
      [name]: type === "checkbox" ? checked : value,
    });
  };
  // + 클릭시 form submit 이벤트 발생 처리
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // todo 추가할때 부모가 내려준 props 호출
    onInsert({
      title: title,
      completed: false,
      important: important,
    });

    // form 초기화
    setForm({ title: "", important: false });
  };

  return (
    <form className="flex bg-black" onSubmit={handleSubmit}>
      <input
        name="important"
        type="checkbox"
        className="mx-2 grow-0 p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
        onChange={handleFormChange}
        checked={important}
      />
      <input
        name="title"
        type="text"
        placeholder="할 일을 입력하세요"
        className="grow p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
        onChange={handleFormChange}
        value={title}
      />
      <button type="submit" className="cursor-pointer bg-gray-300 p-2 hover:bg-gray-500">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
