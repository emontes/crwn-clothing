import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAjEcMB_KGR_KHlDMyn4S5FRrB6PHdmTx0",
    authDomain: "crwn-db-80354.firebaseapp.com",
    databaseURL: "https://crwn-db-80354.firebaseio.com",
    projectId: "crwn-db-80354",
    storageBucket: "crwn-db-80354.appspot.com",
    messagingSenderId: "663715746917",
    appId: "1:663715746917:web:01f02b2d3dca1295dae28c"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;