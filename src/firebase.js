import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBV5C5FoU-aoNV-iE1pA5SEh3NvlmmB9Jg",
    authDomain: "clone-ac334.firebaseapp.com",
    projectId: "clone-ac334",
    storageBucket: "clone-ac334.appspot.com",
    messagingSenderId: "442599816095",
    appId: "1:442599816095:web:c98f36ab69e9c964cd5baa",
    measurementId: "G-QYEP9H4Q8N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}; 