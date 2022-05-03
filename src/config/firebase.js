import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAZ8PD26NRyEovuLHW_PyCKwNs12vWqVgY",
    authDomain: "rs-flowers.firebaseapp.com",
    projectId: "rs-flowers",
    storageBucket: "rs-flowers.appspot.com",
    messagingSenderId: "390891462399",
    appId: "1:390891462399:web:8a3ee4e1b8dd82074fb6ca"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);

