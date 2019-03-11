import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play dragon age'},
    ],
    curId: 2
  }

  addTodo = (todo) => {
    const id = this.state.curId + 1;
    this.setState({curId:id});
    todo.id = id;
    const todoCopy = [...this.state.todos, todo];
    this.setState({todos: todoCopy});
  }

  deleteTodo = (id) => {
    // console.log(id);
    const newTodoList = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({todos: newTodoList});
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
