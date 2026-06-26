import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ఇక్కడ మనం రియల్ కీస్ పెట్టాలి 
const firebaseConfig = {
  apiKey: "AIzaSy-DUMMY-KEY-REPLACE-ME",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456:web:abcd1234"
};

let app;
let auth: any;
let googleProvider: any;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();
} catch (error) {
  console.error("Firebase config error: Please update your keys in firebase.ts!");
}

export { auth, googleProvider };