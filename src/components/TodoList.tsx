import React from 'react';
import { TodoListProps } from '../types/TodoList';
import { TodoItem } from './TodoItem';

export const TodoList = (props: TodoListProps) => {
  const { todoList, toggleTodoCompletion, removeTodo } = props;
  if (todoList.length < 1) {
    return null;
  }
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todoList.map(item => (
          <TodoItem
            item={item}
            toggleTodoCompletion={toggleTodoCompletion}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </section>
  );
};
