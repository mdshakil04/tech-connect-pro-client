// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXvvVoGvfrSSWSUDK8UbpoGP_xfSqN-W4",
  authDomain: "tech-connect-pro.firebaseapp.com",
  projectId: "tech-connect-pro",
  storageBucket: "tech-connect-pro.appspot.com",
  messagingSenderId: "256157710851",
  appId: "1:256157710851:web:5d119491bae809166c2c36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// export default app;