import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCFRQiDSoyUpdBN8QztR0xn0LkVW9ca3Io",
  authDomain: "crwn-db-76b46.firebaseapp.com",
  projectId: "crwn-db-76b46",
  storageBucket: "crwn-db-76b46.appspot.com",
  messagingSenderId: "188149521717",
  appId: "1:188149521717:web:bd931ee684f5434b4b407c",
  measurementId: "G-ZW0L54NVW8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
