import React from 'react';

const TodoSummary = () => {
  return (
    <div className="card z-depth-0 todo-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">Todo title</span>
        <p>Posted by BY</p>
        <p className="grey-text">4th May, 1am</p>
      </div>
    </div>
  )
}

export default TodoSummary;
