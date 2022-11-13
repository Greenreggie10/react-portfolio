import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDkH7WUPTj9Sx4n6Y7ye4DWS-nOsCox6M4",
    authDomain: "port-1505c.firebaseapp.com",
    projectId: "port-1505c",
    storageBucket: "port-1505c.appspot.com",
    messagingSenderId: "692239131468",
    appId: "1:692239131468:web:67a71b53a77491e8bfe5e9",
    measurementId: "G-5S2FR1CJ5Y"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);