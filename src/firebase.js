// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS_D5lGW-vZ3GGOrL0zsZF2I12nF3IJoA",
  authDomain: "local-service-connector-79b2d.firebaseapp.com",
  projectId: "local-service-connector-79b2d",
  storageBucket: "local-service-connector-79b2d.firebasestorage.app",
  messagingSenderId: "891124677488",
  appId: "1:891124677488:web:fb12ba4df58187feff6db5",
  measurementId: "G-HYGBJ1W3GP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics }; 