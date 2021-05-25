import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCsupiwpRSHE8kjfftF9iVGheRSw9nXSM",
  authDomain: "clothing-react-4d726.firebaseapp.com",
  projectId: "clothing-react-4d726",
  storageBucket: "clothing-react-4d726.appspot.com",
  messagingSenderId: "548002152223",
  appId: "1:548002152223:web:ccdcde1ee6835d29be3a2a",
  measurementId: "G-0B6MP848N5",
};

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
        ...additionalData,
      });
    } catch (error) {
      console.log(`Error creating user ${error}`);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().useDeviceLanguage();
provider.setCustomParameters({ prompt: "select_account" });

export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
