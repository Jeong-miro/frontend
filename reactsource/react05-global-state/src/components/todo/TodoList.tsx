import type { Todo, TodosProps } from "./todo";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onDelete, onUpdate }: TodosProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default TodoList;
