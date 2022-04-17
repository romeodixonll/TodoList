import React from "react";

const Todo = ({ id, todo, todos, setTodos, completed }) => {
  //events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{todo}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
