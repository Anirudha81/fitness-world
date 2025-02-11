// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE7qzooDBYrdg9XHUM0DR2L1S6khHH2HU",
  authDomain: "login-page-6dd43.firebaseapp.com",
  projectId: "login-page-6dd43",
  storageBucket: "login-page-6dd43.firebasestorage.app",
  messagingSenderId: "717347185792",
  appId: "1:717347185792:web:9ae10707d0692667407265",
  measurementId: "G-XX5GHZLYYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
