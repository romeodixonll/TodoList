import React from "react";
import Todo from "./Todo";

const TodoList = ({
  setSingleTodo,
  setTodoSelected,
  sortBy,
  searchTerm,
  setTodos,
  todos,
  filteredTodos,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* filter todo with search box or filter todos alphabetical order */}
        {filteredTodos
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .sort((a, b) => {
            if (sortBy === "A-Z") {
              if (a.title < b.title) {
                return -1;
              } else if (a.title > b.title) {
                return 1;
              }
            } else if (sortBy === "Z-A") {
              if (a.title > b.title) {
                return -1;
              } else if (a.title < b.title) {
                return 1;
              }
            }
          })
          .map((todo) => (
            // Map each todo with Todo components
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo.title}
              id={todo.id}
              completed={todo.completed}
              setTodoSelected={setTodoSelected}
              setSingleTodo={setSingleTodo}
            />
            //////////////////////////////
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
