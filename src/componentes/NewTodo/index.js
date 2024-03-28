import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function NewTodo({ onNewTodo }) {
  const SCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === SCAPE_KEY) {
      erase();
    }
  };

  return (
    <div className="container">
      <input
        className="new-todo"
        placeholder="O que precisa ser feito?"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button type="button" className="button" onClick={submit}>
        Add
      </button>
    </div>
  );
}
NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
