// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0otnJmC59Bpo_b4fa6XQ_CaCCa2BnN5A",
  authDomain: "new-coffee-store.firebaseapp.com",
  projectId: "new-coffee-store",
  storageBucket: "new-coffee-store.appspot.com",
  messagingSenderId: "49263174952",
  appId: "1:49263174952:web:f7236865ddd444507b1c1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;