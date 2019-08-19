import React, { MouseEvent } from 'react';
import { TodoItemProps } from '../types/TodoItem';
import { TodoInput } from './TodoInput';

export const TodoItem = (props: TodoItemProps) => {
  const { item, updateTodo, removeTodo } = props;

  const handleCheckboxChange = () => {
    const newTodo = { ...item };
    newTodo.completed = !newTodo.completed;
    updateTodo(newTodo);
  };

  const handleDestroyClick = (e: MouseEvent) => {
    e.preventDefault();
    removeTodo(item);
  };

  const handleEditingClick = (e: MouseEvent) => {
    e.preventDefault();
    const newTodo = { ...item };
    newTodo.editing = true;
    updateTodo(newTodo);
  };

  const handleEditUpdate = (newValue: string) => {
    if (newValue === '') {
      removeTodo(item);
    } else {
      const newTodo = { ...item };
      newTodo.task = newValue;
      newTodo.editing = false;
      updateTodo(newTodo);
    }
  };

  const wrapperClassName = () => {
    const wrapperClasses = [];
    if (item.completed) {
      wrapperClasses.push('completed');
    }
    if (item.editing) {
      wrapperClasses.push('editing');
    }
    return wrapperClasses.join(' ');
  };

  return (
    <li className={wrapperClassName()}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.completed}
          onChange={handleCheckboxChange}
        />
        <label onDoubleClick={handleEditingClick}>{item.task}</label>
        <button className="destroy" onClick={handleDestroyClick} />
      </div>
      {item.editing && (
        <TodoInput item={item} updateTodoValue={handleEditUpdate} />
      )}
    </li>
  );
};
