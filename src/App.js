import React, { useState, useEffect } from 'react';
import './styles/global.css';
import NewTodo from './componentes/NewTodo';
import TodoList from './componentes/TodoLIst';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todoList');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);
  // Passar um array vazio como dependência faz com que este useEffect seja executado apenas uma vez

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (value) => {
    setTodos([
      ...todos,
      { id: new Date().getTime(), title: value, checked: false },
    ]);
  };
  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };
  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">To do list</h1>
      </header>
      <section className="main">
        <div className="input-container">
          <NewTodo onNewTodo={onNewTodo} />
        </div>
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </section>
    </section>
  );
}

export default App;
