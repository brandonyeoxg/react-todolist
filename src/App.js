import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="todo-app container">
        <h1>Todo List</h1>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
