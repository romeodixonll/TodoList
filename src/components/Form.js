import React from "react";

const Form = ({
  setSortBy,
  setStatus,
  setInputText,
  inputText,
  setTodos,
  todos,
  setSearchTerm,
}) => {
  //Saves input into state
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  /////////////////////////////////////
  //push added todo to todo list state
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      { title: inputText, completed: false, id: Math.random() * 1000 },
      ...todos,
    ]);
    //clear input state
    setInputText("");
  };
  //////////////////////////////////////////////
  //updated filter state to show completed or uncompleted
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  /////////////////////////////////////////////
  //updated sort state to sort alphabetical order
  const sortHandler = (e) => {
    setSortBy(e.target.value);
  };
  ///////////////////////////////////////////
  return (
    <div className="form">
      <form>
        <input
          placeholder="Add Todo"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />

        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
          <select
            label="Completed"
            onChange={statusHandler}
            name="todos"
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <div className="select">
          <select label="Sort" className="filter-todo" onChange={sortHandler}>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>

        <input
          placeholder="Search Todos"
          type="text"
          className="todo-input"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Form;
