import React from 'react';
import { TodoItemProps } from '../types/TodoItem';

export const TodoItem = (props: TodoItemProps) => {
  const { item } = props;

  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" checked={item.completed} />
        <label>{item.item}</label>
        <button className="destroy" />
      </div>
      <input className="edit" value="Create a TodoMVC template" />
    </li>
  );
};
