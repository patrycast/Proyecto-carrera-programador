// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY1wAfRCTyX7BN_AtABF33h1zffhvnFi4",
  authDomain: "backgym-91d57.firebaseapp.com",
  projectId: "backgym-91d57",
  storageBucket: "backgym-91d57.firebasestorage.app",
  messagingSenderId: "1042548855879",
  appId: "1:1042548855879:web:9911e25558e8ee083ecd62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

