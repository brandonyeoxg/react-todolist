import React from 'react';

const TodoDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section todo-details">
      <div className="card z-depth-0">
        <div className="card-contet">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus, quasi sit at commodi vitae tempore error recusandae voluptas doloremque accusantium sed, minus distinctio odit. Incidunt, ut. Rem, ullam sed.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by BY</div>
          <div>4th May, 1am</div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetails;