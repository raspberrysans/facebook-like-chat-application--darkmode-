import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
        apiKey: "AIzaSyA0mCC9v9EpdHQ5NEVheMxPuxLuPkeT-f0",
        authDomain: "raspberrychat-88567.firebaseapp.com",
        projectId: "raspberrychat-88567",
        storageBucket: "raspberrychat-88567.appspot.com",
        messagingSenderId: "497856495303",
        appId: "1:497856495303:web:524921737e75cf38b6c8e2"    
}).auth();