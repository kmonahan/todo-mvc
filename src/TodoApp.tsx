import React, { useState } from 'react';

import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TodoItem } from './types/TodoItem';

export const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    {
      item: 'Learn React',
      completed: false,
    },
    {
      item: 'Learn TypeScript',
      completed: true,
    },
  ]);

  const addNewTodo = (item: string, completed = false) => {
    const newTodos = [...todoList];
    newTodos.push({
      item,
      completed,
    });
    setTodoList(newTodos);
  };

  const toggleTodoCompletion = (item: TodoItem) => {
    const newTodos = [...todoList];
    const todoToUpdate = newTodos.findIndex(todo => todo === item);
    if (todoToUpdate > -1) {
      newTodos[todoToUpdate].completed = !newTodos[todoToUpdate].completed;
    }
    setTodoList(newTodos);
  };

  return (
    <section className="todoapp">
      <Header addNewTodo={addNewTodo} />
      <TodoList
        todoList={todoList}
        toggleTodoCompletion={toggleTodoCompletion}
      />
      <Footer
        itemCount={todoList.length}
        completedItems={todoList.filter(item => item.completed).length}
      />
    </section>
  );
};
