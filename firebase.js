// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_T00-ulkqcThuepFm4nETU5V3c7lzdjU",
  authDomain: "nexus-d7503.firebaseapp.com",
  projectId: "nexus-d7503",
  storageBucket: "nexus-d7503.firebasestorage.app",
  messagingSenderId: "701529934771",
  appId: "1:701529934771:web:19aefebdc14dbbcc4c19c6",
  measurementId: "G-DX5CE1X5QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
