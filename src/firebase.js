import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyALwsrablHLo-5YrOP_gS4ZLa5D-HM0Yn0",
    authDomain: "disney-clone-28374.firebaseapp.com",
    projectId: "disney-clone-28374",
    storageBucket: "disney-clone-28374.appspot.com",
    messagingSenderId: "913326220381",
    appId: "1:913326220381:web:e51cecd05e89e521dfd9b4"
   
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;