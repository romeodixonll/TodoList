import React from "react";

const Todo = ({
  setSingleTodo,
  setTodoSelected,
  id,
  todo,
  todos,
  setTodos,
  completed,
}) => {
  //Buttons for single todo delete todo
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };
////////////////////////////////////////
  //Button for single todo toggle completed variable todo
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
/////////////////////////////////////////
  //Update state todoselected to render single todo
  //pass object to state for single todo component use
  const renderSingleTodo = () => {
    setTodoSelected(true);
    setSingleTodo({ todo: todo, id: id, completed: completed });
  };
  /////////////////////////////////////////////
  return (
    <div className="todo">
      <li
        onClick={renderSingleTodo}
        className={`todo-item ${completed ? "completed" : ""}`}
      >
        {todo}
      </li>
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
