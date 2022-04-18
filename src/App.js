import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";
import SingleTodo from "./components/SingleTodo";

function App() {

  //Fetch data from site to render into todo list
  useEffect(() => {
    getTodos();
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
//////////////////////////////////////////////////////


  //State variables
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [sortBy, setSortBy] = useState("A-Z");
  const [searchTerm, setSearchTerm] = useState("");
  const [todoSelected, setTodoSelected] = useState(false);
  const [singleTodo, setSingleTodo] = useState({});
  /////////////////////////////////////////////////////////

  //Use effect for filter functions 
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //functions called to filter completed and uncompleted todos
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
////////////////////////////////////////////////////////////


//todoselected(Boolean) -- State changed when clicked on todo single row  
  return !todoSelected ? (
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
        sortBy={sortBy}
        setSortBy={setSortBy}
        setSearchTerm={setSearchTerm}
      />
      <TodoList
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        todos={todos}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchTerm={searchTerm}
        setTodoSelected={setTodoSelected}
        setSingleTodo={setSingleTodo}
      />
    </div>
  ) : (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <SingleTodo setTodoSelected={setTodoSelected} todo={singleTodo} />
    </div>
  );
}

export default App;
