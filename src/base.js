import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBpctzmWeH9NUewN4INKQh1WMLhv33vF_M",
    authDomain: "catch-of-the-day-26.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-26.firebaseio.com"
    
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;