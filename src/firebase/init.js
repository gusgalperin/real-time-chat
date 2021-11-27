// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxvFHAchfEHne9JTnL-PNYpGAtDSsNSjM",
    authDomain: "real-time-chat-a6339.firebaseapp.com",
    projectId: "real-time-chat-a6339",
    storageBucket: "real-time-chat-a6339.appspot.com",
    messagingSenderId: "950007126402",
    appId: "1:950007126402:web:fc4f3ddaa29db253da979b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

function getDb() {
    return db
}

export { getDb }