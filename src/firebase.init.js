// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApHW5J_rmzS70NxaI4i6ocdqXFgjJ9rWo",
  authDomain: "the-shutterman.firebaseapp.com",
  projectId: "the-shutterman",
  storageBucket: "the-shutterman.appspot.com",
  messagingSenderId: "901770031146",
  appId: "1:901770031146:web:fdd0d341afed5463935353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;
