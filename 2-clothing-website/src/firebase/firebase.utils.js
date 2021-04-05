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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }
    catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
}

export default firebase;