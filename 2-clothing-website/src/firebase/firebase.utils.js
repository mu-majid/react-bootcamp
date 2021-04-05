import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDqYEU1SIQG_CKeQCUm3ubct0jb95G_wJ8",
  authDomain: "clothing-app-fbca1.firebaseapp.com",
  projectId: "clothing-app-fbca1",
  storageBucket: "clothing-app-fbca1.appspot.com",
  messagingSenderId: "365474736747",
  appId: "1:365474736747:web:bee1d3a7ca63987d4adf2e",
  measurementId: "G-VNVJ3SN36K"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
}

export default firebase;