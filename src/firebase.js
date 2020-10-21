import firebase from 'firebase/app' // Creates your own firebase app instance
import 'firebase/auth'  // extends these specific features to my firebase app
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyAD5lZXQ0-hTCEDvlwQr2G6TYu5E5W9nfM",
    authDomain: "todoreactapp-ce050.firebaseapp.com",
    databaseURL: "https://todoreactapp-ce050.firebaseio.com",
    projectId: "todoreactapp-ce050",
    storageBucket: "todoreactapp-ce050.appspot.com",
    messagingSenderId: "1004282693910",
    appId: "1:1004282693910:web:76579a9df2948118e0e837"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;