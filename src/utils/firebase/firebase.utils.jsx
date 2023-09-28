import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setdoc,
  setDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDWF0NF9JS4Xre7xZMPx2hVX9L2o-WBe7A",
  authDomain: "esotericus-db.firebaseapp.com",
  projectId: "esotericus-db",
  storageBucket: "esotericus-db.appspot.com",
  messagingSenderId: "365600812035",
  appId: "1:365600812035:web:b663694c208507391a7236",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  const userDocRef = doc(db, 'users', userAuth.uid );

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists())  {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdDate,
        ...additionalInformation
      })
    }
    catch (error) {
      console.log("error creating the user", error.message)
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
} 

