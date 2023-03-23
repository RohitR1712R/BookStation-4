import firebase from "firebase"
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyBBxBb9ob89txAUK9XivmSEoGLWnbaMYkM",
    authDomain: "bookstation-28f00.firebaseapp.com",
    projectId: "bookstation-28f00",
    storageBucket: "bookstation-28f00.appspot.com",
    messagingSenderId: "427121855855",
    appId: "1:427121855855:web:194ecf738873e70918ec9a"
  };

  firebase.intializeApp(firebaseConfig)

  export default firebase.firestore();