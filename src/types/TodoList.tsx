import { TodoItem } from './TodoItem';

export interface TodoListProps {
  todoList: TodoItem[];
  toggleTodoCompletion: (item: TodoItem) => void;
}
