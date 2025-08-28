// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3R71E0NZOh5u6b-EC5HXhUM4tKonQqUc",
  authDomain: "module-50-email-password-login.firebaseapp.com",
  projectId: "module-50-email-password-login",
  storageBucket: "module-50-email-password-login.firebasestorage.app",
  messagingSenderId: "390291765258",
  appId: "1:390291765258:web:2b87815e076b175abe47f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);