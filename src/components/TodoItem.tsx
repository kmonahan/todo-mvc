import React from 'react';
import { TodoItemProps } from '../types/TodoItem';

export const TodoItem = (props: TodoItemProps) => {
  const { item, toggleTodoCompletion } = props;

  const handleCheckboxChange = () => {
    toggleTodoCompletion(item);
  };

  return (
    <li>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.completed}
          onChange={handleCheckboxChange}
        />
        <label>{item.item}</label>
        <button className="destroy" />
      </div>
      <input className="edit" value="Create a TodoMVC template" />
    </li>
  );
};
