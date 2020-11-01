import firebase from 'firebase/app'; // Creates your own firebase app instance
import 'firebase/auth';  // extends these specific features to my firebase app
import 'firebase/database'; 
import config from './config';

const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    databaseURL: config.firebaseDbUrl,
    projectId: config.firebaseProjId,
    storageBucket: "todoreactapp-ce050.appspot.com",
    messagingSenderId: "1004282693910",
    appId: "1:1004282693910:web:76579a9df2948118e0e837"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;