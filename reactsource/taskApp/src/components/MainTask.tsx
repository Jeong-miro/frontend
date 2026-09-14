import { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

export type TaskProps = {
  id: number;
  text: string;
  done: boolean;
};

const initalTasks: TaskProps[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
let nextId = 3;
const MainTask = () => {
  // 여행계획
  const [tasks, setTasks] = useState<TaskProps[]>(initalTasks);

  // 여행계획 추가 함수
  const handleAddTask = (text: string) => {
    // tasks 에 내용 추가
    // tasks.push('') => X
    setTasks([...tasks, { id: nextId++, text: text, done: false }]);
  };
  // 여행계획 수정
  // text 내용 수정, done 완료 여부 수정
  const handleUpdateTask = (task: TaskProps) => {
    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, ...task } : t)));
  };
  // 여행계획 제거
  const handleRemoveTask = (taskId: number) => {
    // taskId : id
    // tasks 에서 taskId와 일치하지 않은 task 추출해서 새로운 배열로 생성
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  // 여행계획 완료 -> 수정에 포함되도록 변경
  //  const handleDoneTask = (taskId: number) => {
  // taskId 와 일치한 task를 찾아서 그 task done 값을 반대로 설정
  //const t= { id: 0, text: "Visit Kafka Museum", done: true },
  //const t2={ id: 0, text: "Watch a puppet show", done: true },
  // {...t , ...t2}
  // text값만(다른부분이) 바뀌어 출력
  //{ id: 0, text: "Watch a puppet show", done: true }
  //    const task = tasks.find((t) => t.id == taskId);

  //  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-xl space-y-6 rounded-lg bg-white shadow-md">
        <h2 className="text-center text-2xl font-semibold">체코 프라하 여행</h2>
        <AddTask handleAddTask={handleAddTask} />
        <ListTask tasks={tasks} handleUpdateTask={handleUpdateTask} onRemoveTask={handleRemoveTask} />
      </div>
    </div>
  );
};

export default MainTask;
