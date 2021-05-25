import React from "react";
import "./Custom-button.style.scss";
//import { SignIn } from '../../firebase/firebase.util';

const CustomButton = ({ children, googleSignIn,inverted , ...otherProps}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${googleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
