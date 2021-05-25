import React from "react";
import "./Header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import { setCurrentUser } from "../../actions/Authentication/clothing-auth";
import CartIcon from "../CartIconComponent/CartIcon.Component";
import CartDropdown from "../CartDropdownComponent/CartDropdown.Component";


class HeaderComponent extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      //onAuthStateChanged returns a methond to unsubscribe assigning that to
      //unsubscribeFromAuth and calling it before unmounting the App
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({ ...snapShot.data(), id: snapShot.id });
        });
      } else {
        this.props.setCurrentUser(user);
      }
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };


  render() {
    return (
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo />
        </Link>
        <div className="options">
          <Link to="/shop" className="option">
            SHOP
          </Link>
          <Link to="/contact" className="option">
            CONTACT
          </Link>
          {this.props.user ? (
            <div
              className="option"
              style={{ cursor: "pointer" }}
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
          ) : (
            <Link to="/signIn" className="option">
              SIGN IN
            </Link>
          )}
          <CartIcon  />
        </div>
        {this.props.showDropdown ? <CartDropdown /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    user: state.userReducer.currentUser,
    showDropdown: state.cartReducer.showDropdown,
  };
};

export default connect(mapStateToProps, { setCurrentUser })(
  HeaderComponent
);
