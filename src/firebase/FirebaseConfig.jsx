// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYJULFrMeeF6XFVp1y22HxUt2T8VKqCSc",
  authDomain: "blogapp-cf273.firebaseapp.com",
  projectId: "blogapp-cf273",
  storageBucket: "blogapp-cf273.appspot.com",
  messagingSenderId: "543317399711",
  appId: "1:543317399711:web:60e9ab58d2cb11c5d62aaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDb, auth, storage };