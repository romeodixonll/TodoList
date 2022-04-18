import React from "react";

const SingleTodo = ({ setSearchTerm, setTodoSelected, todo }) => {
  //updated todoselected state to render all todo
  const renderAllTodos = () => {
    setTodoSelected(false);
    setSearchTerm("");
  };

  /////////////////////////////////////////
  return (
    <div className="todoInfo">
      <h1>{todo.todo}</h1>
      <h2>Completed: {todo.completed ? "True" : "False"}</h2>
      <h3>Id: {todo.id}</h3>
      <button onClick={renderAllTodos} className="complete-btn">
        Go Back
      </button>
    </div>
  );
};

export default SingleTodo;
