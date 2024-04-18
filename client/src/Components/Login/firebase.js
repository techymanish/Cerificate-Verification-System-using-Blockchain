// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFocRm-sRTA5cb52ouOAgYhPBmkmEw0Dc",
  authDomain: "certificate-verification-73487.firebaseapp.com",
  projectId: "certificate-verification-73487",
  storageBucket: "certificate-verification-73487.appspot.com",
  messagingSenderId: "539976158283",
  appId: "1:539976158283:web:1e093a0b926dea96b651ce",
  measurementId: "G-031VHHETZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {app,auth,db};