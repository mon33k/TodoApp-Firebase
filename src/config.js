require('dotenv').config()

module.exports = {
    firebaseApiKey: process.env.FIREBASE_APIKEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTHDOMAIN,
    firebaseDbUrl: process.env.FIREBASE_DBURL,
    firebaseProjId: process.env.FIRBEASE_PROJECTID, 
    firebaseStorageBucket: process.env.FIREBASE_STORAGEBUCKET,
    firebaseMsgSenderId: process.env.FIREBASE_MSGSENDERID,
    firebaseAppId: process.env.FIREBASE_APPID
}