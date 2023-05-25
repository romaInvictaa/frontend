// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDR9WlBc72uP5DgCkj6FUJYjS8jR9un3Tk",
    authDomain: "roma-invicta.firebaseapp.com",
    projectId: "roma-invicta",
    storageBucket: "roma-invicta.appspot.com",
    messagingSenderId: "234815306640",
    appId: "1:234815306640:web:380fc9721df249d87b9115",
    measurementId: "G-G1531YXEEP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)