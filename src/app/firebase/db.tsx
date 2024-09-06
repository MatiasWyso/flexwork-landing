import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCrhjn0WfJSifgroNZXNLzsF8uhemPwUY",
  authDomain: "flexwork-landing.firebaseapp.com",
  projectId: "flexwork-landing",
  storageBucket: "flexwork-landing.appspot.com",
  messagingSenderId: "677211276504",
  appId: "1:677211276504:web:6d6a09d21582c6d23cc3ad",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
