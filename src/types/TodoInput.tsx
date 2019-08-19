import { TodoItem } from './TodoItem';

export interface TodoInputProps {
  item: TodoItem;
  updateTodoValue: (newValue: string) => void;
}
