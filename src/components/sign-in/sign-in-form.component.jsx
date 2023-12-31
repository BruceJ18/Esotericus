import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/formInput.component";

import { BUTTON_TYPE } from "../button/button.component";
import Button from "../button/button.component";

import "./sign-in.styles.scss";
import { signInWithEmailAndPassword } from "firebase/auth";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailPassword(email, password);
      resetFormFields();

    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;

        case "auth/user-not-found":
          alert("no user associated with this email ");
          break;
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit" >sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE.google}
            onClick={signInWithGoogle}
          >
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
