import React, { ChangeEvent } from 'react';
import { TodoListProps } from '../types/TodoList';
import { TodoItem } from './TodoItem';

export const TodoList = (props: TodoListProps) => {
  const {
    todoList,
    updateTodo,
    removeTodo,
    selectAll,
    setSelectAll,
    updateAllTodos,
  } = props;

  const handleToggle = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    updateAllTodos(target.checked);
    setSelectAll(target.checked);
  };

  if (todoList.length < 1) {
    return null;
  }
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={selectAll}
        onChange={handleToggle}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todoList.map(item => (
          <TodoItem
            key={item.id}
            item={item}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </section>
  );
};
