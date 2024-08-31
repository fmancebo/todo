import React from "react";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

import { List, ItemList, Dados, BtnClearCont } from "./styles";

function TodoList({ todos, onToggle, onRemove, onRemoveResolved }) {
  const hasItems = todos.length > 0;
  return (
    <List>
      {todos.map((todo) => (
        <ItemList key={todo.id.toString()}>
          <Dados
            className={["todo", todo.checked ? "checked" : ""].join(" ")}
            onClick={() => onToggle && onToggle(todo)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onToggle(todo);
              }
            }}
            role='button'
            tabIndex={0}
          >
            {todo.title}
          </Dados>
          <button
            className='remove'
            type='button'
            aria-label='Delete'
            onClick={() => onRemove && onRemove(todo)}
          >
            <MdDelete size={28} />
          </button>
        </ItemList>
      ))}
      {hasItems && (
        <BtnClearCont>
          <button className='remove' type='button' aria-label='Delete' onClick={onRemoveResolved}>
            <MdDelete size={36} />
          </button>
        </BtnClearCont>
      )}
    </List>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onRemoveResolved: PropTypes.func.isRequired,
};

export default TodoList;
