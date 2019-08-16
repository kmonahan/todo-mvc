import React, { useState } from 'react';

import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const TodoApp = () => {
  // @ts-ignore
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

  return (
    <section className="todoapp">
      <Header addNewTodo={addNewTodo} />
      <TodoList todoList={todoList} />
      <Footer
        itemCount={todoList.length}
        completedItems={todoList.filter(item => item.completed).length}
      />
    </section>
  );
};
