// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   VITE_apiKey=AIzaSyBar1xfK0kYpb8S3u53Xop_BjCADskFCHU
// VITE_authDomain=toy-building-project.firebaseapp.com
// VITE_projectId=toy-building-project
// VITE_storageBucket=toy-building-project.appspot.com
// VITE_messagingSenderId=320957466870
// VITE_appId=1:320957466870:web:13f7b43974ad788a2584d7
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;