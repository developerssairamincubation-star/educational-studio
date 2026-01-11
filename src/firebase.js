import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCuozUsOnERByjkwAdmaP_tqfrfZA3uIR4",
    authDomain: "wix-website-97ebd.firebaseapp.com",
    projectId: "wix-website-97ebd",
    storageBucket: "wix-website-97ebd.firebasestorage.app",
    messagingSenderId: "113188342966",
    appId: "1:113188342966:web:3392c30e469b4224b66a17"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
