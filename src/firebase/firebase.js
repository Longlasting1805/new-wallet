// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGI_3QDDgsSCJKrjSacqutwWHowdVHqWs",
  authDomain: "e-wallet-47ac0.firebaseapp.com",
  projectId: "e-wallet-47ac0",
  storageBucket: "e-wallet-47ac0.appspot.com",
  messagingSenderId: "370587415831",
  appId: "1:370587415831:web:a19c6e153d309529c7f352",
  measurementId: "G-7VF99MSGWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth };