import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up-form.component";



const SignIn = () => {


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  

  return (
    <div>
      <h1>sign-in page</h1>
      <button onClick={logGoogleUser}>sign-in with Google Popup.</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
