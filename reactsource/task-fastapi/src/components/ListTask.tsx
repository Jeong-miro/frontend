import React, { useState } from "react";
import type { TaskProps } from "./MainTask";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

type TaskListProps = {
  tasks: TaskProps[];
  handleUpdateTask: (task: TaskProps) => void;
  onRemoveTask: (taskId: number) => void;
};
// Omit<타입명, "제거속성">
type TaskItemProps = Omit<TaskListProps, "tasks"> & {
  task: TaskProps;
};

const ItemTask = ({ task, handleUpdateTask, onRemoveTask }: TaskItemProps) => {
  // Edit 모드 변경
  const [isEditing, setIsEditing] = useState(false);
  // checkbox 변경
  const [isDone, setIsDone] = useState(task.done);
  // text 변경
  const [text, setText] = useState(task.text);
  // save 버튼 클릭시
  // 현재 task 의 text 를 변경한다(원본복사,text만변경) => Main 내려온 함수 호출 => isEditing false로 변경
  const taskTextChange = () => {
    handleUpdateTask({
      ...task,
      text: text,
    });
    setIsEditing(false);
  };

  // 클릭 시 체크박스 변경
  const CheckBoxIcon = isDone ? MdOutlineCheckBox : MdOutlineCheckBoxOutlineBlank;

  const taskDoneChange = () => {
    // isDone 변경
    setIsDone(!isDone);
    handleUpdateTask({
      ...task,
      done: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex items-center gap-3 w-full mr-2">
        <CheckBoxIcon onClick={taskDoneChange} />
        {isEditing ? (
          <input type="text" className="border p-2 w-full" value={text} onChange={(e) => setText(e.target.value)} />
        ) : (
          <span className="text-gray-800">
            {task.id}--{text}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        {isEditing ? (
          <button
            onClick={taskTextChange}
            type="button"
            className="rounded border px-3 py-2 text-sm text-green-600 hover:text-green-800"
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="rounded border px-3 py-2 text-sm text-green-600 hover:text-green-800"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => onRemoveTask(task.id)}
          type="button"
          className="rounded border px-3 py-2 text-sm text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const ListTask = ({ tasks, handleUpdateTask, onRemoveTask }: TaskListProps) => {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <ItemTask key={task.id} task={task} handleUpdateTask={handleUpdateTask} onRemoveTask={onRemoveTask} />
      ))}
    </div>
  );
};

export default ListTask;
