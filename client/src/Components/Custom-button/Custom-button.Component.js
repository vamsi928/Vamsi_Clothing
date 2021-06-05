import React from "react";
import "./Custom-button.style.scss";
//import { SignIn } from '../../firebase/firebase.util';
import { CustomButtonContainer } from "./Custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
