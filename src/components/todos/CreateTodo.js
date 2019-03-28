import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { createTodo } from '../../store/actions/todoActions';
import { Redirect } from 'react-router-dom';

class CreateTodo extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return (<Redirect to='/signin' />);
    }
    return(
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Todo</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (todo) => dispatch(createTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);