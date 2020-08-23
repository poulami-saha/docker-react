import React from "react";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos
        ? todos.map((todo) => (
            <li key={todo.task}>
              {todo.task} need to be done on{todo.day}
            </li>
          ))
        : null}
    </ul>
  );
};

export default TodoList;
