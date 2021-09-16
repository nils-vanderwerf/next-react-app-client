// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app"
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsOJUK2X8_GFt889m-lTqT3_8GD8wl0RE",
  authDomain: "auth-development-8e630.firebaseapp.com",
  projectId: "auth-development-8e630",
  storageBucket: "auth-development-8e630.appspot.com",
  messagingSenderId: "261788341436",
  appId: "1:261788341436:web:3db6cb04d9bdbb1bdb2cb9",
  measurementId: "G-34TYW9XTR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;