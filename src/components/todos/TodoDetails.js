import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const TodoDetails = (props) => {
  const { todo } = props;
  if (todo) {
    return (
      <div className="container section todo-details">
        <div className="card z-depth-0">
          <div className="card-contet">
            <span className="card-title">{ todo.title }</span>
            <p>{ todo.content }}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {todo.authorFirstName} {todo.authorLastName}</div>
            <div>4th May, 1am</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading Project...</p>
      </div>
    );
  }
}

const mapStatetoProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const todos = state.firestore.data.todos;
  const todo = todos ? todos[id] : null;
  return {
    todo: todo
  }
}

export default compose(
  connect(mapStatetoProps),
  firestoreConnect([
    {collection: 'todos'}
  ])
)(TodoDetails);