import React from 'react';
import TodoSummary from './TodoSummary';
import { Link } from 'react-router-dom';

const TodoList = ({todos}) => {
  const todosList = (todos) ? todos.map(todo => {
    return(
      <Link to={'/project/' + todo.id}>
        <TodoSummary todo={todo} key={todo.id} />
      </Link>);
  }) : null;
  return (
    <div className="todo-list section">
      {todosList}
    </div>
  );
}

export default TodoList;