// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3hYZGFUXRjwrzsVZEdp3zpIGhMJhh1Mo",
  authDomain: "grocery-shop-8c816.firebaseapp.com",
  projectId: "grocery-shop-8c816",
  storageBucket: "grocery-shop-8c816.appspot.com",
  messagingSenderId: "849752344209",
  appId: "1:849752344209:web:2c54f5043324a58551e130"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;