// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYKf8MhZNRNxOIHPKXMLhDlSsWe1mv0qs",
  authDomain: "otp-verification-9caca.firebaseapp.com",
  projectId: "otp-verification-9caca",
  storageBucket: "otp-verification-9caca.appspot.com",
  messagingSenderId: "855715565953",
  appId: "1:855715565953:web:a673c18276527d0a781880",
  measurementId: "G-JF0TPEJV11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
// const analytics = getAnalytics(app);