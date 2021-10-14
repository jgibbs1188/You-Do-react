import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Alert, Button } from 'reactstrap';
import { deleteTodo, updateTodo } from '../api/data/todoData';

const TodoStyling = styled.div`
  margin: 10px 20%;
  margin-top: 3rem;
  background-color: white;
  width: 60%;
  border-radius: 0.25rem;

  div {
    flex-grow: 1;
  }
  h5 {
    flex-grow: 2;
    margin-left: 20px;
  }
`;

const Div = styled.div`
  display: flex;
  flex-grow: 3;
  justify-content: flex-end;
`;

export default function Todo({ taco, setTodos, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteTodo(taco.firebaseKey).then(setTodos);
    }
    if (method === 'complete') {
      updateTodo({ ...taco, complete: true }).then(setTodos);
    }
  };

  return (
    <>
      <TodoStyling>
        <Alert color="light">
          <Button
            onClick={() => handleClick('complete')}
            className="btn btn-success"
            type="button"
          >
            COMPLETE
          </Button>
          {taco.name}
          <Div>
            <Button
              onClick={() => setEditItem(taco)}
              className="btn btn-info"
              type="button"
            >
              EDIT
            </Button>
            <Button
              onClick={() => handleClick('delete')}
              className="btn btn-danger"
              type="button"
            >
              DELETE
            </Button>
          </Div>
        </Alert>
      </TodoStyling>
    </>
  );
}

Todo.propTypes = {
  taco: PropTypes.shape({
    name: PropTypes.string,
    complete: PropTypes.bool,
    date: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
