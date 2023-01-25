// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtlRXlrgfULiWXEL3qr10MstzjyGWCZHs",
  authDomain: "crwn-clothing-db-83ae9.firebaseapp.com",
  projectId: "crwn-clothing-db-83ae9",
  storageBucket: "crwn-clothing-db-83ae9.appspot.com",
  messagingSenderId: "262281689964",
  appId: "1:262281689964:web:92cebcbf1c63fc6f0d5149",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
