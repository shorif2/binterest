// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiP_fZdhd8X7CCHayvzmZ8s7jBfndoDGk",
  authDomain: "binterest-74821.firebaseapp.com",
  projectId: "binterest-74821",
  storageBucket: "binterest-74821.appspot.com",
  messagingSenderId: "639746613544",
  appId: "1:639746613544:web:3f29c4a7ce28c3161f701d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);