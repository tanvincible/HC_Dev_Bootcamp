// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjJSYcF_cvIHLywtgwNikz_t2MKiIG43g",
  authDomain: "hc-dev-bootcamp.firebaseapp.com",
  projectId: "hc-dev-bootcamp",
  storageBucket: "hc-dev-bootcamp.appspot.com",
  messagingSenderId: "863290795988",
  appId: "1:863290795988:web:cf8f53ed9e0a63689ed841",
  measurementId: "G-HDFFE1C7PG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export the Firestore instance
