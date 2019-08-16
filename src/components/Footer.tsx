import React from 'react';
import { FooterProps } from '../types/Footer';

export const Footer = (props: FooterProps) => {
  const { itemCount, completedItems } = props;
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
          <a className="selected" href="/">
            All
          </a>
        </li>
        <li>
          <a href="/active">Active</a>
        </li>
        <li>
          <a href="/completed">Completed</a>
        </li>
      </ul>
      {completedItems > 0 && (
        <button className="clear-completed">Clear completed</button>
      )}
    </footer>
  );
};
