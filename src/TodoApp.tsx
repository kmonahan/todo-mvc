import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TodoItem } from './types/TodoItem';

export const TodoApp = () => {
  // Constants.
  const LOCAL_STORAGE_KEY = 'todos-react';

  // State hooks.
  const [incrementor, setIncrementor] = useState(0);
  const [todoList, setTodoList] = useState(new Array<TodoItem>());
  const [selectAll, setSelectAll] = useState(false);

  // Refs.
  const isOnLoad = useRef(true);

  // Effect hooks.
  useEffect(() => {
    if (isOnLoad.current) {
      const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedTodos) {
        const storedTodosObj = JSON.parse(storedTodos);
        setTodoList(storedTodosObj);
      }
      isOnLoad.current = false;
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
    }
    return () => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
    };
  }, [todoList]);

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

  useEffect(() => {
    const completedTodos = todoList.filter(item => item.completed).length;
    if (completedTodos === 0 && selectAll) {
      setSelectAll(false);
    } else if (completedTodos === todoList.length && !selectAll) {
      setSelectAll(true);
    }
  }, [todoList, selectAll]);

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

  const clearCompletedTodos = () => {
    const onlyOpenTodos = todoList.filter(item => !item.completed);
    setTodoList(onlyOpenTodos);
  };

  const AllTodos = () => {
    return (
      <TodoList
        todoList={todoList}
        selectAll={selectAll}
        setSelectAll={setSelectAll}
        updateAllTodos={updateAllTodos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    );
  };

  const CompletedTodos = () => {
    return (
      <TodoList
        todoList={todoList.filter(item => item.completed)}
        selectAll={selectAll}
        setSelectAll={setSelectAll}
        updateAllTodos={updateAllTodos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    );
  };

  const ActiveTodos = () => {
    return (
      <TodoList
        todoList={todoList.filter(item => !item.completed)}
        selectAll={selectAll}
        setSelectAll={setSelectAll}
        updateAllTodos={updateAllTodos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    );
  };

  return (
    <Router>
      <section className="todoapp">
        <Header addNewTodo={addNewTodo} />
        <Route exact path="/" component={AllTodos} />
        <Route path="/active" component={ActiveTodos} />
        <Route path="/completed" component={CompletedTodos} />
        <Footer
          itemCount={todoList.length}
          completedItems={todoList.filter(item => item.completed).length}
          clearCompletedTodos={clearCompletedTodos}
        />
      </section>
    </Router>
  );
};
