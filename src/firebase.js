
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDIuBTWX3-U6dHYNN8GY6E1i-3C6qKQyeQ",
  authDomain: "todolist-87a6a.firebaseapp.com",
  databaseURL: "https://todolist-87a6a-default-rtdb.firebaseio.com",
  projectId: "todolist-87a6a",
  storageBucket: "todolist-87a6a.appspot.com",
  messagingSenderId: "52042473398",
  appId: "1:52042473398:web:bbd9b538daf89f5c816b17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app)
export const auth=getAuth()