import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyD5dDVNxQjrN7wyvaTLwv6cHppnxs1wfPM",
  authDomain: "react-firebase-mario.firebaseapp.com",
  databaseURL: "https://react-firebase-mario.firebaseio.com",
  projectId: "react-firebase-mario",
  storageBucket: "react-firebase-mario.appspot.com",
  messagingSenderId: "148140898504",
  appId: "1:148140898504:web:8f50dba57c4cacaf774dfd",
  measurementId: "G-2GHSZ06BND"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;