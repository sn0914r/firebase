import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAKWCSCW1eIC81HKopqLtTrZcjwzhBKn7w",
  authDomain: "fir-5981c.firebaseapp.com",
  databaseURL: "https://fir-5981c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-5981c",
  storageBucket: "fir-5981c.firebasestorage.app",
  messagingSenderId: "158025329174",
  appId: "1:158025329174:web:5caa6f15daddbec12d2337"
};


const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);
const realtimeDB = getDatabase(app)
export { firestoreDB, realtimeDB };