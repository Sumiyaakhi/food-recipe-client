// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjllHxEyASYA2fzs64pUe4TvCVYJhldOM",
  authDomain: "food-recipe-foodie.firebaseapp.com",
  projectId: "food-recipe-foodie",
  storageBucket: "food-recipe-foodie.appspot.com",
  messagingSenderId: "1033101669750",
  appId: "1:1033101669750:web:f9a1a0616ae8d89befb657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;