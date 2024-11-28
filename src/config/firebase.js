// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx6D_pi5ixHZ2loCNHX2fBKARizZv96Wk",
  authDomain: "vite-contact-194e5.firebaseapp.com",
  projectId: "vite-contact-194e5",
  storageBucket: "vite-contact-194e5.appspot.com",
  messagingSenderId: "67501699553",
  appId: "1:67501699553:web:6d2c17f830d2480e3c62a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);