// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAOXKNBbyiB5W0RLrslli9JM7b96krxViQ",
  authDomain: "react2022-cbdd5.firebaseapp.com",
  projectId: "react2022-cbdd5",
  storageBucket: "react2022-cbdd5.appspot.com",
  messagingSenderId: "1057461738996",
  appId: "1:1057461738996:web:2c00f11f4dd2c726e92da1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};