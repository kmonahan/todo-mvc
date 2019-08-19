import { TodoInputProps } from '../types/TodoInput';
import React, { useState, KeyboardEvent } from 'react';

export const TodoInput = (props: TodoInputProps) => {
  const { item, updateTodoValue } = props;
  const [value, setValue] = useState(item.task);

  const handleBlur = () => updateTodoValue(value.trim());
  const handleKeyup = (e: KeyboardEvent) => {
    const { keyCode } = e;
    const target = e.target as HTMLInputElement;

    if (keyCode === 13) {
      updateTodoValue(value.trim());
    } else if (keyCode === 27) {
      updateTodoValue(item.task);
    } else {
      setValue(target.value);
    }
  };

  return (
    <input
      className="edit"
      defaultValue={value}
      autoFocus
      onBlur={handleBlur}
      onKeyUp={handleKeyup}
    />
  );
};
