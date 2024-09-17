import React, { useState, useEffect } from "react";
import "../styles/global.css";
import Header from "../componentes/header";
import NewTodo from "../componentes/NewTodo";
import TodoList from "../componentes/TodoLIst";

function App() {
  // Recupera os dados do localStorage e define o estado inicial
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todoList");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Atualiza o localStorage sempre que o estado todos mudar
  useEffect(() => {
    // console.log("Dados salvos no localStorage:", todos);
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (value) => {
    setTodos([...todos, { id: new Date().getTime(), title: value, checked: false }]);
  };
  const onToggle = (todo) => {
    setTodos(todos.map((obj) => (obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj)));
  };
  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };
  const handleRemoveResolved = () => {
    setTodos(todos.filter((todo) => !todo.checked));
  };
  const handleSortAsc = () => {
    setTodos([...todos].sort((a, b) => a.title.localeCompare(b.title)));
  };

  const handleSortDesc = () => {
    setTodos([...todos].sort((a, b) => b.title.localeCompare(a.title)));
  };

  return (
    <section id='app'>
      <Header onSortAsc={handleSortAsc} onSortDesc={handleSortDesc} />
      <NewTodo onNewTodo={onNewTodo} />
      <div className='container'>
        <div className='wrapper'>
          <TodoList
            todos={todos}
            onToggle={onToggle}
            onRemove={onRemove}
            onRemoveResolved={handleRemoveResolved}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
