import { TodoItem } from './TodoItem';

export interface TodoListProps {
  todoList: TodoItem[];
  selectAll: boolean;
  setSelectAll: (newValue: boolean) => void;
  updateAllTodos: (completed: boolean) => void;
  updateTodo: (item: TodoItem) => void;
  removeTodo: (item: TodoItem) => void;
}
