import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDRtgp1uI6zpvMyRCkbSBTPVGktEiwyy-Q",
    authDomain: "clone-9a05e.firebaseapp.com",
    databaseURL: "https://clone-9a05e.firebaseio.com",
    projectId: "clone-9a05e",
    storageBucket: "clone-9a05e.appspot.com",
    messagingSenderId: "141702011276",
    appId: "1:141702011276:web:718b99d1e8888865435ea9",
    measurementId: "G-7Y6RDN8JKW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth =  firebase.auth();

export { db, auth };