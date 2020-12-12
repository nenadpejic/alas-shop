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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();