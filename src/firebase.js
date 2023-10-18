import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPtAJHlAx5lL4Z3bma01mMbOCAN4CqgpM",
  authDomain: "disney-clone-d0df9.firebaseapp.com",
  projectId: "disney-clone-d0df9",
  storageBucket: "disney-clone-d0df9.appspot.com",
  messagingSenderId: "534919731909",
  appId: "1:534919731909:web:42822ebc487583c5106eac",
  measurementId: "G-22Q5G95SVF"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
