// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXlnpgGPsdA2V6FvZTGOCmRWZYmVvp7jk",
  authDomain: "cerezos-pizzas-proyecto-react.firebaseapp.com",
  projectId: "cerezos-pizzas-proyecto-react",
  storageBucket: "cerezos-pizzas-proyecto-react.firebasestorage.app",
  messagingSenderId: "471508724722",
  appId: "1:471508724722:web:1ed4e7d79099d2c03ed96b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)