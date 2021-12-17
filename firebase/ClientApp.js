import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword,} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAmkr74_csCXuXL6cFnpxfNFg2XpkeZXSk",
    authDomain: "sportlobitv.firebaseapp.com",
    databaseURL: "https://sportlobitv-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sportlobitv",
    storageBucket: "sportlobitv.appspot.com",
    messagingSenderId: "135890210747",
    appId: "1:135890210747:web:afa642083291bfb02bfe9e",
    measurementId: "G-178LRM7FYR"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export function Signup(email, password){
   return createUserWithEmailAndPassword(auth, email, password)  
}
export function login(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}
export function logout(){
 return signOut(auth);
}
export function useAuth(){
  const [ currentUser, setCurrentUser ] = useState();


  useEffect(() => {
const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
return unsub;
  },[]
  )

  return currentUser
}
export {db}
export function getStaticProps() {
  
};