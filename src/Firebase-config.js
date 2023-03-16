// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth ,GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWky6rXUllZItkLkdQNPctV7xvqfasG3o",
  authDomain: "blog-project-2c1f3.firebaseapp.com",
  projectId: "blog-project-2c1f3",
  storageBucket: "blog-project-2c1f3.appspot.com",
  messagingSenderId: "52687315941",
  appId: "1:52687315941:web:9fd631473f658d51e3050c",
  measurementId: "G-W8ZH2WVBQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
