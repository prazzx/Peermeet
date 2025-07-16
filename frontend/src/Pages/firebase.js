import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6eW1yIveff1alhN5LCNWqEl4M4Sa-C_0",
  authDomain: "peermeet-4ca05.firebaseapp.com",
  projectId: "peermeet-4ca05",
  storageBucket: "peermeet-4ca05.firebasestorage.app",
  messagingSenderId: "748369034101",
  appId: "1:748369034101:web:077ea57bfd6a6933c5f13c",
  measurementId: "G-K3K85WJ2YV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();