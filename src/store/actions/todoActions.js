export const createTodo = (todo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({type: 'CREATE_TODO', todo: todo})
  }
};