import React from "react";
import FormInput from "../Form-Input/Form-Input.Component";
import CustomButton from "../Custom-button/Custom-button.Component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import "./SignUp.style.scss";
import {connect} from 'react-redux';
import {setCurrentUser} from '../../actions/Authentication/clothing-auth';

class SignUpComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) =>{
      event.preventDefault();
      const {displayName,email,password, confirmPassword} =  this.state;

      if(password !== confirmPassword){
          alert(`Password don't match`);
          return ;
      } else {
          try {
              const { user } = await auth.createUserWithEmailAndPassword(email,password);

              //const userAuth = {...user,...displayName};
              await createUserProfileDocument(user,{displayName});
              this.setState({
                displayName: "",
                email: "",      
                password: "",
                confirmPassword: "",
              });
          } catch (error) {
              console.log(`Error ${error}`);
              
          }
      }
  }

  handleChange = (e) =>{
      const {value,name} = e.target;
      this.setState({
          [name] : value
      })
  }

  render() {
    return (
      <div className="signUp">
        <h1 className="title">I do not have a account</h1>
        <span>Sign Up with your email and password</span>
        <form className="Sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            required
            handleChange={this.handleChange}
            label="Display Name"
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            required
            handleChange={this.handleChange}
            label="Confirm Password"
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}


export default connect(null,{setCurrentUser})(SignUpComponent);