
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8QOCt2hyfj1X6F1YD--5UHEExhIViUz4",
  authDomain: "edu-project-996e3.firebaseapp.com",
  projectId: "edu-project-996e3",
  storageBucket: "edu-project-996e3.appspot.com",
  messagingSenderId: "869724691353",
  appId: "1:869724691353:web:91c93c3163393b33ab9108"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export const db = getFirestore(app);
