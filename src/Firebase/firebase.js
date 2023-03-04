import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


// firebase confilg
const firebaseConfig = {
  apiKey: "AIzaSyARgOkdb0gG4C1EKwmiDxIsUyn7FVdF8E8",
  authDomain: "react-firebase-authentic-31163.firebaseapp.com",
  projectId: "react-firebase-authentic-31163",
  storageBucket: "react-firebase-authentic-31163.appspot.com",
  messagingSenderId: "668811069022",
  appId: "1:668811069022:web:41b643322331a3d43856cf",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };