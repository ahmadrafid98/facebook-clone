import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC41JjU4csfOmLzeGbQhufIqRKCj-P7qGk",
  authDomain: "facebook-clone-b7cfd.firebaseapp.com",
  projectId: "facebook-clone-b7cfd",
  storageBucket: "facebook-clone-b7cfd.appspot.com",
  messagingSenderId: "457205530490",
  appId: "1:457205530490:web:6ffa22d1a00775ca5e20c3",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
