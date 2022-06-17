// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebase = {
    apiKey: "AIzaSyCWdLQekRvfJkYSlNfXGPZnXadCvX1OvJI",
    authDomain: "react-project-3-950fd.firebaseapp.com",
    projectId: "react-project-3-950fd",
    storageBucket: "react-project-3-950fd.appspot.com",
    messagingSenderId: "1092712270194",
    appId: "1:1092712270194:web:6cdec0c792eff5b6e3b5eb"
};

// Initialize Firebase
const app = initializeApp(firebase);

const database = getDatabase(app);

export default database;