import { useState } from "react";
import type { TaskProps } from "./MainTask";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
type TaskListProps = {
  tasks: TaskProps[];
  handleUpdateTask: (task: TaskProps) => void;
  onRemoveTask: (taskId: number) => void;
};

// Omit<타입명, "제거할속성"> &
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
  // save 버튼 클릭 시
  // 현재 task의 text를 변경한다(원본복사, text만 변경) => main에서 내려온 함수를 노출 => isEditing false 변경
  const tastTextChange = () => {
    handleUpdateTask({
      ...task,
      text: text,
    });
    setIsEditing(false);
  };
  // 클릭 시 체크박스 변경
  const CheckBoxIcon = isDone ? MdOutlineCheckBox : MdCheckBoxOutlineBlank;

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
          <span className="text-gray-800">{text}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        {isEditing ? (
          <button
            onClick={tastTextChange}
            type="button"
            className="rouednd border px-3 py-2 text-sm text-green-600 hover:text-green-800"
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
          type="button"
          className="rounded border px-3 py-2 text-sm text-red-600 hover:text-red-800"
          onClick={() => onRemoveTask(task.id)}
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
        <ItemTask task={task} handleUpdateTask={handleUpdateTask} onRemoveTask={onRemoveTask} />
      ))}
    </div>
  );
};

export default ListTask;
