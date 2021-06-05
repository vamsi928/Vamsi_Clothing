import React from "react";
//import SignInSignOut from '../../pages/SignIn-SignOut/SignIn-SignOut.Component';
import "./SignIn.style.scss";
import FormInput from "../Form-Input/Form-Input.Component";
import CustomButton from "../Custom-button/Custom-button.Component";
import { connect } from "react-redux";
import { googleSignInStart, emailSignInStart } from '../../reducers/UserReducer/User.actions';
import {useState} from 'react';

const SignInComponent = (props) => {

  const [userCredentials, setUserCredentials] = useState({email:'', password: ''});

 const onhandleSubmit =  (event) => {
    event.preventDefault();

    const {email,password} = userCredentials;

    props.emailSignInStart({email,password});


  
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({...userCredentials,
      [name]: value
    })
  };


    return (
      <div className="signIn">
        <h1 className="title">I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={onhandleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={userCredentials.email}
            required
            handleChange={handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={userCredentials.password}
            required
            handleChange={handleChange}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="Submit" value="Submit Form"  >Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={() => props.googleSignInStart()}
              googleSignIn="googleSignIn"
            >Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    );
}

const mapStateToProps = (state) => {
  //console.log(state);
  return { auth: state.userReducer.currentUser };
};

export default connect(mapStateToProps, { googleSignInStart, emailSignInStart })(SignInComponent);
