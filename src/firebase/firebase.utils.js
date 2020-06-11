import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyChn_ppBAOSgM85FyQgMxB0_9dFaoJo8uY",
  authDomain: "crwn-db-8fc49.firebaseapp.com",
  databaseURL: "https://crwn-db-8fc49.firebaseio.com",
  projectId: "crwn-db-8fc49",
  storageBucket: "crwn-db-8fc49.appspot.com",
  messagingSenderId: "931953584448",
  appId: "1:931953584448:web:f18dacd18caf2338a172a5",
  measurementId: "G-V47VW0V0JH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;