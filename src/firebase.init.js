// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey : process.env.REACT_APP_apiKey,
//   authDomain : process.env.REACT_APP_authDomain,
//   projectId : process.env.REACT_APP_projectId,
//   storageBucket : process.env.REACT_APP_storageBucket,
//   messagingSenderId : process.env.REACT_APP_messagingSenderId,
//   appId : process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAGPEFwj3cIN86dGonBZ3oE0dV2Oso7ik0",
  authDomain: "gymtrainerwebsite.firebaseapp.com",
  projectId: "gymtrainerwebsite",
  storageBucket: "gymtrainerwebsite.appspot.com",
  messagingSenderId: "197426188420",
  appId: "1:197426188420:web:8354cce94b56085bd4b2d1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;