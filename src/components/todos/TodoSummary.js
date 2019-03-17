import React from 'react';

const TodoSummary = ({todo}) => {
  return (
    <div className="card z-depth-0 todo-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{todo.title} - {todo.id}</span>
        <p>Posted by the BY</p>
        <p className="grey-text">4th May, 1am</p>
      </div>
    </div>
  )
}

export default TodoSummary;
