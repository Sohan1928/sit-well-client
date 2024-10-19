// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWguKqAw9AQF1gP3tNUy4d3DC9Br8JVMA",
  authDomain: "sit-well-93f9a.firebaseapp.com",
  projectId: "sit-well-93f9a",
  storageBucket: "sit-well-93f9a.appspot.com",
  messagingSenderId: "708820550827",
  appId: "1:708820550827:web:174280f2af14fa114f23ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export { app, provider };
