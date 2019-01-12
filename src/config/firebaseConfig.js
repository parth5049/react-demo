import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLEu7LBShVEBtW3a0TUgCe2osqicy9iPw",
  authDomain: "react-cool-project.firebaseapp.com",
  databaseURL: "https://react-cool-project.firebaseio.com",
  projectId: "react-cool-project",
  storageBucket: "react-cool-project.appspot.com",
  messagingSenderId: "1064011671182"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;