import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyDXmOu5g9rqx7TUvox4xqLmc0_Rtg6tsQ4",
    authDomain: "closet-f5b00.firebaseapp.com",
    projectId: "closet-f5b00",
    storageBucket: "closet-f5b00.appspot.com",
    messagingSenderId: "755222625074",
    appId: "1:755222625074:web:33f9c46a438dab372eb52b",
    measurementId: "G-9BGKY3TM67"
};
// Initialize Firebase
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
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider) 

export default firebase;
