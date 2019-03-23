export const createTodo = (todo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('todos').add({
      ...todo,
      authorFirstName: 'Bran',
      authorLastName: 'Yeo',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_TODO', todo: todo});
    }).catch((err) => {
      dispatch({type: 'CREATE_TODO_ERROR', err});
    })
  }
};