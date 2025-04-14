import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKWCSCW1eIC81HKopqLtTrZcjwzhBKn7w",
  authDomain: "fir-5981c.firebaseapp.com",
  projectId: "fir-5981c",
  storageBucket: "fir-5981c.firebasestorage.app",
  messagingSenderId: "158025329174",
  appId: "1:158025329174:web:5caa6f15daddbec12d2337"
};


const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export { firestoreDB };