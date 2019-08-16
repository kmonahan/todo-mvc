import React, { KeyboardEvent, ChangeEvent, useState } from 'react';
import { HeaderProps } from '../types/Header';

export const Header = (props: HeaderProps) => {
  const [todoInput, setTodoInput] = useState('');
  const { addNewTodo } = props;

  const keyUpHandler = (e: KeyboardEvent) => {
    const { keyCode } = e;
    const target = e.target as HTMLInputElement;
    if (keyCode === 13) {
      submitHandler();
    } else {
      setTodoInput(target.value);
    }
  };

  const changeHandler = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTodoInput(target.value);
  };

  const submitHandler = () => {
    const newTodo = todoInput.trim();
    if (newTodo !== '') {
      addNewTodo(todoInput);
      setTodoInput('');
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyUp={keyUpHandler}
        onChange={changeHandler}
        value={todoInput}
      />
    </header>
  );
};
