import React, { useEffect, useState } from 'react';
import { getTodos } from '../api/data/todoData';
import Routes from '../routes';
import Navigation from '../components/Navigation';
import TodoForm from '../components/TodoForm';

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    getTodos(false).then(setTodos);
  }, []);

  return (
    <>
      <Navigation />
      <h1>You-Do</h1>
      <TodoForm obj={editItem} setTodos={setTodos} setEditItem={setEditItem} />
      <Routes todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
    </>
  );
}

export default Initialize;
