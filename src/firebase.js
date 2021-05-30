import firebase from "firebase";
// import 'firebase/storage';
// import 'firebase/firestore;
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDs713FiMwGD70ZgvzEMx6YrWmbJ7LCjo",
  authDomain: "twitter-clone-d53e7.firebaseapp.com",
  projectId: "twitter-clone-d53e7",
  storageBucket: "twitter-clone-d53e7.appspot.com",
  messagingSenderId: "903279100962",
  appId: "1:903279100962:web:fe6a0041c5b9ee74cfb67b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
