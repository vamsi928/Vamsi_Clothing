import React from "react";
import "./SignIn-SignOut.style.scss";

import "./SignIn-SignOut.Component";
import SignInComponent from "../../Components/SignInComponent/SignIn.Component";
import SignUpComponent from "../../Components/SignUpComponent/SignUp.Component";

const SignInSignOut = () => (
  <div className="signInSignUp">
    <SignInComponent />
    <SignUpComponent />
  </div>
);

export default SignInSignOut;
