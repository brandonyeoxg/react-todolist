const initState = {
  todos: [
    {id: '1', title: 'todo 1', content: 'todo content 1'},
    {id: '2', title: 'todo 2', content: 'todo content 2'},
    {id: '3', title: 'todo 3', content: 'todo content 3'},
  ]
};

const todoReducer = (state = initState, action) => {
  return state;
}

export default todoReducer;