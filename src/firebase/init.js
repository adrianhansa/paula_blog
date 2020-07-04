import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDUCFkmvRqXWGWk_LvaD1oYWRsWBuj74eA",
    authDomain: "blog-477c8.firebaseapp.com",
    databaseURL: "https://blog-477c8.firebaseio.com",
    projectId: "blog-477c8",
    storageBucket: "blog-477c8.appspot.com",
    messagingSenderId: "185497365316",
    appId: "1:185497365316:web:90b04c224bb672886c4511",
    measurementId: "G-GK6ZTPYQ8W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const db = firebase.firestore()
export const auth = firebase.auth()