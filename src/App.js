import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      getTodos();
    } else {
      getLocalTodos();
    }
  }, []);
  const getTodos = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/todos"
    );
    if (response.status === 200) {
      const data = await response.json();
      setTodos(data);
    }
  };

  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //function
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
