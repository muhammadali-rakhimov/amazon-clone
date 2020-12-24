import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBxdma6d1VLT7tg2TPFHYZGyzZ_V6pm-YM",
  authDomain: "clone-93a72.firebaseapp.com",
  projectId: "clone-93a72",
  storageBucket: "clone-93a72.appspot.com",
  messagingSenderId: "526045223224",
  appId: "1:526045223224:web:fcb90b5f38c308c7a889cd",
  measurementId: "G-HV37ZHEDGC",
});

const auth = firebase.auth();

export { auth };
