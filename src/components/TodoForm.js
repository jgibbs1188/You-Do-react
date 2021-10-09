import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createTodo } from '../api/data/todoData';

export default function TodoForm({ obj }) {
  const [formInput, setFormInput] = useState({
    name: obj.name || '',
    id: obj.id || '',
  });

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(formInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            name="name"
            id="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="btn btn-info">
          SUBMIT
        </button>
      </form>
    </>
  );
}

TodoForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};

// ADDED THE BELOW CODE TO OFFSET THE OBJ IS REQUIRED BUT UNDEFINED ERROR
TodoForm.defaultProps = { obj: {} };
