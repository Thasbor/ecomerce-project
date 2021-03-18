import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_rFD2CahNNUtOPSj8lqDuTGshQeUp0eY",
    authDomain: "ecom-tut-b9bcf.firebaseapp.com",
    projectId: "ecom-tut-b9bcf",
    storageBucket: "ecom-tut-b9bcf.appspot.com",
    messagingSenderId: "727766087673",
    appId: "1:727766087673:web:3d2637dee840cab017af28",
    measurementId: "G-386SYT3Y02"
  };

if(!firebase.apps.length) {
  firebase.initializeApp(config)
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;