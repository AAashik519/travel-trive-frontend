 // Import the functions you need from the SDKs you need
 import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI7dVhGv4uEJLbd88ENhBo3vaxcq07Ofk",
  authDomain: "travel-trive-a7273.firebaseapp.com",
  projectId: "travel-trive-a7273",
  storageBucket: "travel-trive-a7273.appspot.com",
  messagingSenderId: "211495475697",
  appId: "1:211495475697:web:4950b2ee9034dcac768c50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)