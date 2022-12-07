import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // your firebase config
  apiKey: "AIzaSyCphT_oYj5o6Yxl66OnrY4J3Pg0_wV0k7k",

  authDomain: "se-project-33ad8.firebaseapp.com",

  projectId: "se-project-33ad8",

  storageBucket: "se-project-33ad8.appspot.com",

  messagingSenderId: "389858378161",

  appId: "1:389858378161:web:38cf0a09fd1ec717983d90",

  measurementId: "G-PFQX9ZJ3WS"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };
