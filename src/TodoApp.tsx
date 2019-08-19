import React, { useState, useEffect } from 'react';

import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TodoItem } from './types/TodoItem';

export const TodoApp = () => {
  // State hooks.
  const [incrementor, setIncrementor] = useState(0);
  const [todoList, setTodoList] = useState(new Array<TodoItem>());
  const [selectAll, setSelectAll] = useState(false);

  // Effect hooks.
  useEffect(() => {
    const initialTodos = [
      {
        id: 0,
        task: 'Learn React',
        completed: false,
        editing: false,
      },
      {
        id: 1,
        task: 'Learn TypeScript',
        completed: true,
        editing: false,
      },
    ];
    setTodoList(initialTodos);
  }, []);

  useEffect(() => {
    if (todoList.length > 0) {
      todoList.sort((a, b) => a.id - b.id);
      const lastItem = todoList[todoList.length - 1];
      const lastItemId = lastItem.id;
      if (lastItemId >= incrementor) {
        setIncrementor(incrementor + 1);
      }
    }
  }, [todoList, incrementor]);

  const addNewTodo = (task: string, completed = false, editing = false) => {
    const newTodos = [...todoList];
    newTodos.push({
      id: incrementor,
      task,
      completed,
      editing,
    });
    setTodoList(newTodos);
  };

  const updateTodo = (item: TodoItem) => {
    const newTodos = [...todoList];
    const todoToUpdate = newTodos.findIndex(todo => todo.id === item.id);
    if (todoToUpdate > -1) {
      newTodos[todoToUpdate] = item;
    }
    setTodoList(newTodos);
  };

  const removeTodo = (item: TodoItem) => {
    const newTodos = todoList.filter(todo => todo !== item);
    setTodoList(newTodos);
  };

  const updateAllTodos = (completed: boolean) => {
    const newTodos = todoList.map(item => {
      item.completed = completed;
      return item;
    });
    setTodoList(newTodos);
  };

  return (
    <section className="todoapp">
      <Header addNewTodo={addNewTodo} />
      <TodoList
        todoList={todoList}
        selectAll={selectAll}
        setSelectAll={setSelectAll}
        updateAllTodos={updateAllTodos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
      <Footer
        itemCount={todoList.length}
        completedItems={todoList.filter(item => item.completed).length}
      />
    </section>
  );
};
