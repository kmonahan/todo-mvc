import React, { MouseEvent } from 'react';
import { TodoItemProps } from '../types/TodoItem';

export const TodoItem = (props: TodoItemProps) => {
  const { item, toggleTodoCompletion, removeTodo } = props;

  const handleCheckboxChange = () => {
    toggleTodoCompletion(item);
  };

  const handleDestroyClick = (e: MouseEvent) => {
    e.preventDefault();
    removeTodo(item);
  };

  const wrapperClasses = [];

  if (item.completed) {
    wrapperClasses.push('completed');
  }

  const wrapperClassName = wrapperClasses.join(' ');

  return (
    <li className={wrapperClassName}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.completed}
          onChange={handleCheckboxChange}
        />
        <label>{item.item}</label>
        <button className="destroy" onClick={handleDestroyClick} />
      </div>
      <input className="edit" value={item.item} />
    </li>
  );
};
