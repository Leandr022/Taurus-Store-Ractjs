// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxHHYSia0ajDsOwqXdg4TilUJ9T2j67uQ",
    authDomain: "taurus-react.firebaseapp.com",
    projectId: "taurus-react",
    storageBucket: "taurus-react.appspot.com",
    messagingSenderId: "85898294147",
    appId: "1:85898294147:web:a0dc5562aa665a82607cb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseConnect= () => app