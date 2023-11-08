import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBurR6pmohsG3HqkrAxULfbv9xDQg7tIq0",
  authDomain: "apple-store-mendoza.firebaseapp.com",
  projectId: "apple-store-mendoza",
  storageBucket: "apple-store-mendoza.appspot.com",
  messagingSenderId: "1034891951310",
  appId: "1:1034891951310:web:471a115c1b85081d7f649f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
