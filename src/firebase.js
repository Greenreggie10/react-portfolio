import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCNYggh5CxC8G_xro_RPl59IqpmKTDt2wc",
    authDomain: "react-portfolio-20ace.firebaseapp.com",
    projectId: "react-portfolio-20ace",
    storageBucket: "react-portfolio-20ace.appspot.com",
    messagingSenderId: "728774216035",
    appId: "1:728774216035:web:5d516e3e9a51a01633eb56",
    measurementId: "G-EC426JX3YH"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);