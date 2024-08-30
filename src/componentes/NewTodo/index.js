/* eslint-disable no-alert */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdAddToPhotos } from "react-icons/md";
import { Container, InputTodo, ButtonInput } from "./styles";

function NewTodo({ onNewTodo }) {
  const SCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState("");

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    if (value.trim() === "") {
      alert("Por favor, insira um item antes de adicionar.");
      return;
    }

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
    <Container>
      <InputTodo
        className='new-todo'
        placeholder='O que preciso?'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        required
      />
      <ButtonInput type='button' className='button' onClick={submit}>
        <MdAddToPhotos style={{ height: "35px", width: "35px" }} />
      </ButtonInput>
    </Container>
  );
}
NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
