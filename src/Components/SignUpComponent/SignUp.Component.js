import React, { useState } from "react";
import FormInput from "../Form-Input/Form-Input.Component";
import CustomButton from "../Custom-button/Custom-button.Component";
import "./SignUp.style.scss";
import { signUpStart } from "../../reducers/UserReducer/User.actions";
import { connect } from "react-redux";

const SignUpComponent = (props) => {
  const [signUpCredentials, setSignUpCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = signUpCredentials;

  const handleSubmit =  (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(`Password don't match`);
      return;
    } else {
      props.signUpStart({ email, password, displayName });
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setSignUpCredentials({ ...signUpCredentials, [name]: value });
  };

  return (
    <div className="signUp">
      <h1 className="title">I do not have a account</h1>
      <span>Sign Up with your email and password</span>
      <form className="Sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          required
          handleChange={handleChange}
          label="Display Name"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={handleChange}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          handleChange={handleChange}
          label="Confirm Password"
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default connect(null, { signUpStart })(SignUpComponent);
