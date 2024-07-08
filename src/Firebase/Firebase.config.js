// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV0cs3W4I7H4kpJaHeN9NNyPTnVDMTkQY",
  authDomain: "golden-crest.firebaseapp.com",
  projectId: "golden-crest",
  storageBucket: "golden-crest.appspot.com",
  messagingSenderId: "780700842362",
  appId: "1:780700842362:web:c70dc896138e40996dbec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;