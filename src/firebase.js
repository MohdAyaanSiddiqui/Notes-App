import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrbZ4sRRqq6e8deiwJci__q96VS55WR9s",
  authDomain: "note-app-2f776.firebaseapp.com",
  projectId: "note-app-2f776",
  storageBucket: "note-app-2f776.firebasestorage.app",
  messagingSenderId: "456344427414",
  appId: "1:456344427414:web:471f6261385a6f3ff8dbb7",
  measurementId: "G-BQL8RR81MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

export default app;
