import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getTodos } from '../api/data/todoData';
import Routes from '../routes';
import Navigation from '../components/Navigation';
import TodoForm from '../components/TodoForm';
import SignIn from '../views/SignIn';

function Initialize() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
        };
        setUser(userInfoObj);
        getTodos().then(setTodos);
      } else if (user || user === null) {
        setUser(false);
      }
    });

    getTodos(false).then(setTodos);
  }, []);

  return (
    <>
      {user ? (
        <>
          <Navigation />
          <TodoForm
            obj={editItem}
            setTodos={setTodos}
            setEditItem={setEditItem}
          />
          <Routes todos={todos} setTodos={setTodos} setEditItem={setEditItem} />
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default Initialize;
