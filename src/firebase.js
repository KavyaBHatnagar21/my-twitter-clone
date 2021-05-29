import firebase from "firebase";

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
export default db;
