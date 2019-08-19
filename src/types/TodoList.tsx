import { TodoItem } from './TodoItem';

export interface TodoListProps {
  todoList: TodoItem[];
  updateTodo: (item: TodoItem) => void;
  removeTodo: (item: TodoItem) => void;
}
