import firebase from 'firebase'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBXMIOvzzRzGRzJmGysmfQYYr1k3F-IxJY",
    authDomain: "osafreactauth.firebaseapp.com",
    projectId: "osafreactauth",
    storageBucket: "osafreactauth.appspot.com",
    messagingSenderId: "35460667470",
    appId: "1:35460667470:web:50822bced1bfb33c070b1f"
})

export const auth = app.auth() 
export default app