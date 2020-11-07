import firebase from 'firebase/app'; // Creates your own firebase app instance
import 'firebase/auth';  // extends these specific features to my firebase app
import 'firebase/database'; 
import config from './config';

const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    databaseURL: config.firebaseDbUrl,
    projectId: config.firebaseProjId,
    storageBucket: config.firebaseStorageBucket,
    messagingSenderId: config.firebaseMsgSenderId,
    appId: config.firebaseAppId
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;