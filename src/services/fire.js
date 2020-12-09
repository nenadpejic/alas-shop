import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

var firebaseConfig = {
  apiKey: "AIzaSyBjX7P8g-gRrIdfDo-Xxc6cGXRpc7gbzsE",
  authDomain: "test-alas-2801e.firebaseapp.com",
  projectId: "test-alas-2801e",
  storageBucket: "test-alas-2801e.appspot.com",
  messagingSenderId: "195554176702",
  appId: "1:195554176702:web:1db3780ac181a80b7778ef"
};

const fire = firebase.initializeApp(firebaseConfig);
export const auth = fire.auth();
export const firestore = fire.firestore();
export const functions = fire.functions();
export default fire;