// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9D7_JJfeEc3R87QUrKcdq4Z_5S4NX7ps",
  authDomain: "elementwo-633f5.firebaseapp.com",
  projectId: "elementwo-633f5",
  storageBucket: "elementwo-633f5.appspot.com",
  messagingSenderId: "529326770225",
  appId: "1:529326770225:web:24dd52a6c5f076851cad10",
  measurementId: "G-PF4MCCF973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();