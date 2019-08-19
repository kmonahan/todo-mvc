import React from 'react';
import { NavLink } from 'react-router-dom';
import { FooterProps } from '../types/Footer';

export const Footer = (props: FooterProps) => {
  const { itemCount, completedItems, clearCompletedTodos } = props;
  if (itemCount < 1) {
    return null;
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemCount}</strong>
        {itemCount === 1 ? ' item' : ' items'} left
      </span>
      {/* Remove this if you don't implement routing */}
      <ul className="filters">
        <li>
          <NavLink exact activeClassName="selected" to="/">
            All
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/active">
            Active
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/completed">
            Completed
          </NavLink>
        </li>
      </ul>
      {completedItems > 0 && (
        <button className="clear-completed" onClick={clearCompletedTodos}>
          Clear completed
        </button>
      )}
    </footer>
  );
};
