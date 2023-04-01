import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHLB6nqUT3F1ggsvM9D54Jzq6K4PsrT4Q",
  authDomain: "fir-leaning-5a74e.firebaseapp.com",
  projectId: "fir-leaning-5a74e",
  storageBucket: "fir-leaning-5a74e.appspot.com",
  messagingSenderId: "565270946252",
  appId: "1:565270946252:web:cfff8d914c8f60f364fd69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database=getFirestore(app);
export const firebaseStorage=getStorage(app);