// Todo 타입 지정
// insert 할 때 id 입력안함, 날짜 입력안함 => 자동으로 생성
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  important: boolean;
  create_at: Date;
  update_at: Date;
};

export type TodoPageResponse = {
  items: Todo[];
  total: number;
  total_pages: number;
  page: number;
  size: number;
  completed: boolean | null;
};

// TodoList 타입
export type TodosProps = {
  todos: Todo[];
  onDelete: (id: string) => void;
  onUpdate: (id: number) => void;
};

// TodoListItem 타입
export type TodoProps = Omit<TodosProps, "todos"> & {
  todo: Todo;
};

// 서버단 연동까지 포함
// Todo 타입에서 id, createDate, lastModifiedDate 타입 제외(Omit)
// & : 새로운 타입을 합침
// update + insert 포함해서 사용
export type TodoUpsert = Omit<Todo, "id" | "createDate" | "lastModifiedDate"> & { id?: number };

export type TodoCreate = {
  title: string;
  completed: boolean;
  important: boolean;
};
