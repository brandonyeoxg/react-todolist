import React from 'react';
import TodoSummary from './TodoSummary';

const TodoList = ({todos}) => {
  const todosList = (todos) ? todos.map(todo => {
    return(<TodoSummary todo={todo} key={todo.id} />);
  }) : null;
  return (
    <div className="todo-list section">
      {todosList}
    </div>
  );
}

export default TodoList;