export interface TodoItem {
  item: string;
  completed: boolean;
}

export interface TodoItemProps {
  item: TodoItem;
  toggleTodoCompletion: (item: TodoItem) => void;
  removeTodo: (item: TodoItem) => void;
}
