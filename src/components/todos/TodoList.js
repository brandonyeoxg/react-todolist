import React from 'react';

const TodoList = () => {
  return (
    <div className="todo-list section">
      <div className="card z-depth-0 todo-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Todo title</span>
          <p>Posted by BY</p>
          <p className="grey-text">4th May, 1am</p>
        </div>
      </div>
      <div className="card z-depth-0 todo-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Todo title</span>
          <p>Posted by BY</p>
          <p className="grey-text">4th May, 1am</p>
        </div>
      </div>
      <div className="card z-depth-0 todo-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Todo title</span>
          <p>Posted by BY</p>
          <p className="grey-text">4th May, 1am</p>
        </div>
      </div>
    </div>
  );
}

export default TodoList;