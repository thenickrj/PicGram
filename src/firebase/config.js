import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuqYyqHVWq35rMhgH3Y9s2BOEeLliCVfw",
  authDomain: "picgram-99e7f.firebaseapp.com",
  projectId: "picgram-99e7f",
  storageBucket: "picgram-99e7f.appspot.com",
  messagingSenderId: "981004095360",
  appId: "1:981004095360:web:cf70af6f79a5e7da10fb65",
};

//Initialize firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
