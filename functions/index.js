const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => {
      console.log('notification added', doc);
    });
}

exports.projectCreated = functions.firestore
  .document('todos/{todoId}')
  .onCreate(doc => {
    const todo = doc.data();
    const notification = {
      content: 'Added a new project',
      user: `${todo.authorFirstName} ${todo.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    }

    return createNotification(notification);
  });