import React from "react";
//import SignInSignOut from '../../pages/SignIn-SignOut/SignIn-SignOut.Component';
import "./SignIn.style.scss";
import FormInput from "../Form-Input/Form-Input.Component";
import CustomButton from "../Custom-button/Custom-button.Component";
import { auth, signIn } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from "../../actions/Authentication/clothing-auth";

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onhandleSubmit = async (event) => {
    event.preventDefault();

    const {email,password} = this.state;
    
    try {
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
       console.log(error);
    }

  
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // componentDidMount = () =>{
  //     window.gapi.load("client:auth2", () => {
  //         window.gapi.client.init({
  //             clientId : "513749762684-886f7kom0auc81inr5c0mmv6mk7dk17c.apps.googleusercontent.com",
  //             scope: "email"
  //         }).then(() =>{
  //             this.auth = window.gapi.auth2.getAuthInstance();
  //         })
  //     })
  // }

  googleSignIn = () => {
    signIn();
  };

  render() {
    return (
      <div className="signIn">
        <h1 className="title">I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.onhandleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="Submit" value="Submit Form"  >Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={() => signIn()}
              googleSignIn="googleSignIn"
            >Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return { auth: state.userReducer.currentUser };
};

export default connect(mapStateToProps, { setCurrentUser })(SignInComponent);
