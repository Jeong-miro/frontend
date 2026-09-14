import React, { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdNotificationImportant, MdRemoveCircleOutline } from "react-icons/md";
import type { TodoProps } from "../types/todo";

const TodoListItem = ({ todo, onDelete, onUpdate }: TodoProps) => {
  // todo 분해
  const { id, title, completed, important } = todo;
  console.log("TodoListItem rendered");

  // todo 의 completed 값 변경
  const [isCompleted, setIsCompleted] = useState(completed);
  const CheckboxIcon = isCompleted ? MdCheckBox : MdCheckBoxOutlineBlank;

  // 빼기(<MdRemoveCircleOutline />)클릭 시 부모의 onDelete() 호출

  return (
    <div className="flex items-center p-4 even:bg-gray-200">
      <div className="flex grow items-center">
        <CheckboxIcon
          onClick={() => {
            setIsCompleted(!isCompleted);
            onUpdate(id);
          }}
        />
        <div className={`ml-2 flex items-center `}>
          {important && <MdNotificationImportant className="mr-1 text-red-500" />}
          <span>
            {/* title 보여줄 곳 */}
            {title}
          </span>
        </div>
      </div>
      <div className="flex cursor-pointer items-center text-2xl text-red-300 hover:text-red-600">
        <MdRemoveCircleOutline onClick={() => onDelete(id)} />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
