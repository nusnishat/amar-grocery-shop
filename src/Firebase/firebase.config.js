// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc05X03IySK94qICIte0ZPjdpDSb2ws0s",
  authDomain: "amar-grocery-shop.firebaseapp.com",
  projectId: "amar-grocery-shop",
  storageBucket: "amar-grocery-shop.appspot.com",
  messagingSenderId: "590861992051",
  appId: "1:590861992051:web:f87fb1ff28053e63f9ea06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;