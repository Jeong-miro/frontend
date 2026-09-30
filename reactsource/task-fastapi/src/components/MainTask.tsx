import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import { deleteTask, getTasks, postTask, putTask } from "../apis/taskApi";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

export type TaskProps = {
  id: number;
  text: string;
  done: boolean;
};

export type TaskAdd = {
  text: string;
  done: boolean;
};

export type TaskPageResponse = {
  items: TaskProps[];
  total: number;
  total_pages: number;
  page: number;
  size: number;
};
const initData = {
  items: [],
  total: 0,
  page: 1,
  size: 10,
  total_pages: 0,
};

const MainTask = () => {
  // 여행계획
  const [tasks, setTasks] = useState<TaskPageResponse>(initData);
  const { total_pages } = tasks;

  // param 가져오기
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const size = Number(searchParams.get("size")) || 10;

  // 여행계획 추가 함수
  const handleAddTask = async (text: string) => {
    await postTask({ text: text, done: false });
    if (page == 1) {
      const tasks = await getTasks(1, size);
      setTasks(tasks);
    } else {
      setSearchParams({
        page: String(1),
        size: String(size),
      });
    }
  };

  // 여행계획 수정
  // text 내용 수정, done 완료여부 수정
  const handleUpdateTask = async (task: TaskProps) => {
    await putTask(String(task.id), task);

    const tasks = await getTasks(page, size);
    setTasks(tasks);
  };

  const onPageChange = async (page: number) => {
    // 사용자가 클릭한 페이지 값으로 페이지 가져오기 요청
    // const tasks = await getTasks(newPage, size);
    // setTasks(tasks);

    setSearchParams({
      page: String(page),
      size: String(size),
    });
  };
  // 여행계획 제거
  const handleRemoveTask = async (taskId: number) => {
    await deleteTask(String(taskId));
    const tasks = await getTasks(page, size);
    setTasks(tasks);
  };

  useEffect(() => {
    const fetchTasks = async (page: number, size: number) => {
      const tasks = await getTasks(page, size);
      setTasks(tasks);
    };

    fetchTasks(page, size);
  }, [page, size]);

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-xl space-y-6 rounded-lg bg-white shadow-md">
        <h2 className="text-center text-2xl font-semibold">체코 프라하 여행</h2>
        <AddTask handleAddTask={handleAddTask} />
        <ListTask tasks={tasks.items} handleUpdateTask={handleUpdateTask} onRemoveTask={handleRemoveTask} />
        <Pagination page={page} totalPages={total_pages} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default MainTask;
