import firebase from 'firebase'
import 'firebase/auth'

const config = {
    apiKey: process.env.REACT_APP_AUTH_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_AUTH_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_AUTH_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_AUTH_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_AUTH_FIREBASE_API_ID,
}

export const auth = firebase.initializeApp(config).auth()

export default !firebase.apps.length 
    ? firebase.initializeApp(config).firestore() 
    : firebase.app().firestore()