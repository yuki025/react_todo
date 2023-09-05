import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">My Tasks</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>✓</button>
              <button onClick={() => onClickDelete(index)}>×</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
