export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  editing: boolean;
}

export interface TodoItemProps {
  item: TodoItem;
  updateTodo: (item: TodoItem) => void;
  removeTodo: (item: TodoItem) => void;
}
